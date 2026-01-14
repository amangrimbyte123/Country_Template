'use client';

import { useState } from 'react';
import type { BasicInfo } from '../lib/database';

interface FAQProps {
  basicInfo: Partial<BasicInfo>;
}

export default function FAQ({ basicInfo }: FAQProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I search for services on the platform?',
      answer: 'Simply use the search bar at the top of the page. Enter the service you\'re looking for, select your location, and click search. You can also browse by categories or use our advanced filters to narrow down your results.',
    },
    {
      question: 'Are all businesses verified?',
      answer: 'Yes! Every business listed on our platform undergoes a comprehensive verification process. We verify business licenses, contact information, and authenticity to ensure you only see legitimate and trustworthy service providers.',
    },
    {
      question: 'How can I contact a service provider?',
      answer: 'Once you find a service provider you\'re interested in, click on their listing to view their full profile. You\'ll find contact information including phone number, email, and sometimes a direct messaging option through our platform.',
    },
    {
      question: 'Can I leave a review after using a service?',
      answer: 'Absolutely! We encourage all users to share their experiences. After using a service, you can log in to your account and leave a detailed review with ratings. Your feedback helps other users make informed decisions.',
    },
    {
      question: 'Is the platform free to use?',
      answer: 'Yes, searching and browsing our directory is completely free for users. Service providers may have their own pricing for the services they offer, but using our platform to find them costs nothing.',
    },
    {
      question: 'How do I report a problem with a listing?',
      answer: 'If you encounter any issues with a listing, you can report it directly from the listing page using the "Report" button. Our team reviews all reports and takes appropriate action to maintain the quality of our directory.',
    },
    {
      question: 'Can businesses add themselves to the directory?',
      answer: 'Yes! We welcome businesses to join our platform. Service providers can create a profile, get verified, and start receiving inquiries from potential customers. Visit our business registration page to get started.',
    },
    {
      question: 'Do you cover all cities in Brazil?',
      answer: 'We\'re continuously expanding our coverage. Currently, we have listings in over 500 cities across Brazil, with new locations being added regularly. Use the location filter to see if your area is covered.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-black pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300`}
                    style={{ 
                      color: primaryColor,
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: secondaryColor }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

