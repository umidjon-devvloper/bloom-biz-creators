import { createServerFn } from "@tanstack/react-start";
import connectDB from "../db/connect";
import CaseStudy from "../db/models/CaseStudy";
import BlogPost from "../db/models/BlogPost";
import Lead from "../db/models/Lead";
import Career from "../db/models/Career";
import ClientProject from "../db/models/ClientProject";

export const getCaseStudies = createServerFn({ method: "GET" }).handler(async () => {
  await connectDB();
  const cases = await CaseStudy.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(cases));
});

export const getCaseStudyBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    await connectDB();
    const caseStudy = await CaseStudy.findOne({ slug }).lean();
    return caseStudy ? JSON.parse(JSON.stringify(caseStudy)) : null;
  });

export const getBlogPosts = createServerFn({ method: "GET" }).handler(async () => {
  await connectDB();
  const posts = await BlogPost.find({}).sort({ publishedAt: -1 }).lean();
  return JSON.parse(JSON.stringify(posts));
});

export const getBlogPostBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    await connectDB();
    const post = await BlogPost.findOne({ slug }).lean();
    return post ? JSON.parse(JSON.stringify(post)) : null;
  });

export const getCareers = createServerFn({ method: "GET" }).handler(async () => {
  await connectDB();
  const careers = await Career.find({ isActive: true }).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(careers));
});

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; phone?: string; source?: string; metadata?: any }) => data)
  .handler(async ({ data }) => {
    await connectDB();
    const lead = await Lead.create(data);
    return JSON.parse(JSON.stringify(lead));
  });

export const getClientProject = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    await connectDB();
    try {
      const project = await ClientProject.findById(id).lean();
      return project ? JSON.parse(JSON.stringify(project)) : null;
    } catch {
      const firstProject = await ClientProject.findOne({}).lean();
      return firstProject ? JSON.parse(JSON.stringify(firstProject)) : null;
    }
  });

// --- ADMIN API ---

export const getLeads = createServerFn({ method: "GET" }).handler(async () => {
  await connectDB();
  const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(leads));
});

export const createBlogPost = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await connectDB();
    const post = await BlogPost.create(data);
    return JSON.parse(JSON.stringify(post));
  });

export const updateBlogPost = createServerFn({ method: "POST" })
  .validator((data: { id: string; payload: any }) => data)
  .handler(async ({ data }) => {
    await connectDB();
    const post = await BlogPost.findByIdAndUpdate(data.id, data.payload, { new: true }).lean();
    return JSON.parse(JSON.stringify(post));
  });

export const deleteBlogPost = createServerFn({ method: "POST" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    await connectDB();
    await BlogPost.findByIdAndDelete(id);
    return { success: true };
  });

export const createCaseStudy = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await connectDB();
    const study = await CaseStudy.create(data);
    return JSON.parse(JSON.stringify(study));
  });

export const updateCaseStudy = createServerFn({ method: "POST" })
  .validator((data: { id: string; payload: any }) => data)
  .handler(async ({ data }) => {
    await connectDB();
    const study = await CaseStudy.findByIdAndUpdate(data.id, data.payload, { new: true }).lean();
    return JSON.parse(JSON.stringify(study));
  });

export const deleteCaseStudy = createServerFn({ method: "POST" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    await connectDB();
    await CaseStudy.findByIdAndDelete(id);
    return { success: true };
  });
