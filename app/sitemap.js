const SITE = 'https://alignusagroup.com';

const ROUTES = [
  // Main pages with highest priority
  { path: '/', priority: 1.0, changeFrequency: 'weekly', title: 'Align USA Group — Staffing, Software, Consulting' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly', title: 'About Align USA Group' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly', title: 'Align USA Services — Staffing, Software, Consulting' },
  { path: '/staffing', priority: 0.9, changeFrequency: 'weekly', title: 'Align USA Staffing Solutions — Contract & EOR Hiring' },
  { path: '/software', priority: 0.9, changeFrequency: 'weekly', title: 'Align USA Software Development — Custom Platforms & Apps' },
  { path: '/consulting', priority: 0.9, changeFrequency: 'monthly', title: 'Align USA Consulting — Workforce Strategy & Compliance' },
  { path: '/industries', priority: 0.7, changeFrequency: 'monthly', title: 'Industries We Serve — Align USA' },
  { path: '/case-studies', priority: 0.6, changeFrequency: 'monthly', title: 'Align USA Case Studies' },
  { path: '/careers', priority: 0.8, changeFrequency: 'weekly', title: 'Align USA Careers — Open Roles' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly', title: 'Align USA Insights — Staffing, Tech & Consulting' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly', title: 'Contact Align USA — Book a Consultation' },

  // Legal pages
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly', title: 'Privacy Policy — Align USA' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly', title: 'Terms of Service — Align USA' },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly', title: 'Cookie Policy — Align USA' },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
