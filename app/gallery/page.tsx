"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryImages = [
  { src: "/images/Drilling Works.png", title: "Borehole Drilling Operations", category: "Drilling" },
  { src: "/images/Drilling work 2.jpg", title: "Diamond Drilling Project", category: "Drilling" },
  { src: "/images/Ground Water Exploration.jpg", title: "Groundwater Exploration Survey", category: "Exploration" },
  { src: "/images/Groundwater.jpg", title: "Dewatering Operations", category: "Dewatering" },
  { src: "/images/Building Construction.jpg", title: "Building Construction", category: "Construction" },
  { src: "/images/dam construction.jpeg", title: "Dam Construction Project", category: "Construction" },
  { src: "/images/Irrigation.jpg", title: "Irrigation Scheme", category: "Irrigation" },
  { src: "/images/Chekeleni Village Mtwara Project.jpeg", title: "Chekeleni Village Water Project", category: "Water Supply" },
  { src: "/images/Isindagosi Project Wanging'ombe Njombe.jpeg", title: "Isindagosi Water Supply Scheme", category: "Water Supply" },
  { src: "/images/consultation.jpg", title: "Site Consultation", category: "Consultation" },
  { src: "/images/Seba Hero section image.png", title: "SEBA Operations", category: "General" },
  { src: "/images/istockphoto-1249849352-612x612.jpg", title: "Equipment on Site", category: "Equipment" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of our drilling, construction, and water infrastructure projects across Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
