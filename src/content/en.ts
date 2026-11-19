export const site = {
  appUrl: 'https://app.forgefront.net',
  email: 'info@forgefront.net',
  // Google Apps Script Web app URL (see apps-script/README.md).
  // While this is empty the form falls back to opening the visitor's email app.
  formEndpoint: 'https://script.google.com/macros/s/AKfycbzFv_pgZs_gPiewOyXwpKDGbocimIS7xj4bsZn_EbY23bQvQDuiUz0dQwl2K-GvOjH5/exec',
}

export const common = {
  skipLink: 'Skip to content',
  navLabel: 'Main navigation',
  nav: { workflow: 'How it works', features: 'Features', contact: 'Contact' },
  menu: 'Menu',
  login: 'Log in',
  demo: 'Request a demo',
  footer: {
    tagline: 'Sales ERP & CRM for property developers.',
    product: 'Product',
    privacy: 'Privacy policy',
    company: 'Company',
    write: 'Questions? Write to us',
    rights: 'All rights reserved.',
  },
}

export const landing = {
  hero: {
    label: 'Sales ERP & CRM for property developers',
    titleStart: 'From first enquiry to final',
    titleAccent: 'instalment',
    description:
      'ForgeFront keeps leads, agents, unit reservations, contracts and payment plans in one system. Sales, finance and management work from the same numbers.',
    secondary: 'See how it works',
  },
  preview: {
    label: 'Example of the ForgeFront sales screen',
    workspace: 'Harbour View',
    workspaceSub: 'Residences',
    navBefore: ['Dashboard', 'Leads', 'Units'],
    financeLabel: 'Finance',
    navAfter: ['Customer accounts', 'Commissions', 'Reports'],
    chips: ['All blocks', 'Block A', 'Block B', 'Block C', 'This week'],
    kpis: [
      { label: 'Available units', value: '42', note: 'of 120', tone: 'ok' },
      { label: 'Reserved this week', value: '6', note: '+2 vs last week', tone: 'ok' },
      { label: 'Deposits collected', value: '€86,400', note: 'this month', tone: 'ok' },
      { label: 'Overdue instalments', value: '3', note: '€21,050 total', tone: 'wait' },
    ],
    tabs: [
      {
        id: 'reservations',
        name: 'Reservations',
        action: 'New reservation',
        columns: ['Unit', 'Type', 'Price', 'Sold by', 'Status'],
        rows: [
          { cells: ['B-14', '2+1', '€184,000', 'In-house'], status: 'Deposit paid', tone: 'ok', selected: true },
          { cells: ['B-07', '3+1', '€246,500', 'Partner agency'], status: 'Contract sent', tone: 'info' },
          { cells: ['A-22', '1+1', '€129,900', 'In-house'], status: 'Awaiting approval', tone: 'wait' },
          { cells: ['C-03', '2+1', '€192,000', 'Partner agency'], status: 'Reserved', tone: 'info' },
          { cells: ['A-09', '1+1', '€132,500', 'In-house'], status: 'Deposit paid', tone: 'ok' },
        ],
      },
      {
        id: 'contracts',
        name: 'Contracts',
        action: 'New contract',
        columns: ['Unit', 'Type', 'Value', 'Sold by', 'Status'],
        rows: [
          { cells: ['B-14', '2+1', '€184,000', 'In-house'], status: 'Signed', tone: 'ok', selected: true },
          { cells: ['B-07', '3+1', '€246,500', 'Partner agency'], status: 'Sent to buyer', tone: 'info' },
          { cells: ['A-05', '1+1', '€138,000', 'Partner agency'], status: 'Signed', tone: 'ok' },
          { cells: ['C-11', '3+1', '€258,000', 'In-house'], status: 'Draft', tone: 'neutral' },
          { cells: ['A-09', '1+1', '€132,500', 'In-house'], status: 'Signed', tone: 'ok' },
        ],
      },
      {
        id: 'payments',
        name: 'Payments',
        action: 'Record payment',
        badge: '3',
        columns: ['Unit', 'Instalment', 'Amount', 'Sold by', 'Status'],
        rows: [
          { cells: ['B-14', '4 of 12', '€8,200', 'In-house'], status: 'Paid', tone: 'ok', selected: true },
          { cells: ['A-05', '2 of 10', '€6,900', 'Partner agency'], status: 'Paid', tone: 'ok' },
          { cells: ['B-07', '5 of 12', '€8,200', 'Partner agency'], status: 'Overdue', tone: 'wait' },
          { cells: ['C-03', 'Deposit', '€19,200', 'Partner agency'], status: 'Due 1 Dec', tone: 'info' },
          { cells: ['A-09', '1 of 10', '€6,600', 'In-house'], status: 'Paid', tone: 'ok' },
        ],
      },
    ],
    detail: {
      unit: 'B-14',
      facts: '2+1 · Floor 4 · 96 m²',
      status: 'Deposit paid',
      rows: [
        ['Price', '€184,000'],
        ['Sold by', 'In-house'],
      ],
      planLabel: 'Payment plan',
      paid: 4,
      total: 12,
      instalments: [
        { name: 'Instalment 3', date: '1 Oct', state: 'paid' },
        { name: 'Instalment 4', date: '1 Nov', state: 'paid' },
        { name: 'Instalment 5 · €8,200', date: '1 Dec', state: 'next' },
        { name: 'Instalment 6', date: '1 Jan', state: 'later' },
      ],
      reminder: 'Reminder scheduled for 28 Nov',
    },
  },
  problem: {
    title: 'Most sales teams still run on spreadsheets.',
    description:
      'Leads sit in one file, reservations in another, payments in the accounting system. Nobody sees the full picture until something goes wrong.',
    effects: [
      'An instalment falls due and nobody follows up',
      'Two agents promise the same unit to different buyers',
      'Month-end sales figures take days to put together',
    ],
  },
  workflow: {
    title: 'One record for every sale',
    intro: 'Each unit carries its full history, from the first call to the last payment.',
    steps: [
      { title: 'Leads & agents', detail: 'Log every enquiry, assign it to an agent or agency and track commissions per project.' },
      { title: 'Reservations & approvals', detail: 'Hold a unit, take the deposit and route discounts or exceptions to the right manager.' },
      { title: 'Contracts & payments', detail: 'Generate the contract, set the payment plan and let ForgeFront send the reminders.' },
    ],
  },
  features: {
    title: 'Reporting and finance, built in.',
    ask: {
      label: 'Example question asked in ForgeFront',
      query: 'overdue payments in Block B',
      summary: '3 payments overdue',
      total: '€21,050',
      rows: [
        { unit: 'B-07', item: 'Instalment 5', amount: '€8,200', late: '12 days' },
        { unit: 'B-11', item: 'Instalment 3', amount: '€6,450', late: '5 days' },
        { unit: 'B-02', item: 'Deposit balance', amount: '€6,400', late: '2 days' },
      ],
    },
    items: [
      { title: 'Live sales reporting', detail: 'Availability, conversions and collected revenue per project, always up to date.' },
      { title: 'Accounting & collections', detail: 'Deposits, instalments and customer balances in one ledger, with automatic reminders.' },
      { title: 'Ask your data', detail: 'Type a question like “overdue payments in Block B” and get the list, no report builder needed.' },
    ],
  },
  proof: { value: '1,000+', label: 'sales completed end to end in ForgeFront' },
  cta: {
    title: 'See it with your own projects.',
    description: 'Tell us a little about your company and we will set up a walkthrough around your units and payment plans.',
    or: 'Or email us at',
  },
}

export const contact = {
  title: 'Request a demo',
  intro:
    'Leave your details and we will get back to you by email to arrange a walkthrough.',
  emailLabel: 'Prefer email?',
  expectTitle: 'What happens next',
  expect: [
    'We read your request and reply by email.',
    'We agree on a time that suits your team.',
    'We walk you through ForgeFront using examples close to your projects.',
  ],
  form: {
    name: 'Full name',
    email: 'Work email',
    company: 'Company',
    phone: 'Phone',
    units: 'Units for sale',
    message: 'Anything we should know?',
    messageHint: 'For example your projects, or what you use today',
    optional: 'optional',
    select: 'Select…',
    submit: 'Send request',
    sending: 'Sending…',
    privacy: 'We only use these details to reply to your request.',
    privacyLink: 'Privacy policy',
    unitRanges: ['Under 50', '50–200', '200–500', 'More than 500'],
    errors: {
      required: 'Please fill in this field.',
      email: 'Please enter a valid email address.',
      summary: 'Please check the highlighted fields.',
      send: 'Your request could not be sent. Please try again, or email us at',
    },
  },
  sent: {
    title: 'Thanks, we have your request',
    body: 'We will get back to you by email to arrange a walkthrough.',
    again: 'Send another request',
  },
  sentMail: {
    title: 'Almost done',
    body: 'Your email app should now open with the request filled in. Press send there and we will take it from there.',
    fallback: 'If nothing opened, send the details to',
    again: 'Edit the request',
  },
}

export const notFound = {
  title: 'Page not found',
  body: 'The page you are looking for does not exist or has moved.',
  home: 'Go to the homepage',
}

// DRAFT – review with a legal adviser before publishing. Replace every [bracketed] value.
export const privacy = {
  draft: true,
  draftNote: 'Draft: this policy has not been reviewed yet. Bracketed values still need to be filled in.',
  title: 'Privacy policy',
  updated: 'Last updated: [date]',
  sections: [
    {
      title: 'Who we are',
      body: [
        'This website is operated by [company legal name], [registered address] ("we"). We are responsible for the personal data you share with us through this website.',
        'Questions about this policy or your data: info@forgefront.net.',
      ],
    },
    {
      title: 'What we collect',
      body: [
        'When you request a demo we receive what you enter in the form: your name, work email and company, and if you choose to add them, your phone number, the number of units you sell and your message. We also record the time of the request and the page it was sent from.',
        'We do not collect anything else through this website.',
      ],
    },
    {
      title: 'Why we use it',
      body: [
        'We use these details only to reply to your request and arrange a demo. We do not sell your data and do not send you marketing without your consent.',
        'Our legal basis is taking steps at your request before a possible contract, and our legitimate interest in answering business enquiries (Article 6(1)(b) and (f) GDPR).',
      ],
    },
    {
      title: 'Who processes it',
      body: [
        'Form submissions are stored in Google Workspace tools (Google Sheets and Gmail) operated by Google on our behalf. The website and our email are hosted by [hosting provider]. Google may process data outside the European Economic Area under standard contractual clauses.',
      ],
    },
    {
      title: 'How long we keep it',
      body: [
        'We keep demo requests for [24 months] after our last contact with you, unless you become a customer, in which case our customer terms apply.',
      ],
    },
    {
      title: 'Your rights',
      body: [
        'You can ask us to access, correct or delete your data, to restrict or object to its use, or to receive a copy of it. Write to info@forgefront.net and we will respond within one month.',
        'You can also complain to the Office of the Commissioner for Personal Data Protection in Cyprus (dataprotection.gov.cy).',
      ],
    },
    {
      title: 'Cookies',
      body: [
        'This website does not use cookies or tracking tools.',
      ],
    },
    {
      title: 'Changes',
      body: [
        'If we change this policy we will update the date at the top of this page.',
      ],
    },
  ],
}
