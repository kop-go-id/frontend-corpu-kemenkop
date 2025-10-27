// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Cegah akses langsung ke folder _next/static (hanya folder, bukan file)
  if (
    url.pathname === '/_next/static/' || // akses langsung ke folder
    url.pathname.endsWith('/_next/static/chunks/') // folder chunks
  ) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/_next/static/', 
    '/_next/static/chunks/', 
  ],
};
