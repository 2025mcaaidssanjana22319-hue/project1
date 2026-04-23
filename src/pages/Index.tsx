import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, BarChart3, Brain, Palette, Rocket, Users, Zap } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroScene } from "@/components/three/HeroScene";
import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";

const services = [
  { icon: Code2, title: "Web Development", desc: "Blazing-fast, scalable websites & web apps." },
  { icon: BarChart3, title: "Digital Marketing", desc: "SEO, ads & content that converts." },
  { icon: Brain, title: "Data & AI Services", desc: "AI agents, automations, dashboards." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces that feel inevitable." },
];

const features = [
  { icon: Rocket, title: "Founder-led Execution", desc: "Direct access to the people building your project — no handoffs, no fluff." },
  { icon: Zap, title: "Business-focused Technology", desc: "Every line of code is shipped with ROI, growth, and outcomes in mind." },
  { icon: Users, title: "Human-centric Design", desc: "We design for the humans behind the screens — clarity over complexity." },
];

const Index = () => {
  return (
    <PageLayout
      title="Home — Zentix Services | Digital Growth, AI, Web & Design"
      description="Zentix Services is a multidisciplinary tech agency offering web development, AI solutions, and UI/UX design."
    >
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroScene />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-6">
                <Sparkles className="h-3 w-3 text-primary" />
                <span>Engineering the Future of Digital Excellence</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                Engineering the <span className="text-gradient">Future</span> of Digital Excellence
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Zentix helps businesses grow with high-impact websites, AI, automation, marketing, and design — built by a tight, founder-led team.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-7 group glow-primary">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full glass border-border/60 hover:bg-white/5 px-7">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:block h-[500px]" aria-hidden />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-14 max-w-5xl mx-auto text-center hover-lift">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Digital transformation isn't a buzzword — it's the new baseline. We partner with ambitious teams to design, build, and scale digital products that move the needle.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ZENTIX */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Why Zentix" title="Built different. Built for outcomes." subtitle="The Zentix difference is in how we work — not just what we ship." />
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group glass rounded-3xl p-8 h-full hover-lift relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-primary to-primary-glow mb-5 shadow-lg">
                      <f.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Services" title="What we do best" subtitle="Four core practices, one integrated team." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link to="/services" className="block group glass rounded-3xl p-7 h-full hover-lift relative overflow-hidden">
                  <div className="h-12 w-12 rounded-xl grid place-items-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
                  <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden glass-strong p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something exceptional.</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Tell us your goals — we'll bring the strategy, design, and engineering.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-primary">
                    Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
