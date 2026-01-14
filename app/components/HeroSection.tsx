'use client';

import type { BasicInfo } from '../lib/database';
import Image from 'next/image';

interface HeroSectionProps {
  basicInfo: Partial<BasicInfo>;
}

export default function HeroSection({ basicInfo }: HeroSectionProps) {
  const primaryColor = basicInfo.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo.secondaryColor || '#F59E0B';
  const siteName = basicInfo.siteName || 'ServiceFinder Brazil';
  const tagline = basicInfo.tagline || 'Find Trusted Local Service Providers Near You';
  const bannerImage = basicInfo.bannerImage || '';
  const defaultCity = basicInfo.defaultCity || 'Belo Horizonte';
  const defaultState = basicInfo.defaultState || 'Minas Gerais';
  const defaultService = basicInfo.defaultService || 'Air Conditioner Repair';

  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden py-8 md:py-0 pt-[72px] md:pt-[72px]"
      style={{ 
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${primaryColor}aa 100%)`,
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Banner Image with Overlay */}
      {bannerImage && (
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={basicInfo.bannerAlt || 'Banner'}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
      )}

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-4 relative z-10 py-4 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight px-2 md:px-0">
            <span className="block text-white drop-shadow-2xl animate-slide-up mb-2">
              ServiceFinder
            </span>
            <span className="block text-white drop-shadow-2xl animate-slide-up mb-4 md:mb-6">
              Brazil
            </span>
            <span 
              className="block text-white animate-slide-up"
              style={{ 
                color: secondaryColor,
                animationDelay: '0.2s',
                animationFillMode: 'both',
              }}
            >
              {tagline}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
            Connect with verified service providers in {defaultCity}, {defaultState}. 
            Get quality services delivered to your doorstep.
          </p>

          {/* Search Bar - Glass Morphism Design */}
          <div className="max-w-3xl mx-auto mb-6 md:mb-8 px-2 md:px-0">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 border border-white/20">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder={`Search for ${defaultService} in ${defaultCity}...`}
                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm md:text-base"
                    style={{ 
                      '--tw-ring-color': secondaryColor,
                    } as React.CSSProperties & { '--tw-ring-color'?: string }}
                  />
                </div>
                <div className="relative">
                  <select 
                    className="w-full md:w-auto px-4 py-3 md:py-4 rounded-xl text-black bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 appearance-none pr-10 transition-all text-sm md:text-base"
                    style={{ 
                      '--tw-ring-color': secondaryColor,
                    } as React.CSSProperties & { '--tw-ring-color'?: string }}
                  >
                    <option>{defaultCity}, {defaultState}</option>
                    <option>São Paulo, SP</option>
                    <option>Rio de Janeiro, RJ</option>
                    <option>Brasília, DF</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button 
                  className="w-full md:w-auto px-8 py-3 md:py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
                  style={{ 
                    backgroundColor: secondaryColor,
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 px-2 md:px-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Verified Providers</div>
            </div>
            <div className="w-px h-10 md:h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">50K+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Happy Customers</div>
            </div>
            <div className="w-px h-10 md:h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">4.8★</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

