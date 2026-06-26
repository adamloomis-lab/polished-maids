/**
 * Polished Maids - Contact Page
 * Design: Clean form, #43566b titles, video integration
 * Scroll animations: varied (slideLeft, slideRight, fadeUp)
 * Form: Submits to Netlify Forms (email notification)
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import PageMeta from "@/components/PageMeta";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success(`Thank you, ${formData.name}! We'll be in touch within 24 hours.`);
      setFormData({ name: "", phone: "", service: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please call us directly at (330) 242-7203.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" id="main-content">
      <PageMeta
        title="Contact Polished Maids | Free Cleaning Quote | Northeast Ohio"
        description="Request your free cleaning quote from Polished Maids. Call (330) 242-7203 or fill out our contact form. Serving Medina, Akron, Cleveland, Canton, and all of Northeast Ohio."
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-12 md:pt-52 md:pb-16">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: '#43566b' }}>
              We Love a Mess.
            </h1>
            <p className="text-lg" style={{ color: '#5a7089' }}>
              Get Your Customized Quote Today!
            </p>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection animation="slideLeft">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-sans font-medium tracking-[0.1em] uppercase mb-2" style={{ color: '#43566b' }}>
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-0 py-3 border-0 border-b bg-transparent focus-visible:outline-none focus:border-gold transition-colors duration-300"
                        style={{ borderBottomColor: '#43566b20', color: '#43566b' }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-sans font-medium tracking-[0.1em] uppercase mb-2" style={{ color: '#43566b' }}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-0 py-3 border-0 border-b bg-transparent focus-visible:outline-none focus:border-gold transition-colors duration-300"
                        style={{ borderBottomColor: '#43566b20', color: '#43566b' }}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-sans font-medium tracking-[0.1em] uppercase mb-2" style={{ color: '#43566b' }}>
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-0 py-3 border-0 border-b bg-transparent focus-visible:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                      style={{ borderBottomColor: '#43566b20', color: '#43566b' }}
                    >
                      <option value="">Select a service...</option>
                      <option value="General Cleaning">General Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="AIRBNB & Rentals">AIRBNB & Rentals</option>
                      <option value="New Construction">New Construction</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Junk Removal">Junk Removal</option>
                      <option value="Organizing Solutions">Organizing Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-sans font-medium tracking-[0.1em] uppercase mb-2" style={{ color: '#43566b' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-0 py-3 border-0 border-b bg-transparent focus-visible:outline-none focus:border-gold transition-colors duration-300 resize-none"
                      style={{ borderBottomColor: '#43566b20', color: '#43566b' }}
                      placeholder="Tell us about your space and cleaning needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-10 py-4 bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] uppercase hover:bg-gold/90 transition-all duration-300 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Request a Quote"}
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2} animation="slideRight">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl mb-6" style={{ color: '#43566b' }}>Get in Touch</h3>
                    <div className="space-y-5">
                      {[
                        { icon: Phone, label: "(330) 242-7203", href: "tel:+13302427203" },
                        { icon: MapPin, label: "Serving all of Northeast Ohio" },
                        { icon: Clock, label: "Mon - Sat: 8am - 6pm" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <item.icon size={18} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                          {item.href ? (
                            <a href={item.href} className="text-base font-sans hover:text-gold transition-colors duration-300" style={{ color: '#5a7089' }}>
                              {item.label}
                            </a>
                          ) : (
                            <span className="text-base font-sans" style={{ color: '#5a7089' }}>{item.label}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-[1px]" style={{ backgroundColor: '#43566b15' }} />

                  <div>
                    <h3 className="text-xl mb-4" style={{ color: '#43566b' }}>Why Choose Us</h3>
                    <ul className="space-y-3 text-base font-sans" style={{ color: '#5a7089' }}>
                      {[
                        "Licensed & Insured",
                        "Same team every visit",
                        "Eco-friendly products",
                        "Flexible scheduling",
                        "Free, no-obligation quotes",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Video */}
                  <div className="mt-8">
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
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
