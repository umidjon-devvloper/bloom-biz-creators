import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/maintenance")({
  component: MaintenancePage,
});

function MaintenancePage() {
  const plans = [
    {
      name: "Essential",
      price: "$300",
      period: "per month",
      desc: "Perfect for small business sites needing regular updates and security.",
      features: ["Monthly Core & Plugin Updates", "Weekly Backups", "Uptime Monitoring", "1 Hour Content Updates"],
    },
    {
      name: "Professional",
      price: "$800",
      period: "per month",
      desc: "For growing businesses requiring active development and priority support.",
      features: ["Daily Backups", "24/7 Security Scanning", "Performance Optimization", "5 Hours Custom Development", "Priority Support"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      desc: "Dedicated resources for large scale applications.",
      features: ["Dedicated Account Manager", "Real-time Backups", "SLA Guarantees", "Unlimited Minor Updates", "Custom Infrastructure Management"],
    }
  ];

  return (
    <div>
      <PageHeader
        title="Support & Maintenance"
        subtitle="Keep your digital assets secure, fast, and up-to-date with our reliable maintenance plans."
      />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col rounded-3xl border p-8 shadow-sm ${plan.isPopular ? 'border-primary shadow-glow bg-primary/5' : 'border-border bg-card'}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px]">{plan.desc}</p>
              </div>
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-black font-display">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full rounded-xl py-3 font-semibold transition-colors ${plan.isPopular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
