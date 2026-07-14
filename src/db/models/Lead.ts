import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    source: { type: String, default: "Price Calculator" },
    status: { type: String, enum: ["New", "Contacted", "Closed"], default: "New" },
    metadata: { type: Object }, // e.g. calculated price, selected services
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
