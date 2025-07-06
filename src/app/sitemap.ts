import type { MetadataRoute } from 'next'
import { routeIndex } from '@/lib/route/routeIndex'

const url = 'https://hasuro.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = routeIndex.map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
