/**
 * Polished Maids - About Page
 * Design: Scandinavian Clean - #43566b titles, generous whitespace, video integration
 * Scroll animations: varied (slideLeft, slideRight, scale, fadeUp)
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";

export default function About() {
  return (
    <div className="min-h-screen" id="main-content">
      <PageMeta
        title="About Polished Maids | Meet Jess - Owner & Founder | NE Ohio Cleaning"
        description="Meet Jess, the owner of Polished Maids Cleaning Service. Serving Northeast Ohio since 2018 with consistent, detail-oriented residential and commercial cleaning. Same team every visit, always led by the owner."
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl" style={{ color: '#43566b' }}>
              Cleaning Excellence in<br />Northeast Ohio
            </h1>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection animation="slideLeft">
              <img
                src="/manus-storage/owner-jess_9c8b77f2.jpg"
                alt="Jess, owner of Polished Maids"
                className="w-full max-w-lg aspect-[3/4] object-cover object-top"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15} animation="slideRight">
              <div className="md:pt-8">
                <h2 className="text-3xl md:text-4xl mb-8" style={{ color: '#43566b' }}>
                  Hey There!
                </h2>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#5a7089' }}>
                  <p>
                    As most of you know me personally, I wanted to formally introduce myself to our new followers. I'm Jess and I am the owner of Polished Maids a Residential and Commercial Cleaning Service. I have been a 'Sevillian' for 7 years. I love our community but mostly the people.
                  </p>
                  <p>
                    I started my business in 2018 focusing solely on medical offices. I enjoyed the cleaning part but felt I needed a change. After Covid, I received an abundance of residential clients. I started building relationships with my clientele and decided residential cleaning was a better fit as it was rewarding and fulfilling.
                  </p>
                  <p>
                    I have a small team that has been with me since the beginning. Consistency and attention to detail is what sets us apart from other cleaning services. With Polished Maids you will get the same team every time with myself included.
                  </p>
                  <p>
                    If you're looking for a one time deep clean or bi-weekly's, we can accommodate you. Create your own package with us and have us do the chores you dread!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection animation="scale">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/manus-storage/video2_fc351e20.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative overflow-hidden aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/manus-storage/video4_b7d26901.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container max-w-3xl">
          <AnimatedSection animation="fadeUp">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl mb-10" style={{ color: '#43566b' }}>
                About Polished Maids
              </h2>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#5a7089' }}>
                <p>
                  At Polished Maids, we're not just about cleaning - we're about creating a spotless, comfortable environment where you can relax and thrive. Our expert team, rooted in the heart of Ohio, extends its services to Medina, Fairlawn, and Wooster, delivering a suite of top-quality cleaning solutions.
                </p>
                <p>
                  From the meticulous detail of our deep cleaning to the transformative touch we bring to AIRBNB & rentals, new constructions, small offices, and beyond, we ensure every space we encounter is left gleaming.
                </p>
                <p>
                  We specialize in not only general and deep cleaning but also offer specialized organizing solutions, junk removal, and regular maintenance with weekly, bi-weekly, and monthly schedules.
                </p>
                <p className="font-medium" style={{ color: '#43566b' }}>
                  Licensed, insured, and committed to excellence, Polished Maids is your go-to for a pristine, polished finish every time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl text-center">
          <AnimatedSection animation="scale">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#43566b' }}>
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#5a7089' }}>
              Contact us today for a free, no-obligation quote and step into a cleaner, brighter space tomorrow.
            </p>
            <Link
              href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-10 py-4 bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] uppercase hover:bg-gold/90 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
