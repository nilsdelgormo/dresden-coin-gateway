import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 bg-dresden-pattern">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-dresden-gold/10 text-dresden-gold rounded-full font-medium text-sm">
            The Future of Decentralized Finance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-dresden-navy to-dresden-dark bg-clip-text text-transparent">
            Empowering Financial Freedom with Dresden Coin
          </h1>
          <p className="text-slate-600 text-xl mb-8 max-w-2xl mx-auto">
            A secure, transparent, and accessible cryptocurrency designed to revolutionize how we transact in the digital economy.
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
        
        <div className="mt-20 relative w-full max-w-3xl">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-dresden-navy to-dresden-dark p-1">
            <div className="w-full h-full rounded-md bg-gradient-to-br from-dresden-gold/20 to-dresden-gold/10 backdrop-blur flex items-center justify-center overflow-hidden">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-dresden-gold to-amber-400 flex items-center justify-center">
                <div className="text-dresden-navy font-bold text-5xl">DC</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-0 right-0 mx-auto bg-white rounded-lg shadow-lg p-4 max-w-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Current Price</p>
                <p className="font-bold text-xl">$42.67 <span className="text-green-500 text-sm">+5.8%</span></p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Market Cap</p>
                <p className="font-bold text-xl">$2.3B</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Volume (24h)</p>
                <p className="font-bold text-xl">$425M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
