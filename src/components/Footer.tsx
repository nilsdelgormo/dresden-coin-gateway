
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dresden-navy text-white py-8">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-dresden-gold flex items-center justify-center">
            <span className="text-dresden-navy font-bold">D</span>
          </div>
          <span className="font-bold text-xl">Dresden Coin</span>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-slate-300 hover:text-white">Twitter</a>
          <a href="#" className="text-slate-300 hover:text-white">Discord</a>
          <a href="#" className="text-slate-300 hover:text-white">Telegram</a>
        </div>
        
        <p className="text-slate-400 text-sm">© 2025 Dresden Coin</p>
      </div>
    </footer>
  );
};

export default Footer;

