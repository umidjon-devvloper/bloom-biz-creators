import mongoose from "mongoose";

const ClientProjectSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    projectName: { type: String, required: true },
    status: { type: String, enum: ["Planning", "Design", "Development", "Testing", "Completed"], default: "Planning" },
    tasks: [
      {
        id: { type: String },
        title: { type: String },
        status: { type: String, enum: ["todo", "in-progress", "review", "done"], default: "todo" },
      },
    ],
    documents: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
    invoices: [
      {
        amount: { type: Number },
        status: { type: String, enum: ["paid", "pending", "overdue"] },
        date: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.ClientProject || mongoose.model("ClientProject", ClientProjectSchema);
