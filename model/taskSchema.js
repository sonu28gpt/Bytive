
import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "pending", enum: ["pending", "in-progress", "completed"] },
});

export const Task = mongoose.model("Task", taskSchema);
