'use client';

import type { BasicInfo } from '../lib/database';
import Image from 'next/image';

interface AboutUsProps {
  basicInfo: Partial<BasicInfo>;
}

export default function AboutUs({ basicInfo }: AboutUsProps) {
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const stats = [
    { number: '10K+', label: 'Verified Providers' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '500+', label: 'Cities Covered' },
    { number: '4.8★', label: 'Average Rating' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About {siteName}
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are Brazil's leading service directory platform, connecting customers with trusted local service providers across the country.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Your Trusted Partner in Finding Quality Services
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At {siteName}, we understand the importance of finding reliable and professional service providers. 
                Our platform makes it easy for you to discover, compare, and connect with verified businesses 
                in your area.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're looking for home repairs, professional services, restaurants, or entertainment venues, 
                we've got you covered. Our comprehensive directory features thousands of verified listings with 
                real customer reviews to help you make informed decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black font-medium">100% Verified Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black font-medium">Real Customer Reviews</span>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${secondaryColor} 100%)`,
                  }}
                >
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🇧🇷</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Serving Brazil</h4>
                    <p className="text-white/90">Connecting communities across the nation</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

