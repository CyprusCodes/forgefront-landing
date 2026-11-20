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
  nav: { workflow: 'Product', agencies: 'Agencies', features: 'Features', contact: 'Contact' },
  menu: 'Menu',
  login: 'Log in',
  demo: 'Request a demo',
  enlargeScreen: 'View larger',
  closeScreen: 'Close image',
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
    label: 'ForgeFront',
    title: 'Sales ERP & CRM for property developers.',
    description:
      'ForgeFront keeps leads, price lists, reservations, agencies, contracts and payment plans in one system. Sales, finance and management work from the same numbers.',
    secondary: 'See how it works',
  },
  heroShots: [
    {
      src: '/screens/dashboard-overview.webp',
      width: 1545,
      height: 778,
      alt: 'ForgeFront dashboard with available, reserved, deposit and sold units, tasks and the sales leaderboard',
    },
    {
      src: '/screens/dashboard-graphs.webp',
      width: 1525,
      height: 890,
      alt: 'ForgeFront dashboard charts for all projects and for one project by unit type',
    },
  ],
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
    intro: 'Every sale keeps its full history, from the first enquiry to the last instalment.',
    shotLabel: 'Example ForgeFront screen',
    steps: [
      {
        id: 'leads',
        title: 'Leads & contacts',
        detail: 'Capture every enquiry on a lead board, keep buyers and contacts in one place and assign follow-ups to sales or the call centre.',
        image: { src: '/screens/leads.webp', width: 1525, height: 774, alt: 'Lead board in ForgeFront with leads grouped by stage' },
      },
      {
        id: 'inventory',
        title: 'Inventory & price lists',
        detail: 'Publish projects and units with prices, areas and views. Your team and your agencies see the same live availability.',
        image: { src: '/screens/units.webp', width: 1520, height: 771, alt: 'Unit details in ForgeFront with availability, price, area, plan code and view' },
      },
      {
        id: 'deposits',
        title: 'Reservations & deposits',
        detail: 'Hold a unit within your reservation rules, take the deposit and see the listing and agreed price side by side.',
        image: { src: '/screens/deposits-demo.webp', width: 1761, height: 893, alt: 'Deposit requests in ForgeFront with project, agency and listing price' },
      },
      {
        id: 'approvals',
        title: 'Approvals & contracts',
        detail: 'Reservation, extension, transfer and deposit requests wait in one queue. Contracts then move to signature and final approval.',
        image: { src: '/screens/approvals-demo.webp', width: 1761, height: 893, alt: 'Waiting actions in ForgeFront with reservation, extension, agency and transfer requests' },
      },
      {
        id: 'payments',
        title: 'Payment plans',
        detail: 'Each buyer gets a payment plan with interest and late fees worked out per instalment. Record payments, correct the principal or regenerate the plan when terms change.',
        image: { src: '/screens/plan-demo.webp', width: 1763, height: 892, alt: 'Payment plan in ForgeFront with 24 monthly instalments, principal, interest, late fees and status' },
      },
    ],
  },
  collections: {
    title: 'Follow up on overdue instalments.',
    description:
      'Set the steps once. When an instalment is late, ForgeFront sends the right message on the right channel and moves the account to your worklist when someone needs to act.',
    image: { src: '/screens/collections.webp', width: 1510, height: 655, alt: 'Collections escalation ladder in ForgeFront: email at 30 days, email and SMS at 60 days, legal letters at 90 and 120 days' },
    points: [
      'Email, SMS, WhatsApp and legal letters, each with its own template',
      'Customer ledger with principal, interest and late fees per account',
      'Legal follow-up and a full log of every notice sent',
    ],
  },
  agencies: {
    title: 'Sell through agencies, without losing control.',
    description:
      'Agencies in other countries log in to ForgeFront with their own accounts. They see live prices and availability, reserve units and follow their sales. Your accounting stays private.',
    points: [
      'Agency levels, franchises and registration requests',
      'Commission rates per agency level, tracked from submitted to paid',
      'Each role sees only its own work: sales reps their own sales, agencies their own reservations',
    ],
    image: { src: '/screens/agencies-demo.webp', width: 1918, height: 820, alt: 'Agency list in ForgeFront with agency levels, registration requests and franchises' },
  },
  afterSales: {
    title: 'The work does not stop at the sale.',
    intro: 'Buyers stay in the same system after they sign, so your team can look after them until handover and beyond.',
    image: { src: '/screens/construction.webp', width: 1525, height: 625, alt: 'Construction progress in ForgeFront with a log group for each project' },
    items: [
      { title: 'Construction progress', detail: 'Publish progress updates per project so buyers can follow their home being built.' },
      { title: 'Maintenance requests', detail: 'Log and track repair and maintenance issues from open to done.' },
      { title: 'Accommodation & transfer', detail: 'Arrange stays and airport transfers for buyers visiting the site.' },
      { title: 'After-sales support', detail: 'Every sold unit with its buyers, agreed price and sales representative in one list.' },
    ],
  },
  features: {
    title: 'Also in ForgeFront',
    ask: {
      label: 'Example question asked in ForgeFront',
      query: 'overdue payments in Block B',
      summary: '3 payments overdue',
      total: '£21,050',
      rows: [
        { unit: 'B-07', item: 'Instalment 5', amount: '£8,200', late: '12 days' },
        { unit: 'B-11', item: 'Instalment 3', amount: '£6,450', late: '5 days' },
        { unit: 'B-02', item: 'Deposit balance', amount: '£6,400', late: '2 days' },
      ],
    },
    items: [
      { title: 'Ask your data', detail: 'Type a question like “overdue payments in Block B” and get the list. Currently in beta.' },
      { title: 'Dashboards & reports', detail: 'Live availability per project, monthly sales charts, a leaderboard and reports you create when you need them.' },
      { title: 'Several currencies', detail: 'Prices and payments in GBP, EUR, USD and TRY with daily exchange rates.' },
      { title: 'Sales rules & campaigns', detail: 'Set reservation limits per representative, reservation durations and sales campaigns per project.' },
      { title: 'Calendar & tasks', detail: 'Site visits, follow-ups and to-dos for sales and call centre staff in one calendar.' },
      { title: 'Activity log', detail: 'Every action is recorded by user, so you can always see who changed what and when.' },
      { title: 'Payment imports', detail: 'Bring payments into customer accounts in bulk instead of typing them one by one.' },
      { title: 'Team notifications', detail: 'Post events such as a new deposit straight to your team channel.' },
      { title: 'Data export', detail: 'Export the data behind any list whenever you need it outside ForgeFront.' },
    ],
  },
  proof: { value: '1,000+', label: 'sales completed end to end in ForgeFront' },
  cta: {
    title: 'Take a closer look at ForgeFront.',
    description: 'Tell us about your company. We’ll arrange a demo.',
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
