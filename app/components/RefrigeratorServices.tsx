'use client';

import type { BasicInfo } from '../lib/database';
import Image from 'next/image';

interface RefrigeratorServicesProps {
  basicInfo: Partial<BasicInfo>;
}

export default function RefrigeratorServices({ basicInfo }: RefrigeratorServicesProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const services = [
    {
      name: 'Reparo de Placa',
      image: '/services/board_repair.png',
      description: 'Serviços profissionais de reparo e substituição de placas eletrônicas.',
    },
    {
      name: 'Reparo de Motor',
      image: '/services/engine_repair.png',
      description: 'Reparo especializado de compressor e motor para desempenho ideal.',
    },
    {
      name: 'Recarga de Gás',
      image: '/services/gas_refile.png',
      description: 'Serviços seguros e eficientes de recarga de gás refrigerante.',
    },
    {
      name: 'Reparo de Vazamento',
      image: '/services/leak_repair.png',
      description: 'Soluções completas de detecção e reparo de vazamentos.',
    },
    {
      name: 'Reparo de Termostato',
      image: '/services/Thermostat_repair.png',
      description: 'Serviços de calibração e substituição de termostato.',
    },
    {
      name: 'Limpeza de Ventilação',
      image: '/services/Ventilation_cleaning.png',
      description: 'Limpeza completa e manutenção de sistemas de ventilação.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div 
          className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: secondaryColor, animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-10 md:mb-14">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border mb-4" style={{ borderColor: `${primaryColor}20` }}>
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: secondaryColor }}
              ></div>
              <span className="text-xs md:text-sm font-semibold" style={{ color: primaryColor }}>
                Serviços Profissionais
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 leading-tight">
              Nossos Serviços de{' '}
              <span className="block" style={{ color: primaryColor }}>
                Geladeira
              </span>
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            ></div>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Serviços completos de reparo e manutenção para todos os tipos de geladeiras
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden relative animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
                  }}
                ></div>

                {/* Service Image Container with Gradient */}
                <div className="relative h-44 md:h-52 w-full overflow-hidden">
                  {/* Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}08 0%, ${secondaryColor}08 100%)`
                    }}
                  ></div>
                  
                  {/* Image */}
                  <div className="relative h-full w-full p-4 md:p-6">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Corner Badge */}
                  <div 
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    <svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5 md:p-6 relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base md:text-lg font-bold text-black group-hover:underline flex-1" style={{ color: 'inherit' }}>
                      {service.name}
                    </h3>
                    {/* Icon Indicator */}
                    <div 
                      className="w-6 h-6 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                      style={{ 
                        backgroundColor: `${secondaryColor}15`,
                        color: secondaryColor 
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
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Animated Bottom Border */}
                <div className="relative h-1.5 overflow-hidden">
                  <div 
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500"
                    style={{ 
                      background: `linear-gradient(90deg, ${secondaryColor} 0%, ${primaryColor} 100%)`
                    }}
                  ></div>
                </div>

                {/* Shine Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 md:mt-12">
            <p className="text-sm md:text-base text-gray-600">
              Precisa de ajuda? <span className="font-semibold" style={{ color: primaryColor }}>Entre em contato</span> para serviços especializados de reparo de geladeira
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

