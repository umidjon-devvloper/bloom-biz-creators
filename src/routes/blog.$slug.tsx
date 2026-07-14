import { createFileRoute, Link } from "@tanstack/react-router";
import { getBlogPostBySlug } from "../api/api";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostDetail,
  loader: async ({ params }) => {
    return await getBlogPostBySlug({ data: params.slug });
  },
});

function BlogPostDetail() {
  const post = Route.useLoaderData();

  if (!post) {
    return <div className="py-32 text-center text-2xl">Article not found</div>;
  }

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/blog" className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl">{post.title}</h1>
        <div className="mb-10 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        
        {post.imageUrl && (
          <div className="mb-12 overflow-hidden rounded-3xl">
            <img src={post.imageUrl} alt={post.title} className="w-full object-cover" />
          </div>
        )}

        <div className="prose prose-lg prose-invert max-w-none">
          {/* For MVP, rendering as simple text, but ideally we'd parse markdown here */}
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>
      </div>
    </article>
  );
}
