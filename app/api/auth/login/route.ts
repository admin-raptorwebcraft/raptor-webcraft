import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();
    await connectToDatabase();
    const user = await User.findOne({ email: email.toLowerCase(), active: true });
    if (!user || !(await user.comparePassword(password)))
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    if (role === 'admin' && user.role !== 'admin')
      return NextResponse.json({ message: 'Not authorized as admin' }, { status: 403 });
    const token = signToken({ id: user._id, role: user.role, name: user.name });
    const res = NextResponse.json({ message: 'Login successful', role: user.role });
    res.cookies.set('raptor_token', token, { httpOnly: true, maxAge: 60*60*24*7, path: '/' });
    return res;
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
