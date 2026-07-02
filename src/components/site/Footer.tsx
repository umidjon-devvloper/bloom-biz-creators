import { Code2, Github, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-mesh opacity-40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-bold">
                Devora<span className="text-gradient-primary">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Biznesingiz uchun professional websayt va ilovalar. Shaffof narx,
              tez yetkazib berish, jamoaviy ish.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Github, Linkedin, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Xizmatlar</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Landing page", "Korporativ sayt", "E-commerce", "Mobil ilova", "Backend / API"].map((t) => (
                <li key={t}>
                  <a href="#services" className="transition-colors hover:text-foreground">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Kompaniya</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">Biz haqimizda</a></li>
              <li><a href="#team" className="hover:text-foreground">Jamoa</a></li>
              <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
              <li><a href="#calculator" className="hover:text-foreground">Narx</a></li>
              <li><a href="#contact" className="hover:text-foreground">Aloqa</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Devora. Barcha huquqlar himoyalangan.</div>
          <div>Toshkent, O'zbekiston · hello@devora.uz</div>
        </div>
      </div>
    </footer>
  );
}
