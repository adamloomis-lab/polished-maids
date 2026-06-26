import { Phone } from "lucide-react";
import { Link } from "wouter";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-[#43566b]/10 px-4 py-3 flex items-center gap-3">
      <a
        href="tel:+13302427203"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-sans font-medium tracking-[0.05em] uppercase transition-all duration-300"
        style={{ backgroundColor: '#43566b', color: '#ffffff' }}
      >
        <Phone size={16} strokeWidth={1.5} />
        Call Now
      </a>
      <Link
        href="/contact"
        onClick={() => window.scrollTo(0, 0)}
        className="flex-1 flex items-center justify-center py-3 bg-gold text-white text-sm font-sans font-medium tracking-[0.05em] uppercase hover:bg-gold/90 transition-all duration-300"
      >
        Get a Quote
      </Link>
    </div>
  );
}
