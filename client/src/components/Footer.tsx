import { Link } from "wouter";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#43566b' }} className="text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/manus-storage/logo_7fd8cea4.png"
              alt="Polished Maids"
              className="h-24 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Licensed, insured, and committed to excellence. Your go-to for a pristine, polished finish every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-sans text-sm font-semibold tracking-[0.1em] uppercase mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-gold transition-colors text-sm">Home</Link>
              <Link href="/about" onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-gold transition-colors text-sm">About</Link>
              <Link href="/services" onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-gold transition-colors text-sm">Services</Link>
              <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-gold transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-sans text-sm font-semibold tracking-[0.1em] uppercase mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+13302427203" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                <Phone size={16} className="text-gold" strokeWidth={1.5} />
                (330) 242-7203
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-gold mt-0.5" strokeWidth={1.5} />
                Serving all of Northeast Ohio
              </div>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link href="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-white/55 hover:text-gold transition-colors text-sm">Privacy Policy</Link>
          <Link href="/terms" onClick={() => window.scrollTo(0, 0)} className="text-white/55 hover:text-gold transition-colors text-sm">Terms of Service</Link>
          <Link href="/accessibility" onClick={() => window.scrollTo(0, 0)} className="text-white/55 hover:text-gold transition-colors text-sm">Accessibility</Link>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Polished Maids Cleaning Service. Serving Northeast Ohio with pride since 2018.
          </p>
          <p className="text-white/40 text-xs">
            Website by{" "}
            <a
              href="https://adamloomismarketing.com"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-gold transition-colors"
            >
              Adam Loomis Marketing
            </a>
          </p>
        </div>
      </div>
      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}
