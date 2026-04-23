import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";
import { Compass, Target, Eye, Sparkles } from "lucide-react";

const About = () => {
  const blocks = [
    { icon: Compass, title: "Who We Are", text: "Zentix Services is a founder-led digital agency engineering high-impact websites, AI systems, and brand experiences for ambitious businesses worldwide." },
    { icon: Sparkles, title: "What Makes Us Different", text: "Lean, senior, opinionated. You work directly with the people building your product — no account managers, no telephone games." },
    { icon: Target, title: "Our Motive", text: "To make world-class digital craftsmanship accessible to startups and SMBs that deserve more than templated solutions." },
    { icon: Eye, title: "Vision & Mission", text: "Vision: Become the most trusted partner for businesses entering the AI-first era. Mission: Engineer digital products that compound value over time." },
  ];

  return (
    <PageLayout title="About — Zentix Services" description="Learn about Zentix Services — a founder-led digital agency engineering websites, AI, and design for ambitious businesses.">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="About Zentix" title="A small team. A big standard." subtitle="We exist to help businesses grow through technology that's thoughtful, fast, and beautifully crafted." />
          <div className="grid md:grid-cols-2 gap-6">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 h-full hover-lift">
                  <div className="h-12 w-12 rounded-2xl grid place-items-center bg-gradient-to-br from-primary to-primary-glow mb-5">
                    <b.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
export default About;
