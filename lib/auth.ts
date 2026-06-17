import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  role: "user" | "admin";
  email: string;
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
}

export function getTokenFromHeader(authHeader?: string | null): string {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No valid authorization header");
  }
  return authHeader.replace("Bearer ", "");
}

export function requireAuth(
  req: Request,
  allowedRoles: ("user" | "admin")[] = ["user", "admin"]
): TokenPayload {
  const token = getTokenFromHeader(req.headers.get("Authorization"));
  const payload = verifyToken(token);
  if (!allowedRoles.includes(payload.role)) {
    throw new Error("Forbidden: insufficient permissions");
  }
  return payload;
}
