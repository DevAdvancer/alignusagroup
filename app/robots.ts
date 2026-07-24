import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.alignusagroup.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/careers/thanks', '/contact/thanks'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
