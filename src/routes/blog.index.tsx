import { createFileRoute, Link } from "@tanstack/react-router";
import { getBlogPosts } from "../api/api";
import { PageHeader } from "../components/site/PageHeader";
import { useI18n, langFromSearch, DEFAULT_LANG } from "../i18n";
import { PAGE_META } from "../i18n/translations";

/** Shape of db/models/BlogPost after the loader's JSON round-trip. */
type BlogPostRow = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
};

export const Route = createFileRoute("/blog/")({
  component: BlogList,
  loader: async () => {
    return await getBlogPosts();
  },
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang].blog;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
      ],
    };
  },
});

function BlogList() {
  const posts = Route.useLoaderData();
  const { t } = useI18n();

  return (
    <div>
      <PageHeader
        eyebrow={t.pages.blog.eyebrow}
        title={t.pages.blog.title}
        highlight={t.pages.blog.highlight}
        description={t.pages.blog.desc}
      />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {posts.map((post: BlogPostRow) => (
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
