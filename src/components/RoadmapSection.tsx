
import React from 'react';

const milestones = [
  {
    quarter: "Q2 2025",
    title: "Genesis Launch",
    description: "Initial token release and launch of core infrastructure.",
    completed: true
  },
  {
    quarter: "Q3 2025",
    title: "Ecosystem Expansion",
    description: "Platform partnerships and integration with key DeFi protocols.",
    completed: false
  },
  {
    quarter: "Q4 2025",
    title: "Governance Implementation",
    description: "Launch of DAO-based governance for community decision making.",
    completed: false
  },
  {
    quarter: "Q1 2026",
    title: "Global Payment Network",
    description: "Expanded merchant adoption and international payment solutions.",
    completed: false
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-[#F8F9FD] to-[#ffe29f30]">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dresden-navy">Dresden Coin Roadmap</h2>
          <p className="text-slate-700">Our journey to revolutionize decentralized finance, one milestone at a time.</p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`md:flex items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${milestone.completed ? 'bg-green-100 text-green-700' : 'bg-dresden-gold/10 text-dresden-gold'}`}>
                      {milestone.quarter}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-dresden-navy">{milestone.title}</h3>
                    <p className="text-slate-700">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className={`w-5 h-5 rounded-full border-4 ${milestone.completed ? 'bg-green-500 border-green-200' : 'bg-dresden-gold border-amber-200'}`}></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

