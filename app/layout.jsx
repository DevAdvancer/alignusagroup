import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import RevealObserver from '../components/Reveal';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const SITE_URL = 'https://www.alignusagroup.com';
const SITE_NAME = 'Align USA Group';
const SITE_DESCRIPTION =
  'Houston-based staffing, software, and consulting for US companies — scale your team and ship software with compliance-ready hiring from day one.';
const LOGO_URL = `${SITE_URL}/logo/icon.png`;
const PHONE = '+1-832-555-0100';
const EMAIL = 'alignus26@gmail.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Staffing, Software, Consulting | Houston, TX`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Align USA',
    'Align USA Group',
    'Align staffing',
    'Align software development',
    'Align consulting',
    'Houston staffing company',
    'Houston TX staffing',
    'US staffing agency',
    'IT staffing Houston',
    'software development Houston',
    'consulting Houston TX',
    'E-Verify staffing',
    'contract staffing',
    'contract-to-hire',
    'custom software development',
    'workforce solutions USA',
    'staffing and consulting',
    'Houston Texas staffing',
    'Align',
    'Align Group',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Business Services',
  classification: 'Staffing, Software Development, Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
    },
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  verification: {
    google: 'G-PLACEHOLDER', // Add your Google Search Console verification
    yandex: 'PLACEHOLDER', // Add Yandex verification if needed
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Staffing, Software, Consulting | Houston, TX`,
    description: SITE_DESCRIPTION,
    emails: EMAIL,
    phoneNumbers: PHONE,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Staffing, Software, Consulting in Houston, TX`,
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: `${SITE_NAME} Logo`,
        type: 'image/png',
      },
    ],
    defaultImageWidth: 1200,
    defaultImageHeight: 630,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@alignusagroup',
    creator: '@alignusagroup',
    title: `${SITE_NAME} — Staffing, Software, Consulting | Houston, TX`,
    description: SITE_DESCRIPTION,
    images: {
      url: '/og-image.png',
      alt: `${SITE_NAME} — Staffing, Software, Consulting`,
    },
  },
  facebook: {
    appId: 'PLACEHOLDER', // Add Facebook App ID if needed
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Comprehensive JSON-LD Structured Data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Align USA', 'Align', 'Align Group', 'Align USA Staffing', 'Align USA Consulting'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description: SITE_DESCRIPTION,
  foundingDate: '2026',
  foundingLocation: {
    '@type': 'City',
    name: 'Houston',
    addressRegion: 'TX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: EMAIL,
    telephone: PHONE,
    availableLanguage: 'English',
    areaServed: 'US',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17350 State Hwy 249, Ste 220 #35058',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77064',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.9634,
    longitude: -95.5353,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'Staffing',
    'Software Development',
    'Business Consulting',
    'Compliance',
    'E-Verify',
    'Workforce Strategy',
    'IT Staffing',
    'Contract Staffing',
  ],
  sameAs: [
    'https://www.linkedin.com/company/alignusagroup',
    'https://twitter.com/alignusagroup',
    'https://www.facebook.com/alignusagroup',
    'https://www.instagram.com/alignusagroup',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Staffing, Software, and Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Staffing Solutions',
          description: 'Contract, contract-to-hire, and student-workforce hiring with payroll and EOR-style support — all run from Houston, TX.',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: 'United States',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Staffing Types',
            itemListElement: [
              { '@type': 'Offer', name: 'Contract Staffing' },
              { '@type': 'Offer', name: 'Contract-to-Hire Staffing' },
              { '@type': 'Offer', name: 'Dedicated Remote Teams' },
              { '@type': 'Offer', name: 'Employer of Record (EOR)' },
            ],
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Development',
          description: 'Custom platforms, automation systems, and enterprise integrations — from MVP to scale.',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: 'United States',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Software Services',
            itemListElement: [
              { '@type': 'Offer', name: 'Custom Web Applications' },
              { '@type': 'Offer', name: 'Automation & Internal Tools' },
              { '@type': 'Offer', name: 'Enterprise Integrations' },
              { '@type': 'Offer', name: 'MVP Development' },
            ],
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consulting Services',
          description: 'Workforce strategy, compliance advisory, and operating models that help US teams scale responsibly.',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: 'United States',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Consulting Services',
            itemListElement: [
              { '@type': 'Offer', name: 'Workforce Strategy' },
              { '@type': 'Offer', name: 'Compliance Consulting' },
              { '@type': 'Offer', name: 'Process Optimization' },
              { '@type': 'Offer', name: 'Technology Advisory' },
            ],
          },
        },
      },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: LOGO_URL,
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17350 State Hwy 249, Ste 220 #35058',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77064',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.9634,
    longitude: -95.5353,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  sameAs: [
    'https://www.linkedin.com/company/alignusagroup',
    'https://twitter.com/alignusagroup',
  ],
};

// FAQ Schema for Home Page
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Align USA Group?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA Group is a Houston-based staffing, software development, and consulting firm serving US companies. We offer contract staffing, contract-to-hire, custom software development, and business consulting services with compliance-ready hiring from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Align USA offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA offers three main services: 1) Staffing Solutions - contract, contract-to-hire, and student-workforce hiring with EOR-style support. 2) Software Development - custom web applications, automation systems, and enterprise integrations. 3) Consulting Services - workforce strategy, compliance advisory, and operating models.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Align USA E-Verify enrolled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Align USA Group is E-Verify enrolled. We verify the work authorization of every hire we place and ensure compliance with I-9 requirements, OPT/CPT regulations, and all federal employment laws.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Align USA located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA Group is headquartered in Houston, Texas at 17350 State Hwy 249, Ste 220 #35058, Houston, TX 77064. We serve companies across the United States with our staffing, software, and consulting services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Align USA fill a staffing position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA typically fills contract roles in 7-14 days. Our six-stage hiring funnel (Sourcing, Screening, Assessment, Client Interview, Compliance, Onboarding) is designed for efficient delivery while maintaining quality standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Align USA serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Align USA serves industries where compliance and velocity must coexist: Healthcare support, Legal & compliance, Staffing firms, Education & international student programs, Payroll & HR tech, Startups, Technology companies, and Public sector.',
      },
    },
  ],
};

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, localBusinessSchema, faqSchema],
};

const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=s||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#04153d" />
        <meta name="color-scheme" content="light dark" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston" />
        <meta name="geo.position" content="29.9634;-95.5353" />
        <meta name="ICBM" content="29.9634, -95.5353" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta property="business:contact_data:street_address" content="17350 State Hwy 249, Ste 220 #35058" />
        <meta property="business:contact_data:locality" content="Houston" />
        <meta property="business:contact_data:region" content="TX" />
        <meta property="business:contact_data:postal_code" content="77064" />
        <meta property="business:contact_data:country_name" content="USA" />
        <meta property="business:contact_data:email" content={EMAIL} />
        <meta property="business:contact_data:phone_number" content={PHONE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <RevealObserver />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
