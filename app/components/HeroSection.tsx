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
      className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden pt-[72px]"
      style={{ 
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 40%, ${secondaryColor}dd 100%)`,
      }}
    >
      {/* Banner Image with Green Overlay */}
      {bannerImage && (
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={basicInfo.bannerAlt || 'Banner'}
            fill
            className="object-cover"
            priority
          />
          {/* Green Overlay similar to reference image */}
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundColor: `${primaryColor}cc`,
              mixBlendMode: 'multiply'
            }}
          ></div>
        </div>
      )}

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Headline and Information */}
            <div className="text-center md:text-left animate-fade-in space-y-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/30 shadow-lg" style={{ backgroundColor: `${secondaryColor}50` }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-white tracking-wide">O Diretório de Serviços #1 do Brasil</span>
              </div>

              {/* Main Heading - Large and Bold */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                {siteName}
              </h1>

              {/* Tagline */}
              <p 
                className="text-lg md:text-xl lg:text-2xl text-white/95 mb-6 max-w-lg md:max-w-none leading-relaxed font-medium"
                style={{ 
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                {tagline}
              </p>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-lg md:max-w-none leading-relaxed">
                Conecte-se com prestadores de serviços verificados em <span className="font-semibold text-white">{defaultCity}, {defaultState}</span>. 
                Obtenha serviços de qualidade entregues na sua porta.
              </p>

              {/* Learn More Link */}
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:gap-3 transition-all group"
                style={{ 
                  color: `${secondaryColor}`,
                  filter: 'brightness(1.2)'
                }}
              >
                <span>Saiba mais</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Enhanced Quick Stats */}
              <div className="flex flex-wrap gap-6 md:gap-8 mt-8 pt-8 border-t border-white/20">
                {[
                  { value: '10K+', label: 'Prestadores Verificados', icon: '✓' },
                  { value: '50K+', label: 'Clientes Satisfeitos', icon: '😊' },
                  { value: '4.8★', label: 'Avaliação Média', icon: '⭐' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{stat.icon}</span>
                      <div 
                        className="text-2xl md:text-3xl font-black text-white"
                        style={{
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-white/80 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Form Card */}
            <div className="w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden border border-gray-100">
                {/* Decorative Gradient Background */}
                <div 
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10"
                  style={{ backgroundColor: secondaryColor }}
                ></div>
                
                <div className="relative z-10">
                  {/* Form Title */}
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ 
                      color: primaryColor,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Encontre Serviços Agora
                  </h2>
                  
                  {/* Form Fields */}
                  <div className="space-y-4">
                    {/* Service Search Field */}
                    <div className="relative">
                      <label 
                        htmlFor="service" 
                        className="block text-sm font-semibold mb-2"
                        style={{ color: primaryColor }}
                      >
                        Tipo de Serviço
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <input
                          id="service"
                          type="text"
                          placeholder={`Ex: ${defaultService}`}
                          className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 placeholder-gray-400 bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-base font-medium hover:border-gray-300"
                          style={{ 
                            '--tw-ring-color': secondaryColor,
                          } as React.CSSProperties & { '--tw-ring-color'?: string }}
                        />
                      </div>
                    </div>

                    {/* Location Field */}
                    <div className="relative">
                      <label 
                        htmlFor="location" 
                        className="block text-sm font-semibold mb-2"
                        style={{ color: primaryColor }}
                      >
                        Localização
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <select 
                          id="location"
                          className="w-full pl-12 pr-12 py-4 rounded-xl text-gray-800 bg-gray-50 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent appearance-none transition-all text-base font-medium hover:border-gray-300 cursor-pointer"
                          style={{ 
                            '--tw-ring-color': secondaryColor,
                          } as React.CSSProperties & { '--tw-ring-color'?: string }}
                        >
                          <option>{defaultCity}, {defaultState}</option>
                          <option>São Paulo, SP</option>
                          <option>Rio de Janeiro, RJ</option>
                          <option>Brasília, DF</option>
                          <option>Salvador, BA</option>
                          <option>Fortaleza, CE</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button 
                      className="w-full py-4 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-lg relative overflow-hidden group mt-6"
                      style={{ 
                        backgroundColor: secondaryColor,
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Buscar Agora
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Trust Badge */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
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

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-12 md:h-16" 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" 
            fill="white" 
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
}

