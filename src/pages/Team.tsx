import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";
import { Mail, Linkedin, Github } from "lucide-react";

const team = [
  { name: "Dileep Solanki", role: "AI & Data Science Specialist", email: "workwitherdileep@gmail.com", initials: "DS" },
  { name: "Kartik Sharma", role: "Full-stack Developer & UI/UX Designer", email: "erkartik.srm@gmail.com", initials: "KS" },
];

const Team = () => (
  <PageLayout title="Team — Zentix Services" description="Meet the founder-led team behind Zentix Services.">
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Team" title="Meet the makers." subtitle="A tight, senior team that does the work — no layers, no agencies-in-agencies." />
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group glass rounded-3xl p-8 hover-lift text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-24 w-24 mx-auto rounded-full grid place-items-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-2xl font-bold mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {m.initials}
                  </div>
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-primary mt-1">{m.role}</p>
                  <p className="text-sm text-muted-foreground mt-3 break-all">{m.email}</p>
                  <div className="flex justify-center gap-3 mt-5">
                    <a href={`mailto:${m.email}`} className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-primary hover:border-primary transition-all" aria-label="Email"><Mail className="h-4 w-4" /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-primary hover:border-primary transition-all" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-primary hover:border-primary transition-all" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);
export default Team;
