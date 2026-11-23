# Demo form → Google Sheet + email

1. Sign in to the company Google account that should own the form.
2. Create a Google Sheet (sheets.new), name it "ForgeFront demo requests".
3. Extensions → Apps Script. Delete the sample code and paste `Code.gs`.
4. Check `NOTIFY_TO` at the top and save.
5. Choose `sendTestEmail` in the function list and press Run. Allow the permissions.
   A test row appears in the sheet and a test email arrives at NOTIFY_TO.
6. Deploy → New deployment → type "Web app".
   Execute as: Me. Who has access: Anyone. Deploy and copy the Web app URL.
7. Put the URL in `src/content/en.ts` → `site.formEndpoint`.

When you change the script later: Deploy → Manage deployments → Edit →
Version: New version. The URL stays the same.
