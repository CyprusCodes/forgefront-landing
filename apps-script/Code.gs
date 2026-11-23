/**
 * ForgeFront – demo request form handler (Google Apps Script)
 *
 * Paste this into Extensions → Apps Script of the Google Sheet that should
 * collect demo requests, then deploy it as a Web app (see README.md).
 * Each request is added as a row to the sheet and a notification email is
 * sent to NOTIFY_TO. Nothing is ever sent to the person who filled the form.
 */

// Who receives the notification. Separate several addresses with commas.
const NOTIFY_TO = 'info@forgefront.net';

// Sheet tab that stores the requests. Created automatically if missing.
const SHEET_NAME = 'Requests';

// Form fields, in the order they appear in the sheet and the email.
const FIELDS = [
  ['name', 'Full name'],
  ['email', 'Work email'],
  ['company', 'Company'],
  ['phone', 'Phone'],
  ['units', 'Units for sale'],
  ['message', 'Message'],
];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Spam guard: real visitors never fill the hidden "website" field.
  if (p.website) return json({ ok: true });

  const values = FIELDS.map(([key]) => clean(p[key]));
  const [name, email, company] = values;
  if (!name || !email || !company) return json({ ok: false, error: 'missing_fields' });

  const sheet = getSheet();
  sheet.appendRow([new Date(), ...values, clean(p.page)]);

  const lines = FIELDS
    .map(([, label], i) => (values[i] ? `${label}: ${values[i]}` : ''))
    .filter(Boolean)
    .join('\n');

  MailApp.sendEmail({
    to: NOTIFY_TO,
    subject: `Demo request – ${company}`,
    body: `New demo request from the ForgeFront website.\n\n${lines}\n\nAll requests: ${getSpreadsheet().getUrl()}`,
    // Lets you press "Reply" to answer the person directly. Nothing is sent to them automatically.
    replyTo: email,
    name: 'ForgeFront website',
  });

  return json({ ok: true });
}

// Run this once from the editor to grant permissions and send a test email.
// The link to the sheet is printed in the execution log.
function sendTestEmail() {
  Logger.log('Requests sheet: ' + getSpreadsheet().getUrl());
  doPost({ parameter: { name: 'Test Person', email: NOTIFY_TO.split(',')[0], company: 'Test Company', message: 'This is a test request.' } });
}

function getSpreadsheet() {
  // Works whether the script was opened from a Sheet or created on its own.
  const active = SpreadsheetApp.getActive();
  if (active) return active;
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SPREADSHEET_ID');
  if (id) return SpreadsheetApp.openById(id);
  const created = SpreadsheetApp.create('ForgeFront demo requests');
  props.setProperty('SPREADSHEET_ID', created.getId());
  return created;
}

function getSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received', ...FIELDS.map(([, label]) => label), 'Page']);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, FIELDS.length + 2).setFontWeight('bold');
  }
  return sheet;
}

function clean(value) {
  return String(value || '').trim().slice(0, 2000);
}

function json(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
