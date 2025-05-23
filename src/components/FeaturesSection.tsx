
import React from 'react';
import { Circle, Shield, Wallet, Globe, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="text-blue w-6 h-6" />,
    title: "Advanced Security",
    description: "Industry-leading security protocols protect your assets and transactions at all times."
  },
  {
    icon: <Wallet className="text-blue w-6 h-6" />,
    title: "Self-Custody",
    description: "Full control of your assets with non-custodial solutions that put you in charge."
  },
  {
    icon: <Circle className="text-blue w-6 h-6" />,
    title: "Zero Fees",
    description: "Send and receive Dresden Coin without any hidden costs or transaction fees."
  },
  {
    icon: <Globe className="text-blue w-6 h-6" />,
    title: "Global Access",
    description: "Accessible worldwide, allowing borderless transactions for everyone."
  },
  {
    icon: <Lock className="text-blue w-6 h-6" />,
    title: "Privacy First",
    description: "Your financial data remains private and secure with our encryption technology."
  },
  {
    icon: <Zap className="text-blue w-6 h-6" />,
    title: "Lightning Fast",
    description: "Near-instantaneous transactions, regardless of geographic location."
  }
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 bg-silver-light"
    >
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-dark">Why Choose Dresden Coin?</h2>
          <p className="text-navy text-lg">Designed with security, speed, and user experience in mind, Dresden Coin offers a comprehensive suite of features.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="rounded-full bg-blue-light w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-dark">{feature.title}</h3>
              <p className="text-navy">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
