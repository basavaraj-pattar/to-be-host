import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

const ROTATING_REGIONS = [
  'Hubballi-Dharwad',
  'North Karnataka'
];

export default function Hero({ onOpenJoinModal }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_REGIONS.length);
    }, 2800); // 2.8s display interval for crisp, energetic pacing

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Top subtle editorial kicker */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
          <span className="text-neutral-900 font-bold">A Creative Movement</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>Hubballi-Dharwad</span>
          <span aria-hidden="true">·</span>
          <span>North Karnataka</span>
        </div>
      </div>

      {/* Main Central Minimalist Headline & Tagline */}
      <div className="max-w-5xl mx-auto w-full my-auto text-center flex flex-col items-center justify-center">
        
        {/* Headline container */}
        <h1 className="font-gotham text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-950 tracking-tight leading-[1.08] select-none text-balance max-w-4xl">
          <span className="inline-block">Make</span>{' '}
          
          {/* Vertical word-replacement / rolling text slot */}
          <span className="inline-block relative overflow-hidden align-top h-[1.12em] px-2 sm:px-3 text-[#FF4D00]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={ROTATING_REGIONS[index]}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{
                  duration: 0.52,
                  ease: [0.16, 1, 0.3, 1] // smooth energetic spring curve
                }}
                className="inline-block whitespace-nowrap"
              >
                {ROTATING_REGIONS[index]}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          
          <span className="inline-block">Great Again</span>
        </h1>

        {/* Tagline directly below headline */}
        <p className="mt-8 text-lg sm:text-2xl font-medium text-neutral-600 tracking-tight max-w-xl text-balance">
          Let’s Network to Build Community
        </p>

        {/* Minimalist Action Cluster with lots of whitespace */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white bg-[#FF4D00] hover:bg-neutral-950 transition-all duration-200 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#FF4D00] focus:ring-offset-2 group"
          >
            <span>Join the Movement</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Quiet Subtitle Descriptor */}
        <div className="mt-12 flex items-center gap-3 text-xs sm:text-sm text-neutral-500 font-medium">
          <Sparkles className="w-4 h-4 text-[#FF4D00]" />
          <span>Local roots. Global ambition. Creator-driven impact.</span>
        </div>

      </div>

      {/* Bottom bar of Hero */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-neutral-100 flex items-center justify-end text-xs text-neutral-400">
        <a
          href="#about"
          className="flex items-center gap-1.5 text-neutral-600 hover:text-[#FF4D00] transition-colors font-medium"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
