import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Resource from '@/models/Resource';

export async function GET() {
  await connectToDatabase();
  const resources = await Resource.find().sort({ createdAt: -1 });
  return NextResponse.json({ resources });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await connectToDatabase();
  const resource = await Resource.create(body);
  return NextResponse.json({ resource }, { status: 201 });
}
