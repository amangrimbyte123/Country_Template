'use client';

import type { BasicInfo, Service } from '../lib/database';
import Image from 'next/image';

interface HeroSectionProps {
  basicInfo: Partial<BasicInfo>;
  service?: Service | null;
}

export default function HeroSection({ basicInfo, service }: HeroSectionProps) {
  const primaryColor = basicInfo.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo.secondaryColor || '#F59E0B';
  const siteName = basicInfo.siteName || 'ServiceFinder Brazil';
  const tagline = basicInfo.tagline || 'Encontre Prestadores de Serviços Locais Confiáveis Perto de Você';
  const bannerImage = basicInfo.bannerImage || '';
  const defaultCity = basicInfo.defaultCity || 'Belo Horizonte';
  const defaultState = basicInfo.defaultState || 'Minas Gerais';
  const defaultService = service?.name || basicInfo.defaultService || 'Reparo de Ar Condicionado';

  return (
    <section 
      className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden pt-[72px] pb-10 md:pb-12"
      style={{ 
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 40%, ${secondaryColor}dd 100%)`,
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
      
      {/* Banner Image with Overlay */}
      {bannerImage && (
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={basicInfo.bannerAlt || 'Banner'}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
        </div>
      )}

      {/* Animated Background Shapes - More Dynamic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg" style={{ backgroundColor: `${secondaryColor}40` }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-white tracking-wide">O Diretório de Serviços #1 do Brasil</span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 className="mb-4 leading-[1.1]">
                <span 
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-white drop-shadow-2xl"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    letterSpacing: '-0.02em',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {siteName}
                </span>
                <span 
                  className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-white to-yellow-200 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${secondaryColor} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.2'
                  }}
                >
                  {tagline}
                </span>
              </h1>

              {/* Subtitle with Better Typography */}
              <p className="text-sm md:text-base text-white/95 mb-6 max-w-lg md:max-w-none leading-relaxed font-medium" style={{ letterSpacing: '0.01em' }}>
                Conecte-se com prestadores de serviços verificados em <span className="font-semibold text-white">{defaultCity}, {defaultState}</span>. 
                Obtenha serviços de qualidade entregues na sua porta.
              </p>

              {/* Enhanced Quick Stats */}
              <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
                {[
                  { value: '10K+', label: 'Prestadores Verificados', icon: '✓' },
                  { value: '50K+', label: 'Clientes Satisfeitos', icon: '😊' },
                  { value: '4.8★', label: 'Avaliação Média', icon: '⭐' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left group">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-base">{stat.icon}</span>
                      <div 
                        className="text-xl md:text-2xl font-black text-white"
                        style={{
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-[10px] md:text-xs text-white/80 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Search Card */}
            <div className="w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20 relative overflow-hidden">
                {/* Decorative Gradient */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: secondaryColor }}
                ></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${secondaryColor}15` }}
                    >
                      <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-black" style={{ letterSpacing: '-0.02em' }}>
                      Encontre Serviços Perto de Você
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="relative group">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder={`Buscar por ${defaultService}...`}
                        className="w-full pl-10 pr-4 py-3 rounded-lg text-black placeholder-gray-500 bg-gray-50/80 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm font-medium"
                        style={{ 
                          '--tw-ring-color': secondaryColor,
                        } as React.CSSProperties & { '--tw-ring-color'?: string }}
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <select 
                        className="w-full pl-10 pr-10 py-3 rounded-lg text-black bg-gray-50/80 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent appearance-none transition-all text-sm font-medium"
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
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <button 
                      className="w-full py-3 rounded-lg font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm relative overflow-hidden group"
                      style={{ 
                        backgroundColor: secondaryColor,
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Buscar Agora
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Trust Badge */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">100% Grátis • Prestadores Verificados • Resultados Instantâneos</span>
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

