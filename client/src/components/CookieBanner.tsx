import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if the visitor hasn't responded yet.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 700);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[70]"
          role="region"
          aria-label="Cookie consent"
        >
          <div className="bg-white shadow-[0_12px_40px_rgba(67,86,107,0.18)] border border-[#43566b]/10 rounded-2xl p-6 md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-gold/10">
                <Cookie size={22} strokeWidth={1.5} className="text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1.5" style={{ color: "#43566b" }}>
                  Pardon the crumbs.
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5a7089" }}>
                  We use a few cookies to keep this site running smoothly. Don't worry about the
                  mess — tidying up crumbs is kind of our whole thing.{" "}
                  <Link
                    href="/privacy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gold underline underline-offset-2 hover:opacity-75 transition-opacity"
                  >
                    See our Privacy Policy
                  </Link>
                  .
                </p>
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => respond("accepted")}
                    className="px-6 py-2.5 bg-gold text-white font-sans font-medium text-xs tracking-[0.08em] uppercase hover:bg-gold/90 transition-all duration-300 rounded-sm"
                  >
                    Sounds Good
                  </button>
                  <button
                    onClick={() => respond("declined")}
                    className="text-xs font-sans tracking-wide hover:text-gold transition-colors"
                    style={{ color: "#5a7089" }}
                  >
                    No Thanks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
