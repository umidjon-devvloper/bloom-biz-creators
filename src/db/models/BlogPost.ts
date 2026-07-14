import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true }, // Markdown or HTML
    author: { type: String, default: "Umidjon Agency" },
    publishedAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
