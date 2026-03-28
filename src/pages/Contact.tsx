import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Adivasi Hathkargha | Lohardaga Clothing Shop"
        description="Visit Adivasi Hathkargha in Lohardaga, Jharkhand for authentic traditional dresses and tribal sarees. Call us at 9236863278."
        keywords="contact Adivasi Hathkargha, Lohardaga clothing shop, Jharkhand traditional dress shop location"
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-300 dark:text-stone-400 max-w-2xl mx-auto text-xl"
          >
            We'd love to hear from you. Visit our store in Lohardaga or reach out for wholesale inquiries.
          </motion.p>
        </div>
      </div>

      <section className="py-24 bg-sand-50 dark:bg-stone-900 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-extrabold text-stone-900 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-full flex items-center justify-center text-terracotta-800 dark:text-ochre-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">Our Location</h3>
                    <p className="mt-2 text-stone-600 dark:text-stone-400 leading-relaxed">
                      Adivasi Hathkargha<br />
                      Babamath, Court Road, Maina Bagicha<br />
                      Lohardaga, Jharkhand 835302
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-full flex items-center justify-center text-terracotta-800 dark:text-ochre-400">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">Phone</h3>
                    <p className="mt-2 text-stone-600 dark:text-stone-400">
                      <a href="tel:+919236863278" className="hover:text-terracotta-800 dark:hover:text-ochre-400 transition-colors font-medium">+91 92368 63278</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-full flex items-center justify-center text-terracotta-800 dark:text-ochre-400">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">Business Hours</h3>
                    <p className="mt-2 text-stone-600 dark:text-stone-400">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-800 p-8 rounded-3xl shadow-lg border border-stone-100 dark:border-stone-700">
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-6">Send us a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 transition-colors" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 transition-colors" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 transition-colors" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 px-6 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 dark:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white font-bold transition-colors shadow-md">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] bg-stone-200 dark:bg-stone-800 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-stone-700"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.076828551123!2d84.6787!3d23.4333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI2JzAwLjAiTiA4NMKwNDAnNDMuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location of Adivasi Hathkargha"
                className="filter dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
