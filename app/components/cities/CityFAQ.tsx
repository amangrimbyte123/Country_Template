'use client';

import { useState } from 'react';
import type { City } from '@/app/lib/database';

interface CityFAQProps {
  city: City;
  primaryColor: string;
}

export default function CityFAQ({ city, primaryColor }: CityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `What services are available in ${city.name}?`,
      answer: `We offer a wide range of home services in ${city.name} including AC repair, HVAC installation, appliance repair, plumbing, electrical work, and more. Browse our services page to see the complete list.`,
    },
    {
      question: `How do I find a service provider in ${city.name}?`,
      answer: `Simply browse our services, select the service you need, and you'll see a list of verified providers in ${city.name}. You can compare ratings, reviews, and contact them directly.`,
    },
    {
      question: `Are all service providers verified?`,
      answer: `Yes, all service providers listed on our platform are verified, licensed, and insured. We ensure quality and reliability for our customers.`,
    },
    {
      question: `What areas in ${city.name} do you cover?`,
      answer: `We cover all areas within ${city.name} and surrounding regions. Most providers offer service throughout the entire city and metropolitan area.`,
    },
    {
      question: `How quickly can I get service in ${city.name}?`,
      answer: `Response times vary by provider, but most offer same-day or next-day service. You can contact providers directly to discuss availability and scheduling.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Frequently Asked Questions About {city.name}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-black pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: primaryColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

