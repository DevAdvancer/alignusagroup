const SITE_URL = 'https://alignusagroup.com';

export const consultingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/consulting/#service`,
  name: 'Align USA Consulting Services',
  description: 'Workforce strategy, compliance advisory, process optimization, and operating models that help US teams scale responsibly. Houston-based business consulting.',
  provider: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Align USA Group',
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Align USA Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Workforce Strategy',
        description: 'Scaling teams from 5 to 50 without losing culture or control.',
      },
      {
        '@type': 'Offer',
        name: 'Compliance Consulting',
        description: 'Audit-ready compliance programs for fast-growing companies.',
      },
      {
        '@type': 'Offer',
        name: 'Process Optimization',
        description: 'Fixing broken sprints and restoring shipping velocity.',
      },
      {
        '@type': 'Offer',
        name: 'Technology Advisory',
        description: 'Tech debt assessment and smallest viable rewrite planning.',
      },
      {
        '@type': 'Offer',
        name: 'M&A Integration',
        description: 'Merging engineering orgs without stalling delivery.',
      },
      {
        '@type': 'Offer',
        name: 'Cost Optimization',
        description: 'Tightening costs without breaking delivery or compliance.',
      },
    ],
  },
  serviceType: 'Business Consulting',
  knowsAbout: [
    'Workforce Strategy',
    'Compliance',
    'Process Optimization',
    'Operating Models',
    'M&A Integration',
    'Technology Advisory',
    'Business Strategy',
  ],
};

export const consultingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Align USA consulting help with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA consulting helps with workforce strategy, compliance gaps, process drift, tech debt, M&A integration, and cost optimization. We solve business challenges that arise when growth outruns the operating model.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Align USA consulting engagement work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA follows a five-stage roadmap: Audit (diagnose the operating model), Frame (articulate target state), Pilot (run an instrumented pilot), Scale (repeat across teams), and Steady State (hand off to in-house ops with documentation).',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I get from an Align USA consulting engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA delivers two durable artifacts: a Workforce Operating Model (roles, ratios, time zones, escalation paths) and a Compliance & Risk Register (mapped to owners, evidence, and review cadence).',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I engage Align USA for consulting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA consulting is most valuable when you are scaling fast, facing audits, experiencing process drift, accumulating tech debt, planning M&A, or under cost pressure.',
      },
    },
  ],
};
