import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

const SITE_URL = 'https://www.alignusagroup.com';

export const metadata = {
  title: 'Align USA Insights — Staffing, Compliance & Software Delivery Blog',
  description:
    'Practical insights on staffing compliance, workforce strategy, custom software development, and business consulting from the Align USA Group team.',
  keywords: [
    'Align USA insights',
    'staffing blog',
    'compliance blog',
    'software development blog',
    'business consulting blog',
    'E-Verify staffing',
    'I-9 compliance',
    'Houston staffing insights',
    'workforce strategy',
    'staffing best practices',
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Align USA Insights — Staffing, Compliance & Software Delivery Blog',
    description:
      'Expert insights on staffing, compliance, workforce strategy, and software delivery from the Align USA Group team in Houston, TX.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'e-verify-compliance-staffing-2026',
    tag: 'Compliance',
    title: 'E-Verify Compliance for Staffing Agencies: What Every Employer Needs to Know in 2026',
    excerpt: 'E-Verify remains one of the most effective tools for confirming work authorization, but many staffing agencies still treat it as a checkbox exercise rather than a core compliance discipline. Here is what you need to know heading into 2026.',
    date: 'June 15, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'contract-staffing-vs-direct-hire',
    tag: 'Staffing Strategy',
    title: 'Contract Staffing vs Direct Hire: Which Model Fits Your Business?',
    excerpt: 'The choice between contract staffing and direct hire is not a one-time decision — it is a strategic lever that affects your cost structure, time-to-productivity, and long-term workforce quality. Understanding when to use each model is a skill most growing companies never develop.',
    date: 'June 8, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'houston-it-staffing-trends-2026',
    tag: 'IT Staffing',
    title: 'Houston IT Staffing Trends Shaping 2026',
    excerpt: 'Houston\'s IT talent market is undergoing a structural shift. After years of oil-and-gas dominance, technology roles now represent the fastest-growing employment category in the greater Houston metro. Here is what that means for companies trying to hire.',
    date: 'May 28, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'opt-cpt-staffing-international-students',
    tag: 'International Staffing',
    title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
    excerpt: 'International students on OPT and CPT represent a highly motivated, often underutilized talent pool. But hiring them requires navigating a compliance landscape that trips up even experienced HR teams. Here is how staffing agencies can do it right.',
    date: 'May 18, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'i-9-compliance-checklist-staffing',
    tag: 'Compliance',
    title: 'I-9 Compliance Checklist for Staffing Companies',
    excerpt: 'Form I-9 errors are the most common compliance violation for staffing companies — and they are surprisingly easy to avoid with the right process. This checklist walks through every required step for complete I-9 compliance.',
    date: 'May 5, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'staffing-metrics-kpi-houston',
    tag: 'Staffing Strategy',
    title: 'Staffing KPIs Every Houston Hiring Manager Should Track',
    excerpt: 'Most hiring managers track the basics — time-to-fill, cost-per-hire, offer acceptance rate. But the staffing metrics that actually predict workforce quality go deeper. Here are the KPIs that matter most for Houston companies building durable teams.',
    date: 'April 22, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'benefits-of-business-consulting',
    tag: 'Business Consulting',
    title: '5 Ways Business Consulting Helps Your Company Scale',
    excerpt: 'Growing companies often resist bringing in consultants because they associate it with expensive reports that sit on shelves. The right consulting engagement works differently — it creates operational change that compounds over time.',
    date: 'April 10, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'compliance-consulting-staffing-firms',
    tag: 'Compliance',
    title: 'Why Compliance Consulting Is Non-Negotiable for Staffing Firms',
    excerpt: 'For staffing firms, compliance is not a department — it is the product. Every misclassified worker, every incomplete I-9, every missed wage-and-hour requirement is a liability that can shut a firm down. Here is why compliance consulting should be a permanent fixture, not a reactive fix.',
    date: 'March 28, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'staffing-agency-houston-texas',
    tag: 'Staffing Strategy',
    title: 'How to Choose a Staffing Agency in Houston, Texas',
    excerpt: 'Houston has over 600 staffing agencies operating within the metro area. Choosing the right one requires more than a Google search and a comparison of rates. Here is the framework Align USA Group uses when evaluating staffing partnerships.',
    date: 'March 15, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'custom-software-houston-texas',
    tag: 'Software Development',
    title: 'Why Houston Companies Are Turning to Custom Software Development',
    excerpt: 'For years, Houston companies defaulting to off-the-shelf software made sense — the technology sector was secondary to energy and healthcare. That assumption is breaking down fast. Custom software development is now a strategic investment for Houston companies of every size.',
    date: 'March 1, 2026',
    readTime: '7 min read',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.alignusagroup.com' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.alignusagroup.com/blog' },
  ],
};

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Align USA Group Insights',
  description: 'Practical insights on staffing, compliance, workforce strategy, and software development from the Align USA Group team.',
  numberOfItems: blogPosts.length,
  itemListElement: blogPosts.map((post, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: post.title,
    url: `https://www.alignusagroup.com/blog/${post.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Insights"
        title="Align USA Insights — Staffing, Compliance, and Software Delivery"
        lead="Practical writing from the Align USA Group team on the workforce, compliance, and technology challenges that growing US companies actually face."
      />

      {/* Featured / Latest */}
      <section className="section surface-light">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <div className="eyebrow">Latest</div>
              <h2 className="display-l">Recent Insights from Align USA</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 0 }}>
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`blog-row reveal reveal-d${Math.min(i + 1, 5)}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  gap: 24,
                  padding: '28px 0',
                  borderBottom: i < blogPosts.length - 1 ? '1px solid var(--divider)' : 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <span className="chip" style={{ fontSize: 11 }}>{post.tag}</span>
                    <span style={{ fontSize: 12, color: 'var(--body-gray)' }}>{post.date}</span>
                    <span style={{ fontSize: 12, color: 'var(--body-gray)' }}>·</span>
                    <span style={{ fontSize: 12, color: 'var(--body-gray)' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 400, letterSpacing: -0.2 }}>
                    {post.title}
                  </h3>
                  <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--body-gray)', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                </div>
                <div style={{ color: 'var(--ps-blue)', flexShrink: 0 }} aria-hidden="true">
                  <Icon name="arrow-right" size={22} alt="" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-mist">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <h2 className="display-l" style={{ marginBottom: 16 }}>Need Help With a Specific Challenge?</h2>
            <p className="body-lg" style={{ marginBottom: 32 }}>
              Our insights are written from real engagement experience. If you are dealing with a workforce, compliance, or delivery challenge, the fastest path to an answer is a conversation.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary btn-lg" href="/contact">Talk to Align USA</Link>
              <Link className="btn btn-ghost btn-lg" href="/services">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
    </>
  );
}
