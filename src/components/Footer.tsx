
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-white py-6">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-light flex items-center justify-center">
            <span className="text-blue-dark font-bold">D</span>
          </div>
          <span className="font-bold text-xl">Dresden Coin</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-silver hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-silver hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-silver hover:text-white transition-colors">Telegram</a>
        </div>
        
        <p className="text-silver-dark text-sm">© 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
