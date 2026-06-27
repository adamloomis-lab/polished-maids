/**
 * Polished Maids - Contact Page
 * Design: Clean fluid form, navy #43566b titles, gold accent, video integration
 * Scroll animations: varied (slideLeft, slideRight, fadeUp)
 * Form: Submits to Netlify Forms (email notification) - backend preserved exactly
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Clock, Send, ArrowRight, Loader2,
  Home as HomeIcon, SprayCan, KeyRound, Hammer, Building2,
  Trash2, Boxes, MessageCircle, type LucideIcon,
} from "lucide-react";
import { FloatField, SuccessCheck } from "@/components/FluidField";
import PageMeta from "@/components/PageMeta";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

// Service options as single-select icon cards. The submitted `value` is
// kept identical to the old <select> so the Netlify backend gets the same data.
const SERVICE_OPTIONS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "General Cleaning", label: "General Cleaning", icon: HomeIcon },
  { value: "Deep Cleaning", label: "Deep Cleaning", icon: SprayCan },
  { value: "AIRBNB & Rentals", label: "Airbnb & Rentals", icon: KeyRound },
  { value: "New Construction", label: "New Construction", icon: Hammer },
  { value: "Commercial Cleaning", label: "Commercial", icon: Building2 },
  { value: "Junk Removal", label: "Junk Removal", icon: Trash2 },
  { value: "Organizing Solutions", label: "Organizing", icon: Boxes },
  { value: "Other", label: "Something else", icon: MessageCircle },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const firstName = formData.name.trim().split(" ")[0];
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmittedName(firstName);
      setSubmitted(true);
      setFormData({ name: "", phone: "", service: "", message: "" });
    } catch {
      alert("Something went wrong. Please call us directly at (330) 242-7203.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
                {/* Hidden static form so Netlify can register fields at build time */}
                <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
                  <input type="text" name="name" />
                  <input type="tel" name="phone" />
                  <input type="text" name="service" />
                  <textarea name="message" />
                </form>

                {submitted ? (
                  <div
                    className="rounded-xl border border-[#43566b]/10 bg-white p-10 md:p-12 text-center shadow-[0_24px_60px_-34px_rgba(67,86,107,0.5)]"
                    style={{ animation: 'rise 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
                  >
                    <span
                      className="mx-auto mb-6 flex h-20 w-20 items-center justify-center"
                      style={{ animation: 'pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}
                    >
                      <SuccessCheck />
                    </span>
                    <h3 className="text-3xl md:text-4xl mb-3" style={{ color: '#43566b' }}>
                      {submittedName ? `Thank You, ${submittedName}!` : 'Thank You!'}
                    </h3>
                    <p className="font-sans text-base font-light mb-8 max-w-md mx-auto" style={{ color: '#5a7089' }}>
                      Your request is on its way to our team. We'll be in touch within 24 hours. Need us sooner? Give us a call and we'll take care of you today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href="tel:+13302427203"
                        className="group relative inline-flex items-center gap-2 overflow-hidden bg-gold text-white font-sans text-xs font-medium tracking-[0.14em] uppercase px-8 py-4 rounded-lg hover:bg-gold/90 transition-all duration-300"
                      >
                        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]" />
                        <Phone size={16} /> (330) 242-7203
                      </a>
                      <button
                        onClick={() => { setSubmitted(false); setSubmittedName(''); }}
                        className="font-sans text-sm font-medium border-b pb-0.5 transition-colors"
                        style={{ color: '#43566b', borderColor: 'rgba(67,86,107,0.4)' }}
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatField name="name" label="Name" value={formData.name} onChange={handleChange} required />
                    <FloatField name="phone" label="Phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>

                  {/* Service as single-select icon cards (value submits via formData.service) */}
                  <fieldset>
                    <legend className="mb-3 block font-sans text-xs font-medium tracking-[0.12em] uppercase" style={{ color: '#43566b' }}>
                      Service Needed
                    </legend>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {SERVICE_OPTIONS.map((o) => {
                        const active = formData.service === o.value;
                        const Icon = o.icon;
                        return (
                          <button
                            key={o.value}
                            type="button"
                            aria-pressed={active}
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, service: active ? "" : o.value }))
                            }
                            className={`flex flex-col items-start gap-2 rounded-lg border px-3.5 py-3.5 text-left font-sans text-sm transition-all duration-200 active:scale-[0.98] ${
                              active
                                ? "border-gold bg-gold text-white shadow-[0_10px_24px_-12px_rgba(190,154,74,0.8)]"
                                : "border-[#43566b]/15 bg-[#f7f8fa] text-[#43566b] hover:border-gold hover:bg-white"
                            }`}
                          >
                            <Icon size={22} className={active ? "text-white" : "text-gold"} strokeWidth={1.75} />
                            <span className="font-medium leading-tight">{o.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <FloatField name="message" label="Tell us about your space and cleaning needs" value={formData.message} onChange={handleChange} textarea rows={4} />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden bg-gold text-white font-sans font-medium text-sm tracking-[0.08em] uppercase px-10 py-4 rounded-lg hover:bg-gold/90 transition-all duration-300 active:scale-[0.99] disabled:opacity-60"
                  >
                    <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]" />
                    {submitting ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending</>
                    ) : (
                      <><Send size={14} /> Request a Quote <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></>
                    )}
                  </button>
                </form>
                )}
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
