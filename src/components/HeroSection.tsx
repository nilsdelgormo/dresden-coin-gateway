
import React from 'react';
import { Button } from "@/components/ui/button";

// Vertrauenswürdiges, ruhiges Bannerbild (Silhouette)
const HERO_BANNER =
  "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=900&q=80";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-24 md:pt-36 md:pb-36 bg-white border-b border-silver-light">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 bg-silver-light text-blue-dark rounded-full font-medium text-sm border border-silver-dark">
            Ihr Partner für digitales Vertrauen
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-dark tracking-tight">
            Empowering Financial Freedom with Dresden Coin
          </h1>
          <p className="text-navy text-xl mb-8 max-w-2xl mx-auto">
            Ein sicheres, transparentes und zugängliches Krypto-Ökosystem für Vertrauen in der digitalen Wirtschaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg" size="lg">
              Get Started
            </Button>
            <Button variant="outline" className="btn-secondary text-lg" size="lg">
              View Whitepaper
            </Button>
          </div>
        </div>

        {/* Großzügiger Bannerbereich mit Silhouette */}
        <div className="mt-16 relative w-full max-w-3xl flex flex-col items-center">
          <div className="w-full h-72 md:h-96 rounded-xl bg-silver-light border border-silver-dark shadow-none flex items-center justify-center overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Silhouetten-Banner"
              className="w-full h-full object-cover object-bottom grayscale"
            />
          </div>
          {/* Stat-Panel schlicht, silbrig */}
          <div className="absolute -bottom-10 left-0 right-0 mx-auto bg-white/95 border border-silver rounded-xl shadow-none p-6 max-w-xl backdrop-blur-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-silver-dark text-xs">Aktueller Preis</p>
                <p className="font-bold text-lg text-blue-dark">$42.67 <span className="text-green-600 text-xs">+5.8%</span></p>
              </div>
              <div>
                <p className="text-silver-dark text-xs">Marktkapitalisierung</p>
                <p className="font-bold text-lg text-blue-dark">$2.3B</p>
              </div>
              <div>
                <p className="text-silver-dark text-xs">Volumen (24h)</p>
                <p className="font-bold text-lg text-blue-dark">$425M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
