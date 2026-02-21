import mongoose from "mongoose";

export async function connectToDatabase(mongoUri: string): Promise<void> {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}
