
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Create Your Wallet",
    description: "Set up your Dresden Coin wallet in minutes, with no technical expertise required."
  },
  {
    number: "02",
    title: "Secure Your Assets",
    description: "Backup your wallet with our industry-leading security features and recovery options."
  },
  {
    number: "03",
    title: "Start Transacting",
    description: "Send, receive, and store Dresden Coin with ease through our intuitive interface."
  },
  {
    number: "04",
    title: "Grow Your Portfolio",
    description: "Access DeFi opportunities and grow your assets within the Dresden ecosystem."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Dresden Coin Works</h2>
          <p className="text-slate-600">Getting started is simple. Follow these steps to begin your journey with Dresden Coin.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-dresden-gold/10 flex items-center justify-center text-dresden-gold font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="ml-6 my-4 border-l-2 border-dashed border-slate-200 h-8" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-dresden-navy to-dresden-dark rounded-xl p-1">
            <div className="h-full w-full rounded-lg bg-white/5 backdrop-blur p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-dresden-gold">Balance</p>
                    <h3 className="text-white text-2xl font-bold">1,245.82 DC</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-dresden-gold to-amber-400 flex items-center justify-center">
                    <span className="text-dresden-navy font-bold">D</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-slate-300 text-sm">Transaction</p>
                        <p className="text-white">Received 100 DC</p>
                      </div>
                      <span className="text-green-400">+100 DC</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-slate-300 text-sm">Transaction</p>
                        <p className="text-white">Sent 25.5 DC</p>
                      </div>
                      <span className="text-red-400">-25.5 DC</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-dresden-gold hover:bg-amber-500 text-dresden-navy font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center">
                  <span>Send Dresden Coin</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
