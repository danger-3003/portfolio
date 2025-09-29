import { NextResponse } from 'next/server'

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const content =
    `# *
User-agent: *

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/pages-sitemap.xml
Sitemap: ${baseUrl}/works-sitemap.xml`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
