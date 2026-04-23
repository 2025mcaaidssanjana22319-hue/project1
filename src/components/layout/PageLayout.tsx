import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

export const PageLayout = ({ children, title, description }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : ""} />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pt-28"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};
