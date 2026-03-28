import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-white transition-colors duration-300 tribal-border-top">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-2xl font-serif font-bold text-white tracking-tight mb-6 block">
              Adivasi <span className="text-terracotta-500">Hathkargha</span>
            </span>
            <p className="text-stone-400 dark:text-stone-400 leading-relaxed">
              Your trusted destination for authentic Jharkhand traditional dresses, tribal sarees, and Adivasi wear in Lohardaga.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-stone-400 hover:text-terracotta-400 dark:text-stone-400 dark:hover:text-terracotta-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-400 hover:text-terracotta-400 dark:text-stone-400 dark:hover:text-terracotta-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-terracotta-400 dark:text-stone-400 dark:hover:text-terracotta-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-terracotta-400 dark:text-stone-400 dark:hover:text-terracotta-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-stone-400 dark:text-stone-400">
                <MapPin className="h-5 w-5 mr-3 text-terracotta-500 flex-shrink-0 mt-0.5" />
                <span>Babamath, Court Road, Maina Bagicha, Lohardaga, Jharkhand 835302</span>
              </li>
              <li className="flex items-center text-stone-400 dark:text-stone-400">
                <Phone className="h-5 w-5 mr-3 text-terracotta-500 flex-shrink-0" />
                <a href="tel:+919236863278" className="hover:text-terracotta-400 transition-colors">+91 92368 63278</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 dark:border-stone-800 mt-12 pt-8 text-center text-stone-500 dark:text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Adivasi Hathkargha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
