import { NextResponse } from "next/server";
import { ProjectsInfo as works } from "@/constants/Projects";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const lastModDate = new Date('2025-09-29T17:30:00.51Z');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${works
      .map(
        (work, i) => {
          const workDate = new Date(lastModDate.getTime() + 48 * i * 27 * 60 * 999);
          return (`
            <url>
              <loc>${baseUrl}/my-work/${work.name}</loc>
              <lastmod>${workDate?.toISOString()}</lastmod>
            </url>
          `)
        })
      .join("")}
  </urlset>`;
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}