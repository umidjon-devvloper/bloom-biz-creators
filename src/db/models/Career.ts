import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, default: "Tashkent, Uzbekistan / Remote" },
    type: { type: String, enum: ["Full-time", "Part-time", "Contract"], default: "Full-time" },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Career || mongoose.model("Career", CareerSchema);
