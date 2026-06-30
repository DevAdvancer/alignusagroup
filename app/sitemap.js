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

  // Blog posts
  { path: '/blog/e-verify-compliance-staffing-2026', priority: 0.8, changeFrequency: 'monthly', title: 'E-Verify Compliance for Staffing Agencies: 2026 Guide' },
  { path: '/blog/contract-staffing-vs-direct-hire', priority: 0.8, changeFrequency: 'monthly', title: 'Contract Staffing vs Direct Hire: Which Model Fits Your Business?' },
  { path: '/blog/houston-it-staffing-trends-2026', priority: 0.8, changeFrequency: 'monthly', title: 'Houston IT Staffing Trends Shaping 2026' },
  { path: '/blog/opt-cpt-staffing-international-students', priority: 0.8, changeFrequency: 'monthly', title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students' },
  { path: '/blog/i-9-compliance-checklist-staffing', priority: 0.8, changeFrequency: 'monthly', title: 'I-9 Compliance Checklist for Staffing Companies' },
  { path: '/blog/staffing-metrics-kpi-houston', priority: 0.8, changeFrequency: 'monthly', title: 'Staffing KPIs Every Houston Hiring Manager Should Track' },
  { path: '/blog/benefits-of-business-consulting', priority: 0.8, changeFrequency: 'monthly', title: '5 Ways Business Consulting Helps Your Company Scale' },
  { path: '/blog/compliance-consulting-staffing-firms', priority: 0.8, changeFrequency: 'monthly', title: 'Why Compliance Consulting Is Non-Negotiable for Staffing Firms' },
  { path: '/blog/staffing-agency-houston-texas', priority: 0.8, changeFrequency: 'monthly', title: 'How to Choose a Staffing Agency in Houston, Texas' },
  { path: '/blog/custom-software-houston-texas', priority: 0.8, changeFrequency: 'monthly', title: 'Why Houston Companies Are Turning to Custom Software Development' },

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
