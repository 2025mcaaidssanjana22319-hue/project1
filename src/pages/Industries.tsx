import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";
import { Building2, Rocket, ShoppingBag, Briefcase } from "lucide-react";

const items = [
  { icon: Building2, title: "SMBs", desc: "Modern digital foundations for established small & medium businesses." },
  { icon: Rocket, title: "Startups", desc: "MVPs, brand systems, and growth engines for early-stage teams." },
  { icon: ShoppingBag, title: "E-commerce", desc: "Storefronts, automations, and retention loops that drive revenue." },
  { icon: Briefcase, title: "B2B Services", desc: "Lead-gen websites, case studies, and pipeline systems for service firms." },
];

const Industries = () => (
  <PageLayout title="Industries — Zentix Services" description="We partner with SMBs, startups, e-commerce brands, and B2B service firms.">
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Industries" title="Who we work with" subtitle="Different industries, same standard of craftsmanship." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="group glass rounded-3xl p-7 h-full hover-lift text-center">
                <div className="h-14 w-14 mx-auto rounded-2xl grid place-items-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);
export default Industries;
