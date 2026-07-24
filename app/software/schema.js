const SITE_URL = 'https://www.alignusagroup.com';

export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/software/#service`,
  name: 'Align USA Software Development',
  description: 'Custom web applications, automation systems, internal tools, enterprise integrations, and MVP development. Houston-based software development team.',
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
    name: 'Align USA Software Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Custom Web Applications',
        description: 'Full-stack web applications built with React, Next.js, Node.js, and modern frameworks.',
      },
      {
        '@type': 'Offer',
        name: 'Automation & Internal Tools',
        description: 'Workflow automation and internal tools to streamline operations.',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Integrations',
        description: 'API integrations with enterprise systems like Salesforce, Stripe, and Snowflake.',
      },
      {
        '@type': 'Offer',
        name: 'MVP Development',
        description: 'Rapid MVP delivery for startups and new product ideas.',
      },
    ],
  },
  serviceType: 'Software Development',
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS',
    'GCP',
    'Kubernetes',
    'Web Development',
    'MVP',
    'API Integration',
  ],
};

export const softwareFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does Align USA take to build an MVP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA typically delivers MVPs in 6-12 weeks depending on scope. Our fixed-scope MVP model ensures predictable timelines for startup and validation builds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Align USA use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA works with React, Next.js, TypeScript, Node.js, Python, Go, PostgreSQL, Redis, AWS, GCP, Kubernetes, Terraform, and integrates with Stripe, Snowflake, Airflow, OpenAI, Twilio, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Align USA work with our existing development team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Align USA offers specialist sprints for specific outcomes (integration, audit, hardening, migration) that integrate seamlessly with your existing team.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Align USA software development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA offers three engagement models: Fixed-scope MVP (6-12 weeks), Dedicated pod (3+ months with US-based tech lead), and Specialist sprints (2-6 weeks). Contact us for a custom quote.',
      },
    },
  ],
};
