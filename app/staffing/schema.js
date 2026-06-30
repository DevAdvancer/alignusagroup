const SITE_URL = 'https://alignusagroup.com';

export const staffingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/staffing/#service`,
  name: 'Align USA Staffing Solutions',
  description: 'Contract, contract-to-hire, and student-workforce hiring with payroll and EOR-style support for US companies. Houston-based staffing with E-Verify enrollment.',
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
    name: 'Align USA Staffing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Contract Staffing',
        description: 'Individual contractors placed against specific roles. Fastest path to a body in the seat.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: 'Contract-to-Hire Staffing',
        description: 'Try before you commit with our contract-to-hire model.',
      },
      {
        '@type': 'Offer',
        name: 'Dedicated Remote Teams',
        description: 'A full pod of engineers, recruiters, or analysts on long-term retainer.',
      },
      {
        '@type': 'Offer',
        name: 'Employer of Record (EOR)',
        description: 'We hold the employment relationship; you direct the work.',
      },
    ],
  },
  serviceType: 'Staffing Agency',
  knowsAbout: ['IT Staffing', 'Contract Staffing', 'E-Verify', 'I-9 Compliance', 'OPT/CPT', 'Payroll'],
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'US Companies seeking staffing solutions',
  },
};

export const staffingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can Align USA fill a staffing position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA typically fills contract roles in 7-14 days. Our efficient hiring funnel ensures fast delivery without compromising quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of workers can Align USA staff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA provides contract staffing, contract-to-hire, dedicated remote teams, and EOR-style arrangements. We staff both IT and non-IT roles including engineers, recruiters, analysts, healthcare support, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Align USA handle compliance for staffing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Align USA is E-Verify enrolled and handles I-9 verification, work authorization (including OPT/CPT review), background checks, and payroll setup for every placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Align USA staff for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA staffs for healthcare, legal & compliance, education, staffing firms, payroll & HR tech, startups, technology companies, and public sector organizations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Align USA staffing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA offers flexible engagement models. Contract staffing starts with competitive rates, and dedicated team arrangements are priced based on team size and engagement length. Contact us for a custom quote.',
      },
    },
  ],
};
