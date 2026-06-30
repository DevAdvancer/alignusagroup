const SITE_URL = 'https://alignusagroup.com';
const SITE_NAME = 'Align USA Group';
const SITE_DESCRIPTION = 'Insights on staffing, compliance, and software delivery from the Align USA Group team.';

const blogPosts = [
  {
    title: 'E-Verify Compliance for Staffing Agencies: What Every Employer Needs to Know in 2026',
    description: 'E-Verify remains one of the most effective tools for confirming work authorization, but many staffing agencies still treat it as a checkbox exercise rather than a core compliance discipline. Here is what you need to know heading into 2026.',
    pubDate: new Date('2026-06-15').toISOString(),
    link: '/blog/e-verify-compliance-staffing-2026',
    guid: `${SITE_URL}/blog/e-verify-compliance-staffing-2026`,
  },
  {
    title: 'Contract Staffing vs Direct Hire: Which Model Fits Your Business?',
    description: 'The choice between contract staffing and direct hire is not a one-time decision — it is a strategic lever that affects your cost structure, time-to-productivity, and long-term workforce quality. Understanding when to use each model is a skill most growing companies never develop.',
    pubDate: new Date('2026-06-08').toISOString(),
    link: '/blog/contract-staffing-vs-direct-hire',
    guid: `${SITE_URL}/blog/contract-staffing-vs-direct-hire`,
  },
  {
    title: 'Houston IT Staffing Trends Shaping 2026',
    description: 'Houston\'s IT talent market is undergoing a structural shift. After years of oil-and-gas dominance, technology roles now represent the fastest-growing employment category in the greater Houston metro. Here is what that means for companies trying to hire.',
    pubDate: new Date('2026-05-28').toISOString(),
    link: '/blog/houston-it-staffing-trends-2026',
    guid: `${SITE_URL}/blog/houston-it-staffing-trends-2026`,
  },
  {
    title: 'OPT and CPT Staffing: How Staffing Agencies Hire International Students',
    description: 'International students on OPT and CPT represent a highly motivated, often underutilized talent pool. But hiring them requires navigating a compliance landscape that trips up even experienced HR teams. Here is how staffing agencies can do it right.',
    pubDate: new Date('2026-05-18').toISOString(),
    link: '/blog/opt-cpt-staffing-international-students',
    guid: `${SITE_URL}/blog/opt-cpt-staffing-international-students`,
  },
  {
    title: 'I-9 Compliance Checklist for Staffing Companies',
    description: 'Form I-9 errors are the most common compliance violation for staffing companies — and they are surprisingly easy to avoid with the right process. This checklist walks through every required step for complete I-9 compliance.',
    pubDate: new Date('2026-05-05').toISOString(),
    link: '/blog/i-9-compliance-checklist-staffing',
    guid: `${SITE_URL}/blog/i-9-compliance-checklist-staffing`,
  },
  {
    title: 'Staffing KPIs Every Houston Hiring Manager Should Track',
    description: 'Most hiring managers track the basics — time-to-fill, cost-per-hire, offer acceptance rate. But the staffing metrics that actually predict workforce quality go deeper. Here are the KPIs that matter most for Houston companies building durable teams.',
    pubDate: new Date('2026-04-22').toISOString(),
    link: '/blog/staffing-metrics-kpi-houston',
    guid: `${SITE_URL}/blog/staffing-metrics-kpi-houston`,
  },
  {
    title: '5 Ways Business Consulting Helps Your Company Scale',
    description: 'Growing companies often resist bringing in consultants because they associate it with expensive reports that sit on shelves. The right consulting engagement works differently — it creates operational change that compounds over time.',
    pubDate: new Date('2026-04-10').toISOString(),
    link: '/blog/benefits-of-business-consulting',
    guid: `${SITE_URL}/blog/benefits-of-business-consulting`,
  },
  {
    title: 'Why Compliance Consulting Is Non-Negotiable for Staffing Firms',
    description: 'For staffing firms, compliance is not a department — it is the product. Every misclassified worker, every incomplete I-9, every missed wage-and-hour requirement is a liability that can shut a firm down. Here is why compliance consulting should be a permanent fixture, not a reactive fix.',
    pubDate: new Date('2026-03-28').toISOString(),
    link: '/blog/compliance-consulting-staffing-firms',
    guid: `${SITE_URL}/blog/compliance-consulting-staffing-firms`,
  },
  {
    title: 'How to Choose a Staffing Agency in Houston, Texas',
    description: 'Houston has over 600 staffing agencies operating within the metro area. Choosing the right one requires more than a Google search and a comparison of rates. Here is the framework Align USA Group uses when evaluating staffing partnerships.',
    pubDate: new Date('2026-03-15').toISOString(),
    link: '/blog/staffing-agency-houston-texas',
    guid: `${SITE_URL}/blog/staffing-agency-houston-texas`,
  },
  {
    title: 'Why Houston Companies Are Turning to Custom Software Development',
    description: 'For years, Houston companies defaulting to off-the-shelf software made sense — the technology sector was secondary to energy and healthcare. That assumption is breaking down fast. Custom software development is now a strategic investment for Houston companies of every size.',
    pubDate: new Date('2026-03-01').toISOString(),
    link: '/blog/custom-software-houston-texas',
    guid: `${SITE_URL}/blog/custom-software-houston-texas`,
  },
];

export async function GET() {
  const rssItems = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <guid isPermaLink="false">${post.guid}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
    </item>
  `
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SITE_NAME} — Insights</title>
    <link>${SITE_URL}/blog</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-US</language>
    <managingEditor>alignus26@gmail.com (${SITE_NAME})</managingEditor>
    <webMaster>alignus26@gmail.com (${SITE_NAME})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/logo/icon.png</url>
      <title>${SITE_NAME} — Insights</title>
      <link>${SITE_URL}/blog</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
