import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/zentix-logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/team", label: "Team" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container mx-auto px-4`}>
        <nav className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong" : "glass"}`}>
          <Link to="/" className="flex items-center gap-2 group" aria-label="Zentix home">
            <img src={logo} alt="Zentix Services logo" className="h-9 w-auto transition-transform duration-300 group-hover:scale-110" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:block">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
                Get Started
              </Button>
            </Link>
            <button onClick={() => setOpen((o) => !o)} className="lg:hidden p-2" aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-medium rounded-lg ${
                        isActive ? "bg-primary/10 text-primary" : "text-foreground/80"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
