import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Scroll lock + Esc to close while the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(67,86,107,0.1)]"
          : "bg-transparent"
      }`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/manus-storage/logo_7fd8cea4.png"
            alt="Polished Maids"
            className="h-24 w-auto md:h-28"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold"
              style={{ color: location === link.href ? undefined : '#43566b' }}
            >
              <span className={location === link.href ? "text-gold" : ""}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="ml-4 px-6 py-2.5 border border-gold text-gold text-sm font-medium tracking-[0.05em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2"
          style={{ color: '#43566b' }}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={26} />
        </button>
      </nav>
    </header>

    {/* Mobile Menu - full-screen slide-in (sibling of header so position:fixed escapes the header's backdrop-filter containing block) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            {/* Blurred brand-dark backdrop */}
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-[#43566b]/70 backdrop-blur-sm"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[#43566b] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.5)] flex flex-col overflow-y-auto"
            >
              {/* Header: logo + close */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <img
                  src="/manus-storage/logo_7fd8cea4.png"
                  alt="Polished Maids"
                  className="h-16 w-auto brightness-0 invert"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Trust badge with pulsing dot */}
              <div className="mx-6 mb-6 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                </span>
                <span className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-white/80">
                  Licensed &amp; Insured. Booking now.
                </span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-6">
                {navLinks.map((link, i) => {
                  const active = location === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className="group flex items-center justify-between border-b border-white/10 py-4"
                      >
                        <span
                          className={`font-serif text-2xl tracking-wide uppercase transition-colors duration-200 ${
                            active ? "text-gold" : "text-white group-hover:text-gold"
                          }`}
                        >
                          {link.label}
                        </span>
                        <ArrowRight
                          size={20}
                          className={`transition-all duration-200 ${
                            active ? "text-gold" : "text-white/40 group-hover:translate-x-1 group-hover:text-gold"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTAs */}
              <div className="px-6 pt-6 flex flex-col gap-3">
                <a
                  href="tel:+13302427203"
                  className="flex items-center justify-center gap-2.5 rounded-lg bg-gold py-4 font-sans text-sm font-semibold tracking-[0.06em] uppercase text-white transition-all duration-300 active:scale-[0.98]"
                >
                  <Phone size={17} strokeWidth={1.75} />
                  Call (330) 242-7203
                </a>
                <Link
                  href="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/30 py-4 font-sans text-sm font-medium tracking-[0.06em] uppercase text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Contact footer */}
              <div className="mt-auto px-6 py-7 space-y-4">
                <div className="h-[1px] w-full bg-white/10" />
                <div className="flex items-center gap-3 text-white/65">
                  <MapPin size={16} className="text-gold flex-shrink-0" strokeWidth={1.75} />
                  <span className="font-sans text-sm">Serving all of Northeast Ohio</span>
                </div>
                <div className="flex items-center gap-3 text-white/65">
                  <Clock size={16} className="text-gold flex-shrink-0" strokeWidth={1.75} />
                  <span className="font-sans text-sm">Mon - Sat: 8am - 6pm</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
