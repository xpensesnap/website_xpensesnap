import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Base URL of your website
  const baseUrl = 'https://xpensesnap.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/', // Example of hiding specific routes from crawlers
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
