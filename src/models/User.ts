"use server";
import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}

// verifyCode: string;
// verifyCodeExpiry: Date;

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;

// verifyCode: {
//   type: String,
//   required: [true, "verify Code is required"],
// },
// verifyCodeExpiry: {
//   type: Date,
//   required: [true, "Veriy code expiry date is required"],
// },
