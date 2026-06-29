import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// City paths permanently removed — return 410 Gone so Google stops crawling them
const REMOVED_PATHS = [
  "/dealers/california/fresno",
  "/dealers/colorado/colorado-springs",
];

export function middleware(request: NextRequest) {
  if (REMOVED_PATHS.includes(request.nextUrl.pathname)) {
    return new NextResponse("This page has been permanently removed.", {
      status: 410,
      headers: { "Content-Type": "text/plain" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dealers/:state/:city*"],
};
