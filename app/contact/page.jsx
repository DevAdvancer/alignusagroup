import Client from './Client';

const SITE_URL = 'https://alignusagroup.com';

export const metadata = {
  title: 'Contact Align USA Group — Book a Consultation',
  description:
    'Tell us what you are trying to align — staffing, software, or consulting. We respond within one business day. Houston-based staffing, software, and consulting.',
  keywords: [
    'contact Align USA',
    'Align USA contact',
    'Houston staffing consultation',
    'software development consultation',
    'business consulting contact',
    'staffing agency Houston',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Align USA Group — Book a Consultation',
    description: 'Tell us what you are trying to align — staffing, software, or consulting. We respond within one business day.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  return <Client />;
}
