
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RoadmapSection from '@/components/RoadmapSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dresden-pattern">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
        <div className="my-12 flex justify-center">
          <a
            href="#"
            className="font-bold text-xl px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            style={{
              background: 'linear-gradient(90deg,#ea384c 0%,#F97316 100%)',
              color: '#fff'
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
