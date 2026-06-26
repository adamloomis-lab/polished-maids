/**
 * Polished Maids - Shared layout for policy pages (Privacy, Terms, Accessibility)
 * On-brand: navy headings, gold rule, generous editorial body type.
 */

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

interface PolicyLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function PolicyLayout({
  title,
  metaTitle,
  metaDescription,
  lastUpdated,
  children,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen">
      <PageMeta title={metaTitle} description={metaDescription} />
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-10 md:pt-52 md:pb-14">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-5xl mb-5" style={{ color: "#43566b" }}>
              {title}
            </h1>
            <p className="text-base" style={{ color: "#5a7089" }}>
              Last updated {lastUpdated}
            </p>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="policy-prose"
          >
            {children}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
