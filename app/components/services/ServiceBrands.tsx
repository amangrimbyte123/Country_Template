'use client';

import { useState } from 'react';
import type { Service } from '@/app/lib/database';

interface ServiceBrandsProps {
  service: Service;
  primaryColor: string;
  secondaryColor: string;
}

export default function ServiceBrands({ service, primaryColor, secondaryColor }: ServiceBrandsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const brands = [
    { name: 'Samsung', logo: 'SAMSUNG', color: '#1428A0' },
    { name: 'Brastemp', logo: 'BRASTEMP', color: '#0066CC' },
    { name: 'Consul', logo: 'Consul', color: '#1E3A8A' },
    { name: 'Electrolux', logo: 'Electrolux', color: '#000000' },
    { name: 'LG', logo: 'LG', color: '#A50034' },
    { name: 'Panasonic', logo: 'Panasonic', color: '#0F4C81' },
    { name: 'GE', logo: 'GE', color: '#0A68B0' },
    { name: 'Midea', logo: 'Midea', color: '#E60012' },
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
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
        {/* Top Tag */}
        <div className="text-center mb-6">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: secondaryColor }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Marcas Confiáveis
          </span>
        </div>

        {/* Main Heading and Description */}
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Nossos técnicos de <span className="font-semibold">{service.name.replace(/Conserto de |Reparo de |Serviço de /gi, '').toLowerCase()}</span> têm experiência com diversas marcas, incluindo:{' '}
            <span className="font-bold text-gray-900">
              {brands.slice(0, -1).map(b => b.name).join(', ')} e {brands[brands.length - 1].name}.
            </span>
          </p>
        </div>

        {/* Brand Logos Carousel */}
        <div className="relative mb-6">
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
                  className="min-w-full flex items-center justify-center gap-3 px-2"
                >
                  {brands
                    .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                    .map((brand, brandIndex) => (
                      <div
                        key={brandIndex}
                        className="flex-1 flex items-center justify-center"
                      >
                        <div 
                          className="bg-gray-800 text-white rounded-lg px-4 py-5 min-h-[90px] flex items-center justify-center w-full max-w-[180px] transition-shadow duration-200 shadow-sm hover:shadow-md"
                          style={{
                            backgroundColor: brand.color || '#1F2937'
                          }}
                        >
                          <span className="font-bold text-sm md:text-base text-center tracking-wide">
                            {brand.logo}
                          </span>
                        </div>
                      </div>
                    ))}
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

        {/* Pagination Dots - Simple and Clean */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 bg-gray-700'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom Text - Clean and Professional */}
        <div className="text-center">
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Independentemente da marca, seu <span className="font-semibold">{service.name.replace(/Conserto de |Reparo de |Serviço de /gi, '').toLowerCase()}</span> será analisado com cuidado e reparado com <span className="font-semibold">eficiência</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
