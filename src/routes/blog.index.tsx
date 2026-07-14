import { createFileRoute, Link } from "@tanstack/react-router";
import { getBlogPosts } from "../api/api";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/blog/")({
  component: BlogList,
  loader: async () => {
    return await getBlogPosts();
  },
});

function BlogList() {
  const posts = Route.useLoaderData();

  return (
    <div>
      <PageHeader
        title="IT & Business Insights"
        subtitle="Thoughts, tutorials, and insights on modern web development and digital transformation."
      />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {posts.map((post: any) => (
            <Link
              key={post._id}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-transparent transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-primary/10" />
                )}
              </div>
              <div className="pt-6">
                <div className="mb-3 text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString()} • {post.author}
                </div>
                <h3 className="mb-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
