/**
 * Polished Maids - Services Page
 * Design: Icon-based service cards, no images. Elegant Lucide icons.
 * Color: #43566b for titles, gold for accents
 * Scroll animations: varied (fadeUp, slideLeft, slideRight, scale)
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import {
  SprayCan,
  Search,
  Home as HomeIcon,
  Building2,
  Trash2,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "General Cleaning",
    description:
      "Perfect for maintaining the sparkle in your home or office. Our team will dust, vacuum, mop, and sanitize your space, leaving it fresh and inviting.",
    icon: SprayCan,
  },
  {
    title: "Deep Cleaning",
    description:
      "Ideal for those times when your space needs some extra attention. We'll tackle the hard-to-reach places and give your property the thorough cleaning it deserves.",
    icon: Search,
  },
  {
    title: "AIRBNB & Rentals",
    description:
      "Impress your guests with impeccable cleanliness. We provide quick and efficient cleaning between rentals to ensure your property is always guest-ready.",
    icon: HomeIcon,
  },
  {
    title: "New Construction",
    description:
      "After the builders have left, we come in to make your new space move-in ready. We remove all traces of construction residue, dust, and debris.",
    icon: Building2,
  },
  {
    title: "Commercial Cleaning",
    description:
      "A clean office is a productive office. Our discreet and efficient cleaning services will keep your workspace neat and professional without disrupting your work.",
    icon: Sparkles,
  },
  {
    title: "Junk Removal",
    description:
      "Clutter-free space is just a call away. We'll help you dispose of unwanted items responsibly, leaving you with a tidy and organized environment.",
    icon: Trash2,
  },
  {
    title: "Organizing Solutions",
    description:
      "Let us help you find harmony in your space. Our organizing experts can create custom solutions to keep your home or office ordered and serene.",
    icon: LayoutGrid,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen" id="main-content">
      <PageMeta
        title="Cleaning Services | Residential, Commercial & AIRBNB | Polished Maids NE Ohio"
        description="Explore our full range of cleaning services: residential, commercial, new construction, AIRBNB turnovers, deep cleaning, and more. Serving Medina, Akron, Cleveland, Canton, and all of Northeast Ohio."
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8" style={{ color: '#43566b' }}>
              Our Services
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#5a7089' }}>
              Ready for a spotless space? Get your free, personalized cleaning quote from Polished Maids today - because clean shouldn't be complicated.
            </p>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Video Banner */}
      <section className="py-8">
        <div className="container">
          <AnimatedSection animation="scale">
            <div className="relative overflow-hidden aspect-[21/9] max-w-5xl mx-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/manus-storage/video3_c674800e.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-[#43566b]/50 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <p className="text-white font-serif text-2xl md:text-4xl max-w-md">
                  Every detail matters.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08} animation={i % 2 === 0 ? "slideLeft" : "slideRight"}>
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border rounded-full transition-all duration-300 group-hover:border-gold group-hover:bg-gold/5" style={{ borderColor: '#43566b30' }}>
                      <service.icon size={24} strokeWidth={1.3} style={{ color: '#43566b' }} className="group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#43566b' }}>
                        {service.title}
                      </h3>
                      <p className="text-lg leading-relaxed font-sans" style={{ color: '#5a7089' }}>
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-block mt-4 text-xs font-sans font-medium tracking-[0.1em] uppercase text-gold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offer */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container max-w-3xl text-center">
          <AnimatedSection animation="scale">
            <p className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-gold mb-4">
              Special Offer
            </p>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#43566b' }}>
              Exclusive $99 Appliance Cleaning Package
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#5a7089' }}>
              Give your kitchen appliances the deep clean they deserve. Our specialized appliance cleaning package covers ovens, refrigerators, and more.
            </p>
            <Link
              href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-10 py-4 bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] uppercase hover:bg-gold/90 transition-all duration-300"
            >
              Book Now
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#43566b' }}>
              Ready for a Spotless Space?
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#5a7089' }}>
              Get your free, personalized cleaning quote from Polished Maids today - because clean shouldn't be complicated.
            </p>
            <Link
              href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-10 py-4 bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] uppercase hover:bg-gold/90 transition-all duration-300"
            >
              Get Your Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
