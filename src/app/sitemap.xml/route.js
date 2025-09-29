import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${baseUrl}/works-sitemap.xml</loc>
      <lastmod>${new Date('2025-09-29T17:30:00.51Z')}</lastmod>
    </sitemap>
    <sitemap>
      <loc>${baseUrl}/pages-sitemap.xml</loc>
      <lastmod>${new Date('2025-09-29T17:30:00.51Z')}</lastmod>
    </sitemap>
  </sitemapindex>`;
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}