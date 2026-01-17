'use client';

import type { BasicInfo, City } from '../lib/database';
import Image from 'next/image';
import Link from 'next/link';

interface PopularCitiesProps {
  basicInfo: Partial<BasicInfo>;
  cities: City[];
}

export default function PopularCities({ basicInfo, cities }: PopularCitiesProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';

  if (!cities || cities.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Cidades Populares
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra prestadores de serviços confiáveis nestas cidades populares em {defaultState}
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.$id || city.slug}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* City Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    {city.image ? (
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: `${primaryColor}15` }}
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
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* City Name Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div 
                        className="inline-block px-4 py-2 rounded-lg text-white font-bold shadow-lg"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        {city.name}
                      </div>
                    </div>
                  </div>

                  {/* City Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {city.description || city.introText}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 mt-auto">
                      <span 
                        className="text-sm font-semibold"
                        style={{ color: primaryColor }}
                      >
                        Explorar Serviços
                      </span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        style={{ color: primaryColor }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/cities"
              className="inline-block px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: secondaryColor }}
            >
              Ver Todas as Cidades
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

