const fs = require('fs');
const path = require('path');

// Import the sitemap generator function
const generateSitemap = require('../src/utils/sitemapGenerator').default;

// Generate the sitemap
const sitemap = generateSitemap();

// Write the sitemap to the public directory
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!'); 