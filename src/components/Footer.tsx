
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dresden-navy text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dresden-gold to-amber-400 flex items-center justify-center">
                <span className="text-dresden-navy font-bold">D</span>
              </div>
              <span className="font-bold text-xl">Dresden Coin</span>
            </div>
            <p className="text-slate-300">
              The next generation of decentralized finance, built for everyone.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-dresden-gold">Product</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-dresden-gold">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Github</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4 text-dresden-gold">Community</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Medium</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-slate-400">© 2025 Dresden Coin. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
