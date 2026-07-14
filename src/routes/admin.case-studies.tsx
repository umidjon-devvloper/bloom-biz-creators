import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getCaseStudies, deleteCaseStudy, createCaseStudy, updateCaseStudy } from "../api/api";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/case-studies")({
  component: AdminCaseStudies,
  loader: async () => {
    return await getCaseStudies();
  },
});

function AdminCaseStudies() {
  const cases = Route.useLoaderData();
  const router = useRouter();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<any>(null);
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [client, setClient] = useState("");
  const [industry, setIndustry] = useState("");
  const [summary, setSummary] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const openNew = () => {
    setEditingCase(null);
    setTitle(""); setSlug(""); setClient(""); setIndustry(""); setSummary(""); setChallenge(""); setSolution(""); setImageUrl("");
    setIsModalOpen(true);
  };

  const openEdit = (c: any) => {
    setEditingCase(c);
    setTitle(c.title); setSlug(c.slug); setClient(c.client); setIndustry(c.industry); setSummary(c.summary); setChallenge(c.challenge); setSolution(c.solution); setImageUrl(c.imageUrl || "");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
      await deleteCaseStudy({ data: id });
      router.invalidate();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { title, slug, client, industry, summary, challenge, solution, imageUrl };
    if (editingCase) await updateCaseStudy({ data: { id: editingCase._id, payload } });
    else await createCaseStudy({ data: payload });
    setIsModalOpen(false);
    router.invalidate();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Case Studies</h1>
        <button onClick={openNew} className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4" /> Yangi qo'shish
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/50 text-muted-foreground">
            <tr>
              <th className="px-6 py-4 font-medium">Sarlavha</th>
              <th className="px-6 py-4 font-medium">Mijoz</th>
              <th className="px-6 py-4 font-medium text-right">Harakatlar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {cases.map((c: any) => (
              <tr key={c._id} className="hover:bg-secondary/20">
                <td className="px-6 py-4 font-medium">{c.title}</td>
                <td className="px-6 py-4 text-muted-foreground">{c.client}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => openEdit(c)} className="p-2 text-muted-foreground hover:text-primary transition-colors"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(c._id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card p-6 border border-border shadow-elevated">
            <h2 className="text-xl font-bold mb-6">{editingCase ? "Tahrirlash" : "Yangi qo'shish"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm mb-1">Sarlavha</label><input required value={title} onChange={e=>{setTitle(e.target.value); setSlug(e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, ''));}} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
                <div><label className="block text-sm mb-1">Slug</label><input required value={slug} onChange={e=>setSlug(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
                <div><label className="block text-sm mb-1">Mijoz</label><input required value={client} onChange={e=>setClient(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
                <div><label className="block text-sm mb-1">Industriya</label><input required value={industry} onChange={e=>setIndustry(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
              </div>
              <div><label className="block text-sm mb-1">Rasm URL (imageUrl)</label><input required value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder="https://..." className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
              <div><label className="block text-sm mb-1">Qisqacha mazmun</label><textarea required value={summary} onChange={e=>setSummary(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
              <div><label className="block text-sm mb-1">Muammo (Challenge)</label><textarea required value={challenge} onChange={e=>setChallenge(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
              <div><label className="block text-sm mb-1">Yechim (Solution)</label><textarea required value={solution} onChange={e=>setSolution(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2" /></div>
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
