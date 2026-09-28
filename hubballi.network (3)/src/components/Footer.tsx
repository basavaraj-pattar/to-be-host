import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-neutral-800">
          
          {/* Brand & Tagline */}
          <div className="space-y-4 max-w-xl">
            <a
              href="#"
              className="inline-block font-gotham text-3xl sm:text-4xl text-white tracking-tight hover:text-[#FF4D00] transition-colors"
            >
              Hubballi<span className="text-[#FF4D00]">.</span>Network
            </a>

            <p className="text-xl sm:text-2xl font-normal text-neutral-300 tracking-tight">
              Let’s Network to Build Community
            </p>

            <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
              Creator-driven storytelling and community platform across Hubballi-Dharwad and North Karnataka. Showcasing the people, places, ideas, and businesses driving our future.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col items-start md:items-end gap-6">
            
            {/* Social Icons row */}
            <div className="flex items-center gap-6 text-sm font-semibold text-neutral-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D00] transition-colors"
              >
                Instagram
              </a>
              <span className="text-neutral-700" aria-hidden="true">&middot;</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D00] transition-colors"
              >
                Facebook
              </a>
              <span className="text-neutral-700" aria-hidden="true">&middot;</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D00] transition-colors"
              >
                YouTube
              </a>
              <span className="text-neutral-700" aria-hidden="true">&middot;</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D00] transition-colors"
              >
                X
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-neutral-400 hover:text-white transition-colors focus:outline-hidden group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF4D00] transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Hubballi.Network. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span>Made with pride in Hubballi-Dharwad &middot; North Karnataka</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
