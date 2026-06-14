import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

const PUBLIC_PATHS = ['/', '/about', '/resources', '/notices', '/login'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC_PATHS.some(p => pathname === p)) return NextResponse.next();
  const token = req.cookies.get('raptor_token')?.value;
  if (!token) return NextResponse.redirect(new URL('/login', req.url));
  try {
    const decoded: any = verifyToken(token);
    if (pathname.startsWith('/dashboard/admin') && decoded.role !== 'admin')
      return NextResponse.redirect(new URL('/dashboard/user', req.url));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = { matcher: ['/dashboard/:path*', '/api/users/:path*'] };
