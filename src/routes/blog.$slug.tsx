import { createFileRoute, Link } from "@tanstack/react-router";
import { getBlogPostBySlug } from "../api/api";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";

const ORIGIN = `https://www.${SITE.domain}`;

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostDetail,
  loader: async ({ params }) => {
    return await getBlogPostBySlug({ data: params.slug });
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const post = loaderData as any;
    return {
      meta: [
        { title: `${post.title} — ${SITE.name}` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.imageUrl || `${ORIGIN}/logo.png` },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "article:published_time", content: post.publishedAt },
        { name: "article:author", content: post.author || SITE.name },
      ],
    };
  },
});

function ArticleJsonLd({ post }: { post: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.imageUrl || `${ORIGIN}/logo.png`,
          datePublished: post.publishedAt,
          author: {
            "@type": "Organization",
            name: post.author || SITE.name,
            url: ORIGIN,
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` },
          },
          mainEntityOfPage: `${ORIGIN}/blog/${post.slug}`,
        }),
      }}
    />
  );
}

function BlogPostDetail() {
  const post = Route.useLoaderData();

  if (!post) {
    return <div className="py-32 text-center text-2xl">Article not found</div>;
  }

  return (
    <article className="min-h-screen pt-24 pb-20">
      <ArticleJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", url: `${ORIGIN}/blog` },
          { name: post.title, url: `${ORIGIN}/blog/${post.slug}` },
        ]}
      />
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
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>
      </div>
    </article>
  );
}
