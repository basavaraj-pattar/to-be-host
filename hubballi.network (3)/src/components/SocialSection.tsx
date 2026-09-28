import { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface SocialLink {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

// Minimal, recognizable SVG icons for Instagram, Facebook, YouTube, X
const SOCIALS: SocialLink[] = [
  {
    name: 'Instagram',
    handle: '@hubballi.network',
    url: 'https://instagram.com',
    description: 'Daily visual stories, reels & creator dispatches',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    handle: 'Hubballi Network Official',
    url: 'https://facebook.com',
    description: 'Community townhalls, regional events & discussions',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    handle: 'Hubballi Network Cinema',
    url: 'https://youtube.com',
    description: 'Documentaries, founder interviews & cultural cinema',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'X',
    handle: '@HubballiNet',
    url: 'https://x.com',
    description: 'Live news, tech announcements & ecosystem updates',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
];

export default function SocialSection() {
  const [waJoined, setWaJoined] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF4D00]">
              Stay Connected
            </span>
          </div>

          <h2 className="font-gotham text-3xl sm:text-5xl text-neutral-950 tracking-tight">
            Follow the Network
          </h2>

          <p className="mt-4 text-base text-neutral-600">
            Join the digital collective across platforms. Real stories, zero noise.
          </p>
        </div>

        {/* 4 Modern Social Cards with Smooth Minimalist to Flame Orange Hover Transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-8 border border-neutral-200 bg-white hover:bg-[#FF4D00] hover:border-[#FF4D00] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-200 shadow-2xs hover:shadow-xl focus:outline-hidden"
              >
                <div>
                  {/* Icon & Arrow */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 text-neutral-900 group-hover:bg-white group-hover:text-[#FF4D00] transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  {/* Name & Handle */}
                  <h3 className="font-gotham text-xl text-neutral-950 group-hover:text-white transition-colors duration-200 mb-1">
                    {social.name}
                  </h3>

                  <div className="text-xs font-mono text-neutral-500 group-hover:text-white/90 transition-colors duration-200 mb-3">
                    {social.handle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 group-hover:text-white/80 transition-colors duration-200 leading-relaxed">
                    {social.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 group-hover:border-white/20 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-white transition-colors duration-200">
                  <span>Open Feed</span>
                  <span className="text-[#FF4D00] group-hover:text-white">&rarr;</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* WhatsApp Community Broadcast Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-gotham text-base sm:text-lg text-neutral-950">
                Join Hubballi.Network Community WhatsApp Broadcast
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Get curated weekly event alerts, creator meetup invites, and breaking regional stories directly. No spam.
              </p>
            </div>
          </div>

          <button
            onClick={() => setWaJoined(true)}
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-neutral-950 hover:bg-[#FF4D00] transition-colors shrink-0"
          >
            {waJoined ? '✓ Joined Broadcast' : 'Join WhatsApp Channel'}
          </button>
        </div>

      </div>
    </section>
  );
}
