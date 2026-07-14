import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getBlogPosts, deleteBlogPost, createBlogPost, updateBlogPost } from "../api/api";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/blog")({
  component: AdminBlog,
  loader: async () => {
    return await getBlogPosts();
  },
});

function AdminBlog() {
  const posts = Route.useLoaderData();
  const router = useRouter();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  
  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Umidjon");
  const [imageUrl, setImageUrl] = useState("");

  const openNew = () => {
    setEditingPost(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setAuthor("Umidjon");
    setImageUrl("");
    setIsModalOpen(true);
  };

  const openEdit = (post: any) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setAuthor(post.author);
    setImageUrl(post.imageUrl || "");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Haqiqatan ham ushbu maqolani o'chirmoqchimisiz?")) {
      await deleteBlogPost({ data: id });
      router.invalidate();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { title, slug, excerpt, content, author, imageUrl, publishedAt: new Date().toISOString() };
    
    if (editingPost) {
      await updateBlogPost({ data: { id: editingPost._id, payload } });
    } else {
      await createBlogPost({ data: payload });
    }
    
    setIsModalOpen(false);
    router.invalidate();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog Maqolalari</h1>
        <button onClick={openNew} className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Yangi qo'shish
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-medium">Sarlavha</th>
              <th className="px-6 py-4 font-medium">Muallif</th>
              <th className="px-6 py-4 font-medium">Sana</th>
              <th className="px-6 py-4 font-medium text-right">Harakatlar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts.map((post: any) => (
              <tr key={post._id} className="hover:bg-secondary/20">
                <td className="px-6 py-4 font-medium">{post.title}</td>
                <td className="px-6 py-4 text-muted-foreground">{post.author}</td>
                <td className="px-6 py-4 text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => openEdit(post)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(post._id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">Hech qanday maqola topilmadi.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card p-6 border border-border shadow-elevated">
            <h2 className="text-xl font-bold mb-6">{editingPost ? "Maqolani tahrirlash" : "Yangi maqola qo'shish"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Sarlavha</label>
                <input required type="text" value={title} onChange={e => { setTitle(e.target.value); setSlug(e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')); }} className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                <input required type="text" value={slug} onChange={e => setSlug(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rasm URL (imageUrl)</label>
                <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://..." className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Qisqacha mazmuni (Excerpt)</label>
                <textarea required value={excerpt} onChange={e => setExcerpt(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none" rows={2} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">To'liq matn (HTML yoki Oddiy tekst)</label>
                <textarea required value={content} onChange={e => setContent(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none" rows={8} />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="rounded-xl px-4 py-2 text-sm font-semibold hover:bg-secondary">Bekor qilish</button>
                <button type="submit" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Saqlash</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
