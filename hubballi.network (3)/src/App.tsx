/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import CursorBlob from './components/CursorBlob';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PitchModal from './components/PitchModal';
import JoinModal from './components/JoinModal';

export default function App() {
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-950 font-body relative selection:bg-[#FF4D00] selection:text-white">
      {/* Site-Wide Mouse Tracking: Active cursor follower at root level with soft ambient orange-red radial glow & silky inertia easing */}
      <CursorBlob />

      {/* Top Navigation Bar */}
      <Header
        onOpenJoinModal={() => setJoinModalOpen(true)}
        onOpenPitchModal={() => setPitchModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* Hero Section with Rolling Headline Word-Replacement & Tagline */}
        <Hero
          onOpenJoinModal={() => setJoinModalOpen(true)}
        />

        {/* About Hubballi.Network Editorial Section */}
        <About
          onOpenPitchModal={() => setPitchModalOpen(true)}
          onOpenJoinModal={() => setJoinModalOpen(true)}
        />

        {/* Social Media Section: Follow the Network */}
        <SocialSection />

        {/* Contact & Brand Collaboration Section */}
        <ContactSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Story Pitch Modal */}
      <PitchModal
        isOpen={pitchModalOpen}
        onClose={() => setPitchModalOpen(false)}
      />

      {/* Join the Network Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}
