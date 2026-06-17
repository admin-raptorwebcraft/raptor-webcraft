import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const SECRET = process.env.JWT_SECRET!;

export function signToken(payload: object, expiresIn = "7d") {
  return jwt.sign(payload, SECRET, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}

export function getTokenFromRequest(req: NextRequest) {
  return req.cookies.get("rwt_token")?.value ||
         req.headers.get("authorization")?.replace("Bearer ", "") ||
         null;
}
