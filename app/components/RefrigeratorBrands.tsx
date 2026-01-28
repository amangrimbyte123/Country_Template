'use client';

import { useState } from 'react';
import type { BasicInfo } from '../lib/database';

interface RefrigeratorBrandsProps {
  basicInfo: Partial<BasicInfo>;
}

export default function RefrigeratorBrands({ basicInfo }: RefrigeratorBrandsProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const [currentSlide, setCurrentSlide] = useState(0);

  const brands = [
    { name: 'Midea', logo: 'Midea' },
    { name: 'Samsung', logo: 'SAMSUNG' },
    { name: 'Brastemp', logo: 'BRASTEMP' },
    { name: 'Consul', logo: 'Consul' },
    { name: 'Electrolux', logo: 'Electrolux' },
    { name: 'LG', logo: 'LG' },
    { name: 'Panasonic', logo: 'Panasonic' },
    { name: 'GE', logo: 'GE' },
  ];

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(brands.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div 
          className="absolute top-10 left-10 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 leading-tight">
              Reparamos Todas as Marcas de{' '}
              <span className="block" style={{ color: primaryColor }}>
                Geladeiras
              </span>
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
              Nossos técnicos de geladeira têm experiência com várias marcas de geladeiras, incluindo:{' '}
              <span className="font-semibold text-gray-900">
                Brastemp, Consul, Electrolux, LG, Samsung, Panasonic e GE.
              </span>
            </p>
          </div>

          {/* Enhanced Brand Logos Carousel */}
          <div className="relative mb-8">
            {/* Navigation Arrow Left */}
            {totalSlides > 1 && (
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 shadow-sm"
                aria-label="Previous brands"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Brand Logos Container */}
            <div className={`${totalSlides > 1 ? 'mx-12' : 'mx-0'} overflow-hidden`}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full flex items-center justify-center gap-4 md:gap-6 px-2"
                  >
                    {brands
                      .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                      .map((brand, brandIndex) => {
                        // Different styling for different brands to match image
                        const isBrastemp = brand.name === 'Brastemp';
                        const isSamsung = brand.name === 'Samsung';
                        const isElectrolux = brand.name === 'Electrolux';
                        const isMidea = brand.name === 'Midea';
                        const isConsul = brand.name === 'Consul';
                        
                        return (
                          <div
                            key={brandIndex}
                            className="flex-1 flex items-center justify-center"
                          >
                            <div className={`
                              ${isBrastemp ? 'bg-gray-200' : 'bg-transparent'} 
                              text-gray-800 rounded-lg px-4 py-5 min-h-[90px] flex items-center justify-center w-full max-w-[180px] transition-shadow duration-200 hover:shadow-md
                              ${isBrastemp ? 'border border-gray-300' : ''}
                            `}>
                              {isSamsung ? (
                                <div className="flex flex-col items-center">
                                  <div className="w-20 h-20 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                    <span className="font-bold text-xs text-gray-700">SAMSUNG</span>
                                  </div>
                                </div>
                              ) : isElectrolux ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-black rounded-sm"></div>
                                  <span className="font-bold text-sm md:text-base text-center tracking-wide text-black">
                                    {brand.logo}
                                  </span>
                                </div>
                              ) : (
                                <span className={`font-bold text-sm md:text-base text-center tracking-wide ${
                                  isMidea || isConsul ? 'text-gray-700' : 'text-gray-800'
                                }`}>
                                  {brand.logo}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrow Right */}
            {totalSlides > 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 shadow-sm"
                aria-label="Next brands"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mb-12">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-2 bg-gray-800'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Bottom Text */}
          <div className="text-center mt-8 md:mt-10">
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Independentemente da marca, sua geladeira será cuidadosamente inspecionada e eficientemente reparada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

