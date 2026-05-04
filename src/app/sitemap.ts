import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getpluggedinsf.com'
  const now = new Date()

  return [
    // Core pages
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
    },

    // Top-level landing
    {
      url: `${baseUrl}/restaurants`,
      lastModified: now,
    },

    // Services hub
    {
      url: `${baseUrl}/services`,
      lastModified: now,
    },

    // Service detail pages
    {
      url: `${baseUrl}/services/network-assessment`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/services/network-troubleshooting`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/services/network-installation`,
      lastModified: now,
    },
  ]
}
