import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";
import { Search, Lightbulb, Hammer, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We dive deep into your business, audience, and goals to align on what success looks like." },
  { icon: Lightbulb, title: "Strategy", desc: "Information architecture, technical plan, and a roadmap mapped to outcomes." },
  { icon: Hammer, title: "Build", desc: "Design and engineering in tight, transparent sprints with weekly previews." },
  { icon: Rocket, title: "Launch & Optimize", desc: "We ship, measure, and iterate — turning data into compounding gains." },
];

const Process = () => (
  <PageLayout title="Process — Zentix Services" description="Our 4-step process: Discovery, Strategy, Build, Launch & Optimize.">
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Our Process" title="A clear path from idea to impact." subtitle="Transparent, collaborative, and outcome-obsessed." />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className={`relative flex md:items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 md:px-10">
                  <div className="glass rounded-3xl p-7 hover-lift ml-20 md:ml-0">
                    <div className="text-xs font-semibold text-primary mb-2">STEP 0{i + 1}</div>
                    <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-primary to-primary-glow shadow-lg glow-primary">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);
export default Process;
