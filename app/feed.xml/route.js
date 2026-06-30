const SITE_URL = 'https://alignusagroup.com';
const SITE_NAME = 'Align USA Group';
const SITE_DESCRIPTION = 'Insights on staffing, compliance, and software delivery from the Align USA Group team.';

const blogPosts = [
  {
    title: 'Coming Soon: Align USA Insights',
    description: 'We are drafting the first set of insights pieces on staffing, compliance, and software delivery. Check back soon for expert advice from the Align USA team.',
    pubDate: new Date().toISOString(),
    link: '/blog',
    guid: `${SITE_URL}/blog/coming-soon`,
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
