
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RoadmapSection from '@/components/RoadmapSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ffe29f] via-[#ff719a30] to-[#FFB800]/5">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        {/* BUY button after features */}
        <div className="my-12 flex justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-vivid-purple to-bright-orange text-white font-bold text-xl px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            style={{
              background:
                'linear-gradient(90deg,#8B5CF6 0%,#F97316 100%)'
            }}
          >
            BUY
          </a>
        </div>
        <RoadmapSection />
        {/* BUY button after roadmap */}
        <div className="my-12 flex justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-vivid-purple to-bright-orange text-white font-bold text-xl px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            style={{
              background:
                'linear-gradient(90deg,#D946EF 0%,#0EA5E9 100%)'
            }}
          >
            BUY
          </a>
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

