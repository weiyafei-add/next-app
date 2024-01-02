import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (request) => {
  try {
    await connectDB();
    const post = await Post.find();
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Databases Error!", { status: 500 });
  }
};
