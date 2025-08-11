export default function SiteMap() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  const pages = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/shop", priority: 0.8, changefreq: "weekly" },
    { path: "/about", priority: 0.5, changefreq: "monthly" },
    { path: "/contact", priority: 0.5, changefreq: "monthly" },
    { path: "/cart", priority: 0.3, changefreq: "weekly" },
    { path: "/checkout", priority: 0.3, changefreq: "weekly" },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `
  <url>
    <loc>${baseUrl}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return (
    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
      {sitemapXml}
    </pre>
  );
}
