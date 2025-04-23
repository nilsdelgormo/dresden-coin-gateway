
import React from 'react';
import { Button } from "@/components/ui/button";

// Dresden Coin Bild statt Banner
const DRESDEN_COIN_IMAGE = "/lovable-uploads/22a2e6e6-25e6-4920-bc01-f028d884c843.png";

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

        {/* Dresden Coin mit Hover-Scale-Effekt */}
        <div className="mt-16 relative w-full max-w-3xl flex flex-col items-center">
          <div className="w-full h-72 md:h-96 rounded-xl bg-silver-light border border-silver-dark shadow-none flex items-center justify-center overflow-hidden">
            <img
              src={DRESDEN_COIN_IMAGE}
              alt="Dresden Coin"
              className="transition-transform duration-300 w-[180px] h-[180px] md:w-[260px] md:h-[260px] object-contain rounded-full bg-white border-4 border-silver shadow-lg hover:scale-110"
              style={{ boxShadow: "0 8px 40px 0 rgba(26,24,52,.14)" }}
            />
          </div>
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

        {/* BUY Banner */}
        <div className="mt-32 w-full flex justify-center">
          <div
            className="relative flex items-center justify-between rounded-2xl shadow-xl px-7 py-6 md:px-16 md:py-10 max-w-3xl w-full gap-8 bg-gradient-to-r from-[#ea384c] to-[#F97316] overflow-hidden"
            style={{ minHeight: 140 }}
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="uppercase font-bold text-xs md:text-sm text-white/70 tracking-wider">
                Jetzt investieren
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm">
                BUY DRESDEN COIN
              </div>
              <a
                href="#"
                className="inline-block mt-4 px-8 py-3 text-lg font-semibold rounded-xl shadow-md bg-white text-[#ea384c] hover:bg-slate-100 transition"
                style={{ letterSpacing: 1 }}
              >
                Kaufen
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <img
                src={DRESDEN_COIN_IMAGE}
                alt="Dresden Coin"
                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-full bg-white border-4 border-silver shadow-xl transition-transform hover:scale-110"
                style={{ boxShadow: "0 8px 40px 0 rgba(26,24,52,.15)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
