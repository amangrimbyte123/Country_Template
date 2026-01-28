'use client';

import type { BasicInfo, State } from '../lib/database';
import Link from 'next/link';

interface ServiceAreasSectionProps {
  basicInfo: Partial<BasicInfo>;
  states: State[];
}

export default function ServiceAreasSection({ basicInfo, states }: ServiceAreasSectionProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const contactPhone = basicInfo?.contactPhone || '+55 31 99999-9999';

  if (!states || states.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 leading-tight">
              Servimos com Orgulho as{' '}
              <span className="block" style={{ color: primaryColor }}>
                Seguintes Áreas
              </span>
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Section - Service Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              {/* States Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {states.slice(0, 12).map((state, index) => (
                  <Link
                    key={state.$id || state.slug}
                    href={`/states/${state.slug}`}
                    className="group block"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <div 
                      className="px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 border border-gray-200 hover:border-gray-300 bg-white"
                      style={{ 
                        color: primaryColor,
                      }}
                    >
                      <span className="group-hover:underline text-sm md:text-base">{state.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center md:text-right mt-6">
                <Link
                  href="/states"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span>Ver Todos</span>
                  <svg 
                    className="w-4 h-4"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Section - Call to Action */}
            <div 
              className="rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}dd 100%)`
              }}
            >
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative z-10 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Precisa de Serviço Rápido?
                </h3>
                <p className="text-lg md:text-xl font-bold text-white mb-6">
                  Ligue Agora para um Orçamento Grátis!
                </p>

                {/* Phone Icon and Number */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-xl p-4 mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-10 h-10 md:w-12 md:h-12"
                      style={{ color: secondaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <div className="text-white">
                    <p className="text-xs md:text-sm font-medium mb-1 opacity-90">LIGUE HOJE</p>
                    <a 
                      href={`tel:${contactPhone.replace(/\s/g, '')}`}
                      className="text-xl md:text-2xl font-bold hover:underline transition-all duration-300"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

