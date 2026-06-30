import { NextResponse } from 'next/server';

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
