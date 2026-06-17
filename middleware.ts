import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAdmin = pathname.startsWith("/dashboard/admin");
  const isUser  = pathname.startsWith("/dashboard/user");
  if (!isAdmin && !isUser) return NextResponse.next();

  const token = req.cookies.get("rwt_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback_secret");
    const { payload } = await jwtVerify(token, secret);
    if (isAdmin && (payload as any).role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard/user", req.url));
    }
    if (isUser && (payload as any).role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", req.url));
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = { matcher: ["/dashboard/:path*"] };
