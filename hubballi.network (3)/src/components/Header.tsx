import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenJoinModal: () => void;
  onOpenPitchModal: () => void;
}

export default function Header({ onOpenJoinModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-neutral-200/80 shadow-xs py-3.5' : 'py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-1.5 focus:outline-hidden"
            aria-label="Hubballi.Network Home"
          >
            <span className="font-gotham text-xl sm:text-2xl text-neutral-950 tracking-tight transition-colors group-hover:text-[#FF4D00]">
              Hubballi<span className="text-[#FF4D00]">.</span>Network
            </span>
          </a>

          {/* Zone 2: Navigation Links (single line, clean typographic styling) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-semibold text-neutral-700 tracking-tight"
          >
            <a
              href="#home"
              className="hover:text-[#FF4D00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] hover:after:w-full after:transition-all"
            >
              Home
            </a>
            <span className="text-neutral-300 select-none" aria-hidden="true">·</span>
            <a
              href="#about"
              className="hover:text-[#FF4D00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] hover:after:w-full after:transition-all"
            >
              About
            </a>
            <span className="text-neutral-300 select-none" aria-hidden="true">·</span>
            <a
              href="#contact"
              className="hover:text-[#FF4D00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF4D00] hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-extrabold text-white bg-neutral-950 hover:bg-[#FF4D00] rounded-none transition-colors duration-150 whitespace-nowrap group focus:outline-hidden focus:ring-2 focus:ring-[#FF4D00] focus:ring-offset-2"
            >
              <span>Join Network</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-900 hover:text-[#FF4D00] transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-base font-bold text-neutral-900">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF4D00] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF4D00] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF4D00] transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-extrabold text-white bg-[#FF4D00] hover:bg-neutral-950 transition-colors uppercase tracking-wider"
            >
              <span>Join Network</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
