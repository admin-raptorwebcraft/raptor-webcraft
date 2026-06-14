import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Notice from '@/models/Notice';

export async function GET() {
  await connectToDatabase();
  const notices = await Notice.find().sort({ pinned: -1, createdAt: -1 });
  return NextResponse.json({ notices });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await connectToDatabase();
  const notice = await Notice.create(body);
  return NextResponse.json({ notice }, { status: 201 });
}
