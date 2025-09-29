import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const baseDate = new Date("2025-09-29T17:30:30Z");

  const pages = [
    "",
    "my-work",
    "connect"
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page, i) => {
        const pageDate = new Date(baseDate.getTime() + i * 29 * 60 * 999); // add 30min * index
        return `
          <url>
            <loc>${baseUrl}${page ? `/${page}` : ""}</loc>
            <lastmod>${pageDate.toISOString()}</lastmod>
          </url>`;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
