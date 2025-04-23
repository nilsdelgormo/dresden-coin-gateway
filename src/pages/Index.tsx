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
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
