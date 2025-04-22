
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Dresden Coin?",
    answer: "Dresden Coin is a next-generation cryptocurrency designed to provide secure, fast, and accessible financial transactions in the digital economy. It combines cutting-edge blockchain technology with user-friendly features to make decentralized finance accessible to everyone."
  },
  {
    question: "How is Dresden Coin different from other cryptocurrencies?",
    answer: "Dresden Coin differentiates itself through its focus on security, zero transaction fees, and user experience. Our proprietary consensus mechanism ensures fast transactions while maintaining high security standards, and our ecosystem is designed to be accessible to both crypto experts and newcomers alike."
  },
  {
    question: "How do I buy Dresden Coin?",
    answer: "You can acquire Dresden Coin through partner exchanges, our official website, or directly through the Dresden Coin wallet app. We support various payment methods including credit/debit cards, bank transfers, and other cryptocurrencies."
  },
  {
    question: "Is Dresden Coin secure?",
    answer: "Absolutely. Dresden Coin employs industry-leading security protocols including advanced encryption, multi-signature wallets, and regular security audits by independent third parties. Our technology has been built from the ground up with security as a primary focus."
  },
  {
    question: "Can I earn rewards with Dresden Coin?",
    answer: "Yes, Dresden Coin offers multiple ways to earn rewards including staking, participation in governance, and various DeFi opportunities within our ecosystem. These rewards are designed to encourage long-term holding and active participation in the network."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about Dresden Coin. Can't find the answer you're looking for? Contact our support team.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 font-medium text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
