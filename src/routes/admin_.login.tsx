import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/admin_/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("ua_admin_auth", "true");
      router.navigate({ to: "/admin" });
    } else {
      setError("Xato parol kiritdingiz.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-border bg-card p-10 shadow-elevated">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight">Admin Panel</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tizimga kirish uchun parolni kiriting</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-foreground">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="••••••••"
              required
            />
            {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
