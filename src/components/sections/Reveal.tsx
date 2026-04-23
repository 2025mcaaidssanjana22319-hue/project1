import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export const Reveal = ({ children, delay = 0, y = 30 }: { children: ReactNode; delay?: number; y?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) => (
  <Reveal>
    <div className={`max-w-3xl mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  </Reveal>
);
