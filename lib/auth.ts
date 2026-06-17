import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getServerSession() {
  try {
    const token = cookies().get("rwt_token")?.value;
    if (!token) return null;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback");
    const { payload } = await jwtVerify(token, secret);
    return payload as { id: string; name: string; email: string; role: string };
  } catch { return null; }
}
