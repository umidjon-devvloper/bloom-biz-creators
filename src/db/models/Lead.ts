import mongoose from "mongoose";

/**
 * `contact` is the required channel, not `email`. The public forms ask for a
 * phone number or Telegram handle because that is what people in this market
 * actually answer on — email was the field most likely to be abandoned or filled
 * with junk. Email stays on the model for leads that do arrive with one.
 */
const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    note: { type: String, trim: true },
    source: { type: String, default: "Contact form" },
    lang: { type: String },
    status: { type: String, enum: ["New", "Contacted", "Closed"], default: "New" },
    metadata: { type: Object }, // e.g. calculated price range, selected options
  },
  { timestamps: true },
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
