import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Notice from "@/models/Notice";
import Resource from "@/models/Resource";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();

    const [
      totalUsers,
      totalAdmins,
      totalNotices,
      totalResources,
      activeUsers,
      recentUsers,
      recentNotices,
      recentResources,
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: "admin" }),
      Notice.countDocuments(),
      Resource.countDocuments(),
      User.countDocuments({ active: true }),

      User.find({})
        .select("name email role createdAt active")
        .sort({ createdAt: -1 })
        .limit(5)
        .lean(),

      Notice.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .lean(),

      Resource.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .lean(),
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers,
        totalAdmins,
        totalResources,
        totalNotices,
        activeUsers,
      },
      recentUsers,
      recentNotices,
      recentResources,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}