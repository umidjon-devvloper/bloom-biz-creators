import { createFileRoute } from "@tanstack/react-router";
import { getLeads } from "../api/api";
import { Mail, User, Clock, Phone } from "lucide-react";

type LeadRow = {
  _id: string;
  name: string;
  contact?: string;
  email?: string;
  note?: string;
  source?: string;
  lang?: string;
  createdAt: string;
  metadata?: { priceRange?: string; summary?: string };
};

export const Route = createFileRoute("/admin/leads")({
  component: AdminLeads,
  loader: async () => {
    return await getLeads();
  },
});

function AdminLeads() {
  const leads = Route.useLoaderData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Lidlar (Mijozlar so'rovlari)</h1>
        <p className="text-muted-foreground mt-2">
          Saytdagi shakllardan kelib tushgan barcha murojaatlar.
        </p>
      </div>

      <div className="grid gap-4">
        {leads.map((lead: LeadRow) => (
          <div key={lead._id} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> {lead.name}
                </h3>
                {lead.contact && (
                  <a
                    href={`tel:${String(lead.contact).replace(/[^\d+]/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1"
                  >
                    <Phone className="w-4 h-4" /> {lead.contact}
                  </a>
                )}
                {lead.email && (
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1"
                  >
                    <Mail className="w-4 h-4" /> {lead.email}
                  </a>
                )}
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                <Clock className="w-3 h-3" /> {new Date(lead.createdAt).toLocaleString()}
              </div>
            </div>

            {lead.metadata?.priceRange && (
              <div className="mt-4 rounded-xl bg-secondary/50 p-4 text-sm space-y-2">
                <p>
                  <span className="font-semibold">Hisoblangan narx:</span>{" "}
                  {lead.metadata.priceRange}
                </p>
                <p>
                  <span className="font-semibold">Tanlangan xizmatlar:</span>{" "}
                  {lead.metadata.summary}
                </p>
              </div>
            )}

            {lead.note && (
              <div className="mt-4 text-sm">
                <span className="font-semibold">Izoh:</span>
                <p className="mt-1 text-muted-foreground">{lead.note}</p>
              </div>
            )}

            <div className="mt-4 text-xs text-muted-foreground">
              Manba: {lead.source ?? "—"}
              {lead.lang ? ` · Til: ${lead.lang}` : ""}
            </div>
          </div>
        ))}
        {leads.length === 0 && (
          <div className="text-center py-12 text-muted-foreground bg-card rounded-2xl border border-border">
            Hozircha hech qanday lidlar kelib tushmagan.
          </div>
        )}
      </div>
    </div>
  );
}
