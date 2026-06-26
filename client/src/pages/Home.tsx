/**
 * Polished Maids - Home Page
 * Design: Scandinavian Clean with floating bubbles background
 * Colors: #43566b for titles/hero, Gold for CTAs
 * Icons: Lucide (elegant, thin stroke)
 * Videos: Hero + additional throughout
 * Scroll animations: varied (fadeUp, slideLeft, slideRight, scale)
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Smile, Sparkles, Clock, Home as HomeIcon, Building2, Plane, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";


const reviews = [
  {
    name: "Adam Loomis",
    text: "I've had the pleasure of having Polished Maids clean my home, and I couldn't be happier with their service! From start to finish, they were professional, thorough, and incredibly detail-oriented. My house has never looked better.",
    stars: 5,
  },
  {
    name: "Sean & Sylvia Bradford",
    text: "Jess has been cleaning our home for almost 2.5 years and we are very happy with the services. She is flexible and often works around my work schedule since I work from home. The price is reasonable as well.",
    stars: 5,
  },
  {
    name: "Stephen Schmidt",
    text: "Jess and her team have been cleaning our home since we moved to Medina a little over a year and a half ago. They are always friendly, professional, and efficient, and their pricing is very reasonable.",
    stars: 5,
  },
  {
    name: "Casandra Morgan",
    text: "I reached out to Polished Maids when I moved into my new house. Jess was quick to respond and come by the house to share what her team can do, while understanding what we wanted done. From the first clean to every one after, outstanding.",
    stars: 5,
  },
  {
    name: "Rachel Kilgore",
    text: "We switched to Polished Maids about 3 months ago and we could not be happier! Their attention to detail and thoroughness is top notch. They are professional, friendly and great at communicating. Cleaning day is one of our favorite days!",
    stars: 5,
  },
  {
    name: "Denise Krivach",
    text: "Jess and Shelby are absolute gems! Very personal and professional. They are not afraid of hard work and do a phenomenal job keeping our house looking polished. We highly recommend Polished Maids!",
    stars: 5,
  },
  {
    name: "Cody Grimm",
    text: "Jess and her team are the best cleaning service my family has used since moving to Medina. We are on a bi-weekly schedule and we wouldn't change a thing. The team is meticulous and accommodating.",
    stars: 5,
  },
  {
    name: "nick herman",
    text: "Jess and her team provided an amazing experience. She is on time and starts working immediately. Her team is very respectful. She left the house smelling amazing and spotless. I highly recommend.",
    stars: 5,
  },
  {
    name: "Rebbecca Oxley",
    text: "We had Polished Maids out to deep clean our house before our wedding and we were so happy with how detailed they were. Prompt to show up and super professional. Everything was fantastic.",
    stars: 5,
  },
  {
    name: "Amanda Woltz",
    text: "Jess and her team have been working with us for 6 months and we could not be happier with their quality of work. They are thorough and have excellent attention to detail.",
    stars: 5,
  },
  {
    name: "Darin Ellinger",
    text: "Wish I could give her 10 stars. So impressed. Jess did such an amazing job. My kitchen has never looked better! Highly recommend.",
    stars: 5,
  },
  {
    name: "Greg Palya",
    text: "We found Polished Maids and they have been perfect. They show up every time. The owner is very responsive with any questions we have. They are affordable and do a great job.",
    stars: 5,
  },
];

const serviceAreas = [
  "Medina", "Fairlawn", "Wooster", "Akron", "Canton", "Cleveland",
  "Brecksville", "Broadview Heights", "Brunswick", "Wadsworth",
  "Strongsville", "North Royalton", "Copley", "Bath",
];

export default function Home() {

  const [currentReview, setCurrentReview] = useState(0);

  // Subtle hero parallax — video drifts and scales as you scroll past it.
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 220]);
  const heroScale = useTransform(scrollY, [0, 900], [1, 1.18]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 80]);
  const heroTextOpacity = useTransform(scrollY, [0, 420], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="min-h-screen" id="main-content">
      <PageMeta
        title="Polished Maids Cleaning Service | Northeast Ohio Residential & Commercial Cleaning"
        description="Professional residential and commercial cleaning services in Northeast Ohio. Polished Maids serves Medina, Akron, Cleveland, Canton, and surrounding areas. Insured, detail-oriented, and trusted since 2018. Get your free quote today."
      />
      <Navigation />

      {/* Hero Section - Full viewport video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/manus-storage/hero-video_d4100d82.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-white/65" />
        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-10 text-center px-4"
        >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight" style={{ color: '#43566b' }}>
            We Love a Mess.
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-sans tracking-wide" style={{ color: '#43566b' }}>
            Residential & Commercial Cleaning Services in Northeast Ohio
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-4 bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] uppercase hover:bg-gold/90 transition-all duration-300"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/services"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-4 border font-sans font-medium text-sm tracking-[0.08em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              style={{ borderColor: '#43566b', color: '#43566b' }}
            >
              Our Services
            </Link>
          </div>
        </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <AnimatedSection animation="scale">
            <div className="w-16 h-[1px] bg-gold mx-auto mb-10" />
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#5a7089' }}>
              Welcome to Polished Maids, your trusted cleaning partner in Northeast Ohio. Our professional cleaning services are customized to cater to your unique needs, ensuring that your space is not just cleaned, but polished to perfection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories with Icons */}
      <section className="py-14 md:py-20">
        <div className="container">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl text-center mb-20" style={{ color: '#43566b' }}>
              What We Do
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              {
                title: "Residential & Commercial",
                description: "From homes to offices, we deliver spotless results tailored to your space.",
                icon: HomeIcon,
              },
              {
                title: "New Construction",
                description: "Post-build cleaning that makes your new space move-in ready.",
                icon: Building2,
              },
              {
                title: "AIRBNB & Vacation Rentals",
                description: "Quick turnovers that keep your property guest-ready at all times.",
                icon: Plane,
              },
            ].map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15} animation="fadeUp">
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    <service.icon size={44} strokeWidth={1.1} className="mx-auto" style={{ color: '#43566b' }} />
                    <motion.div
                      className="absolute -inset-4 border border-gold/20 rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    />
                  </div>
                  <h3 className="text-2xl mb-4 font-semibold" style={{ color: '#43566b' }}>{service.title}</h3>
                  <p className="text-lg leading-relaxed font-sans" style={{ color: '#5a7089' }}>
                    {service.description}
                  </p>
                  <div className="mt-6 w-8 h-[1px] bg-gold mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <AnimatedSection animation="scale">
            <div className="relative overflow-hidden aspect-video max-w-4xl mx-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/manus-storage/video3_c674800e.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#43566b]/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-2xl md:text-3xl">
                  Attention to detail in every corner.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Shield, label: "Insured" },
              { icon: Smile, label: "Friendly & Professional" },
              { icon: Sparkles, label: "Premium Materials" },
              { icon: Clock, label: "On-Time, Every Time" },
            ].map((badge, i) => (
              <AnimatedSection key={badge.label} delay={i * 0.1} animation="fadeUp">
                <div className="text-center">
                  <badge.icon size={32} className="mx-auto text-gold mb-4" strokeWidth={1.3} />
                  <p className="font-sans text-sm font-medium" style={{ color: '#43566b' }}>{badge.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ color: '#43566b' }}>
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-16">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
              <span className="ml-2 text-sm font-sans" style={{ color: '#5a7089' }}>5.0 on Google</span>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center px-8 md:px-16"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(reviews[currentReview].stars)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl leading-relaxed italic" style={{ color: '#5a7089' }}>
                  "{reviews[currentReview].text}"
                </blockquote>
                <p className="mt-8 text-sm font-sans font-medium tracking-wide" style={{ color: '#43566b' }}>
                  {reviews[currentReview].name}
                </p>
              </motion.div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:text-gold transition-colors duration-300"
              style={{ color: '#43566b' }}
              aria-label="Previous review"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-gold transition-colors duration-300"
              style={{ color: '#43566b' }}
              aria-label="Next review"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentReview(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentReview ? "bg-gold w-6" : "bg-[#43566b]/20"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview with Photo */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <img
                  src="/manus-storage/owner-jess_9c8b77f2.jpg"
                  alt="Jess, owner of Polished Maids"
                  className="w-full max-w-md aspect-[3/4] object-cover object-top"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" delay={0.15}>
              <h2 className="text-3xl md:text-4xl mb-8" style={{ color: '#43566b' }}>
                Meet Jess
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#5a7089' }}>
                I'm Jess and I am the owner of Polished Maids, a Residential and Commercial Cleaning Service. I started my business in 2018 and have been serving the Northeast Ohio community ever since.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#5a7089' }}>
                Consistency and attention to detail is what sets us apart. With Polished Maids you will get the same team every time with myself included.
              </p>
              <Link
                href="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block text-sm font-sans font-medium tracking-[0.08em] uppercase text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-300"
              >
                Read Our Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Grid */}
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

      {/* Service Area Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <MapPin size={36} strokeWidth={1.2} className="mx-auto text-gold mb-6" />
              <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#43566b' }}>
                Serving All of Northeast Ohio
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#5a7089' }}>
                From Medina to Cleveland, Akron to Canton, our team brings the Polished Maids standard to homes and businesses across the region.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
              {serviceAreas.map((city, i) => (
                <motion.span
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="px-5 py-2.5 border text-sm font-sans font-medium transition-all duration-300 hover:border-gold hover:text-gold"
                  style={{ borderColor: '#43566b20', color: '#43566b' }}
                >
                  {city}
                </motion.span>
              ))}
            </div>
            <p className="text-center mt-10 text-sm font-sans" style={{ color: '#5a7089' }}>
              Don't see your city? We likely serve your area too.{" "}
              <Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gold hover:underline">Contact us</Link> to find out.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container max-w-2xl text-center">
          <AnimatedSection animation="scale">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#43566b' }}>
              Ready for a Spotless Space?
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#5a7089' }}>
              Discover the Polished Maids difference for yourself. Contact us today for a free, no-obligation quote and step into a cleaner, brighter space tomorrow.
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
