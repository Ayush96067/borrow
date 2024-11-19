import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    const existingUserUsername = await UserModel.findOne({ username });
    if (existingUserUsername) {
      return Response.json(
        {
          success: false,
          message: "Username already taken",
        },
        {
          status: 400,
        }
      );
    }

    const existingUserByEmail = await UserModel.findOne({ email });
    if (existingUserByEmail) {
      return Response.json(
        {
          success: false,
          message: "User already exist with this email",
        },
        {
          status: 201,
        }
      );
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await new UserModel({
        username,
        email,
        password: hashPassword,
      });

      await newUser.save();
    }

    return Response.json({
      success: true,
      message: "User successfully registered. Please verify your email",
    });
  } catch (error) {
    console.log("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
