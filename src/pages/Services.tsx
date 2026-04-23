import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";
import { Code2, BarChart3, Brain, Palette, Check } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade websites and web apps engineered for speed, scale, and SEO.",
    points: ["Marketing & corporate websites", "SaaS platforms & dashboards", "E-commerce storefronts", "Headless CMS & integrations"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Performance marketing that drives qualified pipeline — not vanity metrics.",
    points: ["SEO & content strategy", "Google & Meta ads", "Email & lifecycle", "Analytics & CRO"],
  },
  {
    icon: Brain,
    title: "Data & AI Services",
    desc: "Practical AI that automates work and unlocks insight from your data.",
    points: ["AI agents & chatbots", "Workflow automation", "Custom ML models", "Data dashboards & ETL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces designed to feel inevitable — clean, fast, and conversion-focused.",
    points: ["Product design", "Design systems", "User research & testing", "Brand & visual identity"],
  },
];

const Services = () => (
  <PageLayout title="Services — Zentix Services" description="Web development, digital marketing, data & AI services, and UI/UX design — all under one roof.">
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Services" title="Everything you need to grow online." subtitle="Four integrated practices, one accountable team." />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group glass rounded-3xl p-8 h-full hover-lift relative overflow-hidden">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-primary to-primary-glow mb-5 shadow-lg">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);
export default Services;
