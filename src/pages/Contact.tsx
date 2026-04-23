import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Reveal, SectionTitle } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    // Free SMTP-backed delivery via FormSubmit (no signup, no API key).
    // Emails are delivered straight to the inbox below.
    data.append("_subject", "New Zentix Services enquiry");
    data.append("_template", "table");
    data.append("_captcha", "false");
    try {
      const res = await fetch("https://formsubmit.co/ajax/workwitherdileep@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    } catch (err) {
      toast({ title: "Couldn't send message", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Contact — Zentix Services" description="Get in touch with Zentix Services to start your next digital project.">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Contact" title="Let's start something great." subtitle="Tell us about your project — we'll respond within one business day." />

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Reveal>
              <div className="lg:col-span-2 glass rounded-3xl p-8">
                {sent ? (
                  <div className="py-16 text-center">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 grid place-items-center mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message received.</h3>
                    <p className="text-muted-foreground">Thanks for reaching out — we'll be in touch shortly.</p>
                    <Button className="mt-6 rounded-full" variant="outline" onClick={() => setSent(false)}>Send another</Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-1">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-1">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" name="email" required className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-1">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-1">
                      <Label htmlFor="service">Service</Label>
                      <Input id="service" name="service" placeholder="Web, AI, Marketing, Design…" className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-1">
                      <Label htmlFor="goal">Goal</Label>
                      <Input id="goal" name="goal" placeholder="What outcome are you after?" className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" rows={5} required className="mt-2 bg-background/50" />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" disabled={loading} size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-full sm:w-auto px-8">
                        {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-5">Reach us directly</h3>
                <div className="space-y-5 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1 flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> Email</div>
                    <a href="mailto:workwitherdileep@gmail.com" className="block hover:text-primary break-all">workwitherdileep@gmail.com</a>
                    <a href="mailto:erkartik.srm@gmail.com" className="block hover:text-primary break-all">erkartik.srm@gmail.com</a>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1 flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Phone</div>
                    <a href="tel:+918094897402" className="block hover:text-primary">+91 8094897402</a>
                    <a href="tel:+918000909574" className="block hover:text-primary">+91 8000909574</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
export default Contact;
