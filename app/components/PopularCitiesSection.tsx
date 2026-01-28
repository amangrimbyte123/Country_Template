'use client';

import type { BasicInfo, City } from '../lib/database';
import Image from 'next/image';
import Link from 'next/link';

interface PopularCitiesSectionProps {
  basicInfo: Partial<BasicInfo>;
  cities: City[];
}

export default function PopularCitiesSection({ basicInfo, cities }: PopularCitiesSectionProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';

  if (!cities || cities.length === 0) {
    return null;
  }

  // Filter cities with valid images and limit to 6
  const citiesWithImages = cities
    .filter(city => {
      // Check if city has a valid image URL
      const imageUrl = city.image;
      return imageUrl && 
             typeof imageUrl === 'string' && 
             imageUrl.trim() !== '' && 
             (imageUrl.startsWith('http') || imageUrl.startsWith('/'));
    })
    .slice(0, 6);

  if (citiesWithImages.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-10 md:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border mb-4" style={{ borderColor: `${primaryColor}20` }}>
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: secondaryColor }}
              ></div>
              <span className="text-xs md:text-sm font-semibold" style={{ color: primaryColor }}>
                Explore Locations
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 leading-tight">
              Cidades{' '}
              <span className="block" style={{ color: primaryColor }}>
                Populares
              </span>
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Descubra prestadores de serviços confiáveis nestas cidades populares em {defaultState}
            </p>
          </div>

          {/* Enhanced Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {citiesWithImages.map((city, index) => (
              <Link
                key={city.$id || city.slug}
                href={`/cities/${city.slug}`}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden h-full flex flex-col relative">
                  {/* Gradient Overlay on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
                    }}
                  ></div>

                  {/* City Image */}
                  <div className="relative h-52 md:h-56 w-full overflow-hidden">
                    {city.image ? (
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}15 0%, ${secondaryColor}15 100%)`
                        }}
                      >
                        <svg 
                          className="w-16 h-16"
                          style={{ color: primaryColor }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* City Name Badge - Enhanced */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div 
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold shadow-xl backdrop-blur-sm border border-white/20"
                        style={{ 
                          background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}dd 100%)`
                        }}
                      >
                        <svg 
                          className="w-4 h-4"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{city.name}</span>
                      </div>
                    </div>

                    {/* Corner Badge */}
                    <div 
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 bg-white/90 backdrop-blur-sm"
                    >
                      <svg 
                        className="w-4 h-4"
                        style={{ color: primaryColor }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* City Content - Enhanced */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col relative z-10">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1 text-sm md:text-base leading-relaxed">
                      {city.description || city.introText}
                    </p>

                    {/* Read More Link - Enhanced */}
                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                      <span 
                        className="text-sm font-semibold group-hover:underline"
                        style={{ color: primaryColor }}
                      >
                        Explorar Serviços
                      </span>
                      <div 
                        className="w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        style={{ 
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor 
                        }}
                      >
                        <svg 
                          className="w-4 h-4"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Animated Bottom Border */}
                  <div className="relative h-1 overflow-hidden">
                    <div 
                      className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500"
                      style={{ 
                        background: `linear-gradient(90deg, ${secondaryColor} 0%, ${primaryColor} 100%)`
                      }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Enhanced View All Button */}
          <div className="text-center mt-10 md:mt-12">
            <Link
              href="/cities"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}dd 100%)`
              }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 group-hover:animate-shine" style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              }}></div>
              
              <span className="relative z-10">Ver Todas as Cidades</span>
              <svg 
                className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

