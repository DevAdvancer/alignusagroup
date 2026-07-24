import { Metadata } from 'next';

const SITE_URL = 'https://www.alignusagroup.com';
const SITE_NAME = 'Align USA Group';
const DEFAULT_IMAGE = '/og-image.png';

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  url = '',
  type = 'website',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Staffing, Software, Consulting`;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, SITE_NAME, 'Align USA', 'Houston staffing', 'Houston software development'],
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      site: '@alignusagroup',
      creator: '@alignusagroup',
    },
  };
}

// JSON-LD Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Align USA', 'Align', 'Align Group', 'Align USA Staffing'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo/icon.png`,
    width: 512,
    height: 512,
  },
  description: 'Houston-based staffing, software, and consulting for US companies.',
  foundingDate: '2026',
  foundingLocation: {
    '@type': 'City',
    name: 'Houston',
    addressRegion: 'TX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'alignus26@gmail.com',
    telephone: '+1-832-555-0100',
    availableLanguage: 'English',
    areaServed: 'US',
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

// Breadcrumb Schema Generator
export function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
