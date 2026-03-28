import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Star, Instagram, Heart } from 'lucide-react';

export default function Home() {
  // Schema markup for Local Business
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Adivasi Hathkargha",
    "image": "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80",
    "@id": "",
    "url": "https://adivasihathkargha.com",
    "telephone": "+919236863278",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Babamath, Court Road, Maina Bagicha",
      "addressLocality": "Lohardaga",
      "addressRegion": "Jharkhand",
      "postalCode": "835302",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.4333,
      "longitude": 84.6833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "priceRange": "$$"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <SEO
        title="Adivasi Hathkargha Lohardaga | Jharkhand Traditional Tribal Dresses"
        description="Authentic Jharkhand traditional dress and Adivasi wear in Lohardaga. Shop for tribal sarees, cultural clothing, and traditional dresses at wholesale prices."
        keywords="Jharkhand traditional dress, Adivasi dress Lohardaga, tribal saree Jharkhand, Lohardaga clothing shop, Jharkhand cultural dress shop"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-sand-50 dark:bg-stone-900 overflow-hidden tribal-border-bottom transition-colors duration-300">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block py-1.5 px-4 rounded-full bg-terracotta-100 dark:bg-terracotta-800/30 border border-terracotta-200 dark:border-terracotta-800/50 text-terracotta-700 dark:text-ochre-400 text-sm font-bold mb-6 tracking-wider uppercase shadow-sm"
            >
              Authentic Adivasi Wear
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-serif font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-terracotta-700 via-terracotta-600 to-ochre-500 dark:from-terracotta-500 dark:via-ochre-500 dark:to-terracotta-400 drop-shadow-xl leading-tight"
            >
              Adivasi Hathkargha
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl font-serif font-bold tracking-wide sm:text-4xl lg:text-5xl mb-6 text-stone-900 dark:text-sand-50 leading-tight"
            >
              Jharkhand Traditional <span className="text-terracotta-600 dark:text-ochre-500">Dresses</span> in Lohardaga
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-stone-600 dark:text-stone-300 mb-10 max-w-2xl font-medium leading-relaxed"
            >
              Celebrate Jharkhand's rich culture with our exclusive collection of tribal sarees, traditional outfits, and authentic Adivasi wear at wholesale prices.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919236863278"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-terracotta-600 hover:bg-terracotta-700 dark:bg-terracotta-600 dark:hover:bg-terracotta-500 transition-colors shadow-xl shadow-terracotta-900/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-stone-900 dark:border-sand-50 text-lg font-bold rounded-xl text-stone-900 dark:text-sand-50 bg-transparent hover:bg-stone-900 hover:text-sand-50 dark:hover:bg-sand-50 dark:hover:text-stone-900 transition-colors w-full sm:w-auto"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Visit Store
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-sand-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Authentic Jharkhand Clothing", desc: "Genuine tribal patterns, Santhal sarees, and traditional Adivasi wear.", icon: Star, bgImg: "/Gallery/flip-card-1.jpeg" },
              { title: "Wholesale Pricing", desc: "Best rates for bulk buyers and local customers in Lohardaga.", icon: CheckCircle2, bgImg: "/Gallery/flip-card-2.jpeg" },
              { title: "Trusted Local Shop", desc: "Your dedicated Jharkhand cultural dress shop in the heart of the city.", icon: MapPin, bgImg: "/Gallery/flip-card-3.jpeg" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative h-[350px] perspective-1000 group cursor-pointer"
              >
                <div className="w-full h-full relative transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 rounded-3xl shadow-lg group-hover:shadow-2xl">
                  {/* Front side (Image) */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border-t-4 border-terracotta-600 dark:border-ochre-500">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.bgImg})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <feature.icon className="h-12 w-12 text-white/80 mb-4 drop-shadow-md" />
                      <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">{feature.title}</h3>
                    </div>
                  </div>

                  {/* Back side (Content) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-sand-50 dark:bg-stone-900 p-8 rounded-3xl border-t-4 border-terracotta-600 dark:border-ochre-500 flex flex-col justify-center items-center text-center">
                    <div className="w-14 h-14 bg-terracotta-50 dark:bg-stone-800 text-terracotta-700 dark:text-ochre-400 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-stone-100 dark:border-stone-700">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-sand-50 mb-4">{feature.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-sand-100 dark:bg-stone-900 relative transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-4 light-tribal-pattern dark:dark-tribal-pattern"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900 dark:text-sand-50 sm:text-5xl">Featured Adivasi Collection</h2>
            <p className="mt-6 text-xl text-stone-600 dark:text-stone-400">Explore our authentic Jharkhand traditional dresses</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: "/Gallery/red-white-saree.png", title: "Laal Paad Saree & Blouse", category: "Tribal Saree", alt: "Jharkhand tribal saree red white" },
              { img: "/Gallery/Sarna-lahenga.jpeg", title: "Sarna Lehanga", category: "Adivasi Wear", alt: "Sarna Lehanga traditional dress" },
              { img: "/Gallery/Bandi-men.png", title: "Bandi & Shirts", category: "Men's Wear", alt: "Jharkhand traditional men wear" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative bg-white dark:bg-stone-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-200 dark:border-stone-700"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-terracotta-500 dark:text-ochre-400 text-sm font-bold mb-2 uppercase tracking-widest"
                  >
                    {item.category}
                  </motion.span>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-2xl font-serif font-bold text-white"
                  >
                    {item.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center text-terracotta-700 dark:text-ochre-400 font-bold hover:text-terracotta-800 dark:hover:text-ochre-300 transition-colors text-xl group"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instagram Store Tour */}
      <section className="py-24 bg-sand-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Instagram className="w-12 h-12 mx-auto text-terracotta-600 dark:text-ochre-500 mb-6" />
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-sand-50 mb-6">Discover Our Store</h2>
            <p className="mt-4 text-stone-600 dark:text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
              Take a virtual tour of Adivasi Hathkargha and explore our authentic collection of Jharkhand traditional dresses.
            </p>
            <a
              href="https://www.instagram.com/reel/DV7lnkWkdHj/?igsh=eWdhMzFmdWtyZmx2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-terracotta-600 to-ochre-500 hover:from-terracotta-700 hover:to-ochre-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Watch Store Tour on Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact / CTA */}
      <section className="py-24 bg-forest-900 dark:bg-stone-900 text-sand-50 relative overflow-hidden transition-colors duration-300 border-t-[12px] border-terracotta-700 dark:border-terracotta-600">
        <div className="absolute inset-0 opacity-10 light-tribal-pattern"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold sm:text-5xl mb-8 leading-tight"
          >
            Looking for Authentic Adivasi Wear?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-sand-100 mb-12"
          >
            Visit our Lohardaga clothing shop or call us today to explore the best Jharkhand traditional dresses at wholesale prices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919236863278"
              className="inline-flex justify-center items-center px-10 py-5 border-2 border-sand-50 text-xl font-bold rounded-xl text-forest-900 bg-sand-50 hover:bg-sand-100 transition-colors shadow-2xl"
            >
              <Phone className="mr-3 h-6 w-6" />
              92368 63278
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
