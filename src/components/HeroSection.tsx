
import React from 'react';
import { Button } from "@/components/ui/button";

// Hinweis: Silhouetten-Banner ist ein Platzhalter-Bild, ggf. ersetzen mit gewünschtem Bild.
const HERO_BANNER =
  "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=900&q=80";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium text-sm border border-blue-200">
            Die Zukunft des digitalen Vertrauens
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-900">
            Empowering Financial Freedom with Dresden Coin
          </h1>
          <p className="text-slate-600 text-xl mb-8 max-w-2xl mx-auto">
            Ein sicheres, transparentes und zugängliches Krypto-Ökosystem für Vertrauen in der digitalen Wirtschaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg shadow-sm" size="lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 text-lg" size="lg">
              View Whitepaper
            </Button>
          </div>
        </div>

        {/* Banner mit Silhouetten-Bild statt farbigem Kreis */}
        <div className="mt-16 relative w-full max-w-3xl flex flex-col items-center">
          <div className="w-full h-64 rounded-xl bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Silhouette Banner"
              className="w-full h-full object-cover object-center grayscale contrast-125"
            />
          </div>
          {/* Überlagerte Werte auf schlichtem, silbergrauem Panel */}
          <div className="absolute -bottom-7 left-0 right-0 mx-auto bg-white/90 border border-slate-200 rounded-xl shadow-lg p-4 max-w-lg backdrop-blur">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-xs">Aktueller Preis</p>
                <p className="font-bold text-lg text-blue-900">$42.67 <span className="text-green-600 text-xs">+5.8%</span></p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Marktkapitalisierung</p>
                <p className="font-bold text-lg text-blue-900">$2.3B</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Volumen (24h)</p>
                <p className="font-bold text-lg text-blue-900">$425M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
