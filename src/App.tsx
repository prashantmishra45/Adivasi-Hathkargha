import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileCallButton } from './components/MobileCallButton';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="adivasi-theme">
      <HelmetProvider>
        <Router>
          <div className="flex min-h-screen flex-col font-sans transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-16 md:pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
            <MobileCallButton />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
