// This is a browser-compatible version of the sitemap generator
// It will be used during the build process via a separate Node.js script

import { destinations } from '../data/destinations';
import { tours } from '../data/tours';

const baseUrl = 'https://sharptravel.com';

const generateSitemap = () => {
  const pages = [
    '',
    '/destinations',
    '/tours',
    '/services',
    '/about',
    '/contact'
  ];

  // Add dynamic routes for destinations
  destinations.forEach(destination => {
    pages.push(`/destinations/${destination.id}`);
  });

  // Add dynamic routes for tours
  tours.forEach(tour => {
    pages.push(`/tours/${tour.id}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
};

export default generateSitemap; 