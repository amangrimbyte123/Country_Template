'use client';

import type { BasicInfo, Service } from '../lib/database';
import Image from 'next/image';
import Link from 'next/link';

interface ServicesProps {
  basicInfo: Partial<BasicInfo>;
  service: Service | null;
}

export default function Services({ basicInfo, service }: ServicesProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultCity = basicInfo?.defaultCity || 'Belo Horizonte';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';

  if (!service) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Nosso Serviço
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serviço profissional disponível em {defaultCity}, {defaultState}
            </p>
          </div>

          {/* Single Service Card */}
          <Link
            href={`/services/${service.slug}`}
            className="group block"
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                {service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                {/* Category Badge */}
                {service.category && (
                  <div className="mb-4">
                    <span 
                      className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      {service.category}
                    </span>
                  </div>
                )}

                {/* Service Name */}
                <h3 className="text-3xl font-bold text-black mb-4 group-hover:underline">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description || service.introText}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2">
                  <span 
                    className="text-base font-semibold"
                    style={{ color: primaryColor }}
                  >
                    Saiba Mais
                  </span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}

