'use client';

import type { BasicInfo } from '../lib/database';
import Image from 'next/image';

interface TypesOfRefrigeratorsProps {
  basicInfo: Partial<BasicInfo>;
  cityName?: string;
}

export default function TypesOfRefrigerators({ basicInfo, cityName }: TypesOfRefrigeratorsProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultCity = cityName || basicInfo?.defaultCity || 'Cuiabá';

  const refrigeratorTypes = [
    'Geladeiras Convencionais',
    'Frost Free',
    'Duplex',
    'Side by Side',
    'Industriais e Comerciais',
  ];

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
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Tipos de Geladeiras{' '}
                <span className="block" style={{ color: primaryColor }}>
                  que Reparamos
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Atendemos residências, empresas e indústrias com reparos técnicos para geladeiras de vários modelos, incluindo:
              </p>

              <ul className="space-y-2.5">
                {refrigeratorTypes.map((type, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3"
                  >
                    {/* Orange Circle with White Checkmark */}
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <svg 
                        className="w-3 h-3 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg text-gray-700">
                      {type}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-2">
                Todos os serviços são realizados por técnicos especializados, utilizando ferramentas adequadas e peças originais.
              </p>
            </div>

            {/* Right Section - Image with Refrigerators */}
            <div className="relative h-[350px] md:h-[400px] lg:h-[450px]">
              {/* Animated Blue Circle Background */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: primaryColor }}
              ></div>
              
              {/* Secondary Circle for Depth */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full opacity-10"
                style={{ backgroundColor: secondaryColor }}
              ></div>

              {/* Refrigerator Image with Enhanced Styling */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-[500px] transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl blur-xl"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src="/refrigerator_service.png"
                      alt="Tipos de geladeiras que reparamos"
                      fill
                      className="object-contain z-10 drop-shadow-2xl"
                      priority
                    />
                  </div>
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
                    style={{ 
                      background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`
                    }}
                  ></div>
                </div>
              </div>

              {/* Enhanced Tooltip/Popup Overlay */}
              <div 
                className="absolute bottom-8 right-4 md:right-8 bg-white rounded-xl shadow-2xl px-4 py-3 z-40 border-2 transform hover:scale-105 transition-transform duration-300"
                style={{ borderColor: secondaryColor }}
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                  <p className="text-xs md:text-sm font-bold text-gray-900">
                    Reparo de Geladeira em <span style={{ color: primaryColor }}>{defaultCity}</span>
                  </p>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 mt-1 ml-5">
                  Assistência Perto de Você
                </p>
                <div 
                  className="absolute -bottom-2 left-6 w-3 h-3 bg-white transform rotate-45 border-r border-b"
                  style={{ borderColor: secondaryColor }}
                ></div>
              </div>

              {/* Floating Decorative Elements */}
              <div 
                className="absolute top-6 left-6 w-10 h-10 rounded-full opacity-20 animate-bounce"
                style={{ 
                  backgroundColor: secondaryColor,
                  animationDuration: '3s'
                }}
              ></div>
              <div 
                className="absolute bottom-20 right-12 w-8 h-8 rounded-full opacity-20 animate-bounce"
                style={{ 
                  backgroundColor: primaryColor,
                  animationDuration: '4s',
                  animationDelay: '1s'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

