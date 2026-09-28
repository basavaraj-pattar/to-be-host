import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenPitchModal: () => void;
  onOpenJoinModal: () => void;
}

export default function About({ onOpenPitchModal, onOpenJoinModal }: AboutProps) {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Large Oversized "ABOUT" Anchor alongside Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Oversized Editorial Monolith & Accent Graphic */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Quiet Section Kicker */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#FF4D00]" />
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF4D00]">The Manifesto</span>
              </div>
                
                <h2 className="font-gotham text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-tight -mt-4">
                  About Hubballi<span className="text-[#FF4D00]">.</span>Network
                </h2>
              </div>

              {/* Flame Orange Accent Graphic Line & Geo Marker */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-0.5 w-24 bg-[#FF4D00]" />
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Hubballi-Dharwad &middot; North Karnataka
                </span>
              </div>
            </div>

            {/* Strategic Highlight Callouts: People. Places. Ideas. Business. */}
            <div className="mt-14 pt-8 border-t border-neutral-200">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-4">
                Core Discovery Vectors
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div className="group border-l-2 border-neutral-200 hover:border-[#FF4D00] pl-3 py-1 transition-colors">
                  <span className="font-gotham text-xl text-neutral-900 group-hover:text-[#FF4D00] transition-colors block">
                    People.
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">Founders, makers & artists</span>
                </div>
                <div className="group border-l-2 border-neutral-200 hover:border-[#FF4D00] pl-3 py-1 transition-colors">
                  <span className="font-gotham text-xl text-neutral-900 group-hover:text-[#FF4D00] transition-colors block">
                    Places.
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">Heritage, hubs & streets</span>
                </div>
                <div className="group border-l-2 border-neutral-200 hover:border-[#FF4D00] pl-3 py-1 transition-colors">
                  <span className="font-gotham text-xl text-neutral-900 group-hover:text-[#FF4D00] transition-colors block">
                    Ideas.
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">Culture, vision & reform</span>
                </div>
                <div className="group border-l-2 border-neutral-200 hover:border-[#FF4D00] pl-3 py-1 transition-colors">
                  <span className="font-gotham text-xl text-neutral-900 group-hover:text-[#FF4D00] transition-colors block">
                    Business.
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">Enterprises & commerce</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Body Copy & Industry Focus */}
          <div className="lg:col-span-7 space-y-8 text-neutral-800">
            
            {/* Lead paragraph */}
            <p className="text-xl sm:text-2xl font-medium text-neutral-900 leading-relaxed text-balance">
              We are a <strong className="font-bold text-neutral-950 underline decoration-[#FF4D00] decoration-2 underline-offset-4">creator-driven media and community platform</strong> working across Hubballi-Dharwad and North Karnataka.
            </p>

            {/* Core purpose paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Our work is centred around discovering and showcasing the <span className="font-bold text-neutral-900">people, places, ideas and business</span> driving social and economic progress in the region.
            </p>

            {/* Editorial Perspective / Cultural Stance */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-neutral-600">
              <div>
                <h3 className="font-gotham text-base text-neutral-950 mb-2">01. Rooted in North Karnataka</h3>
                <p className="leading-relaxed">
                  We don’t view the region through a metropolitan prism. We live here, breathe the dialect, and understand the nuances of local enterprise.
                </p>
              </div>
              <div>
                <h3 className="font-gotham text-base text-neutral-950 mb-2">02. Creator-First Engine</h3>
                <p className="leading-relaxed">
                  Instead of programmatic billboards, we empower local filmmakers, writers, and podcasters to build authentic narrative equity.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-neutral-950 hover:bg-[#FF4D00] transition-colors focus:outline-hidden"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPitchModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold text-neutral-900 hover:text-[#FF4D00] border border-neutral-300 hover:border-[#FF4D00] transition-colors focus:outline-hidden"
              >
                <span>Pitch a Regional Story</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
