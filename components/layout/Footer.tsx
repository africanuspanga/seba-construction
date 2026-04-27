"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/Seba Logo.png"
                alt={COMPANY.name}
                width={60}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div>
                <span className="text-xl font-bold tracking-tight">{COMPANY.shortName}</span>
                <span className="block text-xs text-gray-400 tracking-wider uppercase">
                  Construction & Drilling
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading drilling and construction company in Tanzania since 2008. 
              Committed to safety, quality, and timely project delivery.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-safety/20 text-safety border border-safety/30">
                Safety Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone1.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={18} className="shrink-0 mt-0.5 text-secondary" />
                  <span>{COMPANY.phone1}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={18} className="shrink-0 mt-0.5 text-secondary" />
                  <span>{COMPANY.phone2}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} className="shrink-0 mt-0.5 text-secondary" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5 text-secondary" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            {COMPANY.poBox} | {COMPANY.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
