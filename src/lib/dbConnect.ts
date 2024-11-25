"use server";
import mongoose from "mongoose";

type ConnecttionObject = {
  isConnected?: number;
};

const connection: ConnecttionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
  }

  try {
    const db = await mongoose.connect(process.env.DBURL || "", {});
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
