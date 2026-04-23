import { useEffect, useState } from "react";
import logo from "@/assets/zentix-logo.png";

export const Preloader = () => {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1100);
    const t2 = setTimeout(() => setGone(true), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="Zentix" className="h-16 w-auto animate-pulse-glow rounded-lg" />
        <div className="text-sm font-medium text-muted-foreground tracking-widest">ZENTIX</div>
      </div>
    </div>
  );
};
