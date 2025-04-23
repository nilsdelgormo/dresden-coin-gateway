
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-slate-100">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dresden-gold to-amber-400 flex items-center justify-center">
            <span className="text-dresden-navy font-bold">D</span>
          </div>
          <span className="font-bold text-xl">Dresden Coin</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-600 hover:text-dresden-navy transition-colors">Features</a>
          <a href="#roadmap" className="text-slate-600 hover:text-dresden-navy transition-colors">Roadmap</a>
          <a href="#faq" className="text-slate-600 hover:text-dresden-navy transition-colors">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-bold px-7 py-2 rounded-xl shadow-lg text-lg hover:scale-105 transition-transform"
            style={{
              background:
                'linear-gradient(90deg,#ea384c 0%,#F97316 100%)',
              color: '#fff'
            }}
          >
            BUY
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

