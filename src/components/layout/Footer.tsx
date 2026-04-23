import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";
import logo from "@/assets/zentix-logo.png";

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border/50">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Zentix Services" className="h-10 w-auto" />
              <span className="font-bold text-xl">Zentix Services</span>
            </Link>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Engineering the future of digital excellence — websites, AI, automation, marketing, and design built to grow your business.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/114254202", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/zentixservices/", label: "Instagram" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["About","/about"],["Services","/services"],["Industries","/industries"],["Team","/team"],["Process","/process"]].map(([l,p])=>(
                <li key={p}><Link to={p} className="hover:text-primary transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> workwitherdileep@gmail.com</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> erkartik.srm@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> +91 8094897402</li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> +91 8000909574</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 2026 Zentix Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
