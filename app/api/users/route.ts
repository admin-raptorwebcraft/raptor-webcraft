import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { verifyToken, getTokenFromCookies } from '@/lib/auth';

export async function GET() {
  try {
    const token = getTokenFromCookies();
    if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    const decoded: any = verifyToken(token);
    if (decoded.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    await connectToDatabase();
    const users = await User.find({}, '-password');
    return NextResponse.json({ users });
  } catch {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
