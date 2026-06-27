import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile: elevated floating capsule, off the edge */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#43566b]/95 backdrop-blur-md p-2.5 shadow-[0_18px_40px_-12px_rgba(67,86,107,0.7)]">
          <a
            href="tel:+13302427203"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-sm font-sans font-medium tracking-[0.05em] uppercase text-white backdrop-blur-sm transition-all duration-300 active:scale-[0.97]"
          >
            <Phone size={16} strokeWidth={1.75} />
            Call
          </a>
          <Link
            href="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="group relative flex flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gold py-3 text-sm font-sans font-semibold tracking-[0.05em] uppercase text-white shadow-[0_8px_20px_-6px_rgba(190,154,74,0.8)] glow-pulse transition-all duration-300 active:scale-[0.97]"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30 blur-md group-active:[animation:sheen_0.9s_ease]" />
            Get a Quote
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* Desktop: floating pill, scroll-revealed after hero */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden md:block transition-all duration-500 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Link
          href="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-gold px-7 py-4 text-sm font-sans font-semibold tracking-[0.06em] uppercase text-white shadow-[0_16px_36px_-10px_rgba(190,154,74,0.85)] glow-pulse transition-all duration-300 hover:bg-gold/90 active:scale-[0.98]"
        >
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]" />
          Get a Free Quote
          <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
}
