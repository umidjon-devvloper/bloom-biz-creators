import { connect, disconnect } from "mongoose";
import CaseStudy from "../src/db/models/CaseStudy.js";
import BlogPost from "../src/db/models/BlogPost.js";
import Career from "../src/db/models/Career.js";
import ClientProject from "../src/db/models/ClientProject.js";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/umidjon-agency";

async function seed() {
  await connect(MONGODB_URI);
  console.log("Connected to MongoDB for seeding...");

  // Clear existing
  await CaseStudy.deleteMany({});
  await BlogPost.deleteMany({});
  await Career.deleteMany({});
  await ClientProject.deleteMany({});

  await CaseStudy.create({
    title: "E-Commerce Replatforming for Local Retailer",
    slug: "ecommerce-replatforming",
    client: "RetailUz",
    industry: "E-Commerce",
    summary: "Moved a legacy physical store online, achieving a massive boost in sales.",
    challenge: "The client had no online presence and was losing market share.",
    solution: "We built a custom Next.js storefront with a robust Medusa.js backend.",
    results: [
      { metric: "Sales Increase", value: "300%" },
      { metric: "Load Time", value: "< 1s" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  });

  await BlogPost.create({
    title: "Nima uchun biznesingizga yangi veb-sayt kerak?",
    slug: "why-you-need-new-website",
    excerpt: "Eskirgan dizayn mijozlarni qochiradimi? Keling tahlil qilamiz.",
    content: "Uzoq matn bu yerda bo'ladi... Zamonaviy saytlar mijozlar ishonchini qozonish uchun eng asosiy quroldir.",
    author: "Umidjon",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  });

  await Career.create({
    title: "Senior Frontend Developer",
    department: "Engineering",
    description: "We are looking for a React/Next.js wizard.",
    requirements: ["3+ years of React", "Experience with TanStack tools", "UI/UX sense"],
  });

  await ClientProject.create({
    clientName: "Demo Client Corp",
    projectName: "Mobile App MVP",
    status: "Development",
    tasks: [
      { id: "T-1", title: "Design System", status: "done" },
      { id: "T-2", title: "Auth Flow", status: "in-progress" },
      { id: "T-3", title: "Payment Integration", status: "todo" },
    ],
    documents: [
      { name: "Requirements.pdf", url: "#" }
    ],
    invoices: [
      { amount: 1500, status: "paid", date: new Date() }
    ]
  });

  console.log("Seeding complete!");
  await disconnect();
}

seed().catch(console.error);
