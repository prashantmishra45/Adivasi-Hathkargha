import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Store, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Adivasi Hathkargha | Jharkhand Cultural Dress Shop"
        description="Adivasi Hathkargha specializes in authentic Jharkhand traditional clothing. Located in Lohardaga, we support local culture with premium Adivasi wear."
        keywords="about Adivasi Hathkargha, Jharkhand cultural dress shop, Lohardaga clothing shop, Adivasi wear"
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
            About Our Shop
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-300 dark:text-stone-400 max-w-2xl mx-auto text-xl"
          >
            Specializing in Jharkhand traditional clothing and supporting our local culture in Lohardaga.
          </motion.p>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-stone-900 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-serif font-extrabold text-stone-900 dark:text-white mb-8 leading-tight">
                Preserving Jharkhand's Heritage Through Clothing
              </h2>
              <div className="space-y-6 text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                <p>
                  Welcome to <strong className="text-stone-900 dark:text-white">Adivasi Hathkargha</strong>, located in the heart of Lohardaga at Babamath, Court Road. We are a specialized boutique dedicated entirely to <strong className="text-terracotta-700 dark:text-ochre-400">Jharkhand traditional tribal clothing</strong>.
                </p>
                <p>
                  Our mission is to keep the vibrant Adivasi culture alive by providing authentic, high-quality traditional dresses, tribal sarees, and festival wear. We understand the deep cultural significance of these garments and ensure every piece reflects the true spirit of Jharkhand.
                </p>
                <p>
                  Whether you are looking for a Santhal saree, traditional men's wear, or outfits for local festivals, we cater to both individual customers and bulk buyers, always supporting local demand with pride.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 dark:border-stone-800">
                <img 
                  src="/Gallery/about-section-img.png" 
                  alt="Jharkhand traditional dress fabric" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-terracotta-100 dark:bg-terracotta-900/20 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-stone-200 dark:bg-stone-800 rounded-full -z-10 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-sand-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 relative transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-4 light-tribal-pattern dark:dark-tribal-pattern"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: Store, title: "Local Specialists", desc: "Deeply rooted in Lohardaga, specializing exclusively in Jharkhand's traditional wear.", bgImg: "/Gallery/Sarna-kids.png" },
              { icon: Award, title: "Authentic Quality", desc: "Genuine tribal patterns and high-quality fabrics that honor our cultural heritage.", bgImg: "/Gallery/sarna-gamcha.png" },
              { icon: Heart, title: "Cultural Support", desc: "Supporting local demand and keeping the beautiful Adivasi traditions alive.", bgImg: "/Gallery/sarna-assessories.png" }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative h-[350px] perspective-1000 group cursor-pointer"
              >
                <div className="w-full h-full relative transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 rounded-3xl shadow-lg group-hover:shadow-2xl">
                  {/* Front side (Image) */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border-t-4 border-terracotta-700 dark:border-terracotta-500">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${val.bgImg})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                       <val.icon className="h-12 w-12 text-white/80 mb-4 drop-shadow-md" />
                       <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">{val.title}</h3>
                    </div>
                  </div>
                  
                  {/* Back side (Content) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-stone-900 p-8 rounded-3xl border-t-4 border-terracotta-700 dark:border-terracotta-500 flex flex-col justify-center items-center text-center">
                    <div className="w-14 h-14 bg-terracotta-50 dark:bg-stone-800 text-terracotta-800 dark:text-ochre-400 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-stone-100 dark:border-stone-700">
                      <val.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mb-4">{val.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
