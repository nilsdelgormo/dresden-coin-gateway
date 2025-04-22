
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-dresden-navy">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join the Dresden Coin Revolution?</h2>
          <p className="text-slate-300 mb-8">
            Be part of the next generation of decentralized finance. Get early access and stay updated on our latest developments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-dresden-gold hover:bg-amber-500 text-dresden-navy text-lg" size="lg">
              Get Started Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg" size="lg">
              Join Our Community
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-dresden-gold text-3xl md:text-4xl font-bold">250K+</p>
              <p className="text-slate-300">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-dresden-gold text-3xl md:text-4xl font-bold">$2.3B</p>
              <p className="text-slate-300">Market Cap</p>
            </div>
            <div className="text-center">
              <p className="text-dresden-gold text-3xl md:text-4xl font-bold">35+</p>
              <p className="text-slate-300">Partner Exchanges</p>
            </div>
            <div className="text-center">
              <p className="text-dresden-gold text-3xl md:text-4xl font-bold">100M+</p>
              <p className="text-slate-300">Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
