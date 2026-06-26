import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
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
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          style={{ color: '#43566b' }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t overflow-hidden"
            style={{ borderColor: 'rgba(67,86,107,0.1)' }}
          >
            <div className="container py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-lg font-medium tracking-[0.05em]"
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
                className="mt-4 px-6 py-3 border border-gold text-gold text-center text-sm font-medium tracking-[0.05em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
