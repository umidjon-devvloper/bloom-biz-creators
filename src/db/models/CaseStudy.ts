import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    client: { type: String, required: true },
    industry: { type: String, required: true },
    summary: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    results: [
      {
        metric: { type: String },
        value: { type: String },
      },
    ],
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);
