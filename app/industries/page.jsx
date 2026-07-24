import Client from './Client';

const SITE_URL = 'https://www.alignusagroup.com';

export const metadata = {
  title: 'Industries We Serve — Align USA Group',
  description:
    'Healthcare, legal, staffing, payroll, education, technology, and startups — industries where compliance and velocity have to coexist. Houston-based staffing and consulting.',
  keywords: [
    'industries Align USA',
    'healthcare staffing',
    'legal compliance consulting',
    'staffing firms',
    'education staffing',
    'technology staffing',
    'startup consulting',
    'Houston industries',
  ],
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
  openGraph: {
    title: 'Industries We Serve — Align USA Group',
    description: 'Healthcare, legal, staffing, payroll, education, technology, and startups — industries where compliance and velocity have to coexist.',
    url: `${SITE_URL}/industries`,
    type: 'website',
  },
};

export default function IndustriesPage() {
  return <Client />;
}
