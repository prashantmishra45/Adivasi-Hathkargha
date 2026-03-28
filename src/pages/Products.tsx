import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Filter } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Laal Paad Saree & Sarna Blouse",
    category: "Tribal Sarees",
    image: "/Gallery/red-white-saree.png",
    desc: "Classic white saree with deep red borders (Laal Paad) paired with an authentic Sarna blouse.",
    alt: "Jharkhand tribal saree red white"
  },
  {
    id: 2,
    title: "Sarna Lehanga",
    category: "Festival Dresses",
    image: "/Gallery/Sarna-lahenga.jpeg",
    desc: "Beautifully crafted Sarna Lehanga featuring traditional Jharkhand tribal motifs and vibrant colors.",
    alt: "Sarna Lehanga Jharkhand traditional dress"
  },
  {
    id: 3,
    title: "Bandi and Shirt Varieties",
    category: "Traditional Men Wear",
    image: "/Gallery/Bandi-men.png",
    desc: "All varieties of traditional Bandi (waistcoats) and shirts for a complete cultural look.",
    alt: "Traditional Men Wear Jharkhand"
  },
  {
    id: 4,
    title: "Kids Dhoti Kurta & Frock",
    category: "Kids Wear",
    image: "/Gallery/Sarna-kids.png",
    desc: "Adorable and comfortable Dhoti Kurta sets and traditional frocks for children.",
    alt: "Kids Adivasi dress Lohardaga"
  },
  {
    id: 5,
    title: "Sarna Gamcha",
    category: "Accessories",
    image: "/Gallery/sarna-gamcha.png",
    desc: "Authentic Sarna Gamcha woven with traditional red and white tribal patterns.",
    alt: "Sarna Gamcha tribal pattern"
  },
  {
    id: 6,
    title: "Traditional Accessories",
    category: "Accessories",
    image: "/Gallery/sarna-assessories.png",
    desc: "Complete your authentic Adivasi look with our range of traditional accessories.",
    alt: "Jharkhand tribal accessories"
  }
];

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="Jharkhand Traditional Dresses Gallery | Adivasi Hathkargha"
        description="Browse our gallery of authentic Jharkhand traditional dresses, tribal sarees, and Adivasi wear in Lohardaga. Wholesale prices available."
        keywords="Jharkhand traditional dress, Tribal saree Jharkhand, Adivasi dress gallery, Lohardaga clothing shop"
      />

      {/* Header */}
      <div className="bg-stone-900 dark:bg-stone-950 py-20 text-center tribal-border-bottom transition-colors duration-300 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Gallery/home-bg-vid.mp4" type="video/mp4" />
        </video>
        {/* Transparent Overlay for Text Readability */}
        <div className="absolute inset-0 z-0 bg-sand-50/40 dark:bg-stone-900/60"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-extrabold text-white mb-6 tracking-tight"
          >
            Our Tribal Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-300 dark:text-stone-400 max-w-2xl mx-auto text-xl"
          >
            Discover our authentic range of Jharkhand traditional clothing and Adivasi wear.
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-sand-50 dark:bg-stone-900 relative transition-colors duration-300 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-stone-800 rounded-3xl shadow-lg overflow-hidden border-t-4 border-stone-200 dark:border-stone-700 group cursor-pointer hover:border-terracotta-700 dark:hover:border-terracotta-500 hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-900/60 dark:bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-white font-bold px-8 py-3 border-2 border-white rounded-full uppercase tracking-widest text-sm shadow-lg"
                      >
                        View Details
                      </motion.span>
                    </div>
                  </div>
                  <div className="relative p-8 bg-white dark:bg-stone-800 overflow-hidden">
                    <div className="absolute inset-0 bg-tribal-art opacity-5 dark:opacity-10 group-hover:opacity-15 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-overlay"></div>
                    <div className="relative z-10">
                      <span className="text-sm font-bold text-terracotta-700 dark:text-ochre-400 uppercase tracking-widest mb-2 block">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-3">{product.title}</h3>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{product.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-900/95 dark:bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-terracotta-400 transition-colors p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view of traditional dress"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
