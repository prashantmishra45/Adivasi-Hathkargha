import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 tribal-border-bottom',
        isScrolled 
          ? 'bg-sand-50/95 dark:bg-stone-950/95 shadow-md py-2 backdrop-blur-md' 
          : 'bg-sand-50/90 dark:bg-stone-950/90 py-4 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-terracotta-700 dark:text-ochre-500 tracking-tight">
                Adivasi <span className="text-stone-900 dark:text-sand-50">Hathkargha</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-terracotta-600 dark:hover:text-ochre-400',
                    location.pathname === link.path
                      ? 'text-terracotta-700 bg-terracotta-50 dark:bg-stone-800 dark:text-ochre-400'
                      : 'text-stone-700 dark:text-stone-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-stone-600 hover:bg-stone-200 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href="tel:+919236863278"
                className="flex items-center gap-2 rounded-full bg-terracotta-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-terracotta-700 hover:shadow-lg dark:bg-terracotta-600 dark:hover:bg-terracotta-500"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-stone-600 hover:bg-stone-200 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-stone-200 dark:text-stone-300 dark:hover:bg-stone-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-t dark:border-stone-800 shadow-lg absolute w-full">
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-terracotta-700 bg-terracotta-50 dark:bg-stone-800 dark:text-ochre-400'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
