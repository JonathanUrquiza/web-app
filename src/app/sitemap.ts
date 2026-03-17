import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2024-03-01');
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${siteUrl}/devweb`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${siteUrl}/devweb/proyect`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${siteUrl}/devweb/view`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${siteUrl}/resume`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${siteUrl}/resume/experiencia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${siteUrl}/resume/dashboard`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ];
}
