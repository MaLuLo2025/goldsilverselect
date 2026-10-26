import { NextResponse } from 'next/server';

// Built once at deploy time, as under Next 14 (Next 15 no longer caches GET route handlers by default).
export const dynamic = 'force-static';

export async function GET() {
  const key = process.env.SGI_YOUTUBE_API_KEY ?? '';
  return new NextResponse(
    `window.SGI_YOUTUBE_API_KEY = '${key}';`,
    {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}
