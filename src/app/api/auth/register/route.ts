import User from "@/models/User";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();
  await connectDB();

  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    await newUser.save();

    return new NextResponse("User has been created", { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
