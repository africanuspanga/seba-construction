"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/bg-images/istockphoto-1400437847-612x612.jpg')` }} />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondary/20 text-secondary">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your project? Reach out for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <SectionHeading title="Contact Information" subtitle="Reach Out" centered={false} />

              <AnimatedCard className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Phone</h3>
                  <a href={`tel:${COMPANY.phone1.replace(/\s/g, "")}`} className="text-gray-600 hover:text-primary transition-colors block text-sm">
                    {COMPANY.phone1}
                  </a>
                  <a href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`} className="text-gray-600 hover:text-primary transition-colors block text-sm">
                    {COMPANY.phone2}
                  </a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Email</h3>
                  <a href={`mailto:${COMPANY.email}`} className="text-gray-600 hover:text-primary transition-colors block text-sm">
                    {COMPANY.email}
                  </a>
                  <a href={`mailto:${COMPANY.email2}`} className="text-gray-600 hover:text-primary transition-colors block text-sm">
                    {COMPANY.email2}
                  </a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Office</h3>
                  <p className="text-gray-600 text-sm">{COMPANY.address}</p>
                  <p className="text-gray-500 text-xs mt-1">{COMPANY.poBox}</p>
                </div>
              </AnimatedCard>

              <AnimatedCard className="flex items-start gap-4 border-safety/20 bg-gradient-to-br from-white to-safety/5">
                <div className="w-12 h-12 rounded-xl bg-safety/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-safety" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Safety Hotline</h3>
                  <p className="text-gray-600 text-sm">
                    Report safety concerns directly to our HSE team.
                  </p>
                  <a href={`tel:${COMPANY.phone1.replace(/\s/g, "")}`} className="text-safety font-semibold text-sm hover:underline mt-1 inline-block">
                    {COMPANY.phone1}
                  </a>
                </div>
              </AnimatedCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedCard>
                <h3 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-dark mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="+255..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                        <select
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Select a service</option>
                          <option value="borehole">Borehole Drilling</option>
                          <option value="exploration">Groundwater Exploration</option>
                          <option value="construction">Civil & Building Construction</option>
                          <option value="dewatering">Dewatering Services</option>
                          <option value="diamond">Diamond & RC Drilling</option>
                          <option value="irrigation">Irrigation & Water Supply</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 w-full">
        <iframe
          src={COMPANY.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SEBA Office Location"
        />
      </section>
    </>
  );
}
