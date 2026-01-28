'use client';

import type { BasicInfo } from '../lib/database';

interface RefrigeratorCTAProps {
  basicInfo: Partial<BasicInfo>;
  cityName?: string;
}

export default function RefrigeratorCTA({ basicInfo, cityName }: RefrigeratorCTAProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultCity = cityName || basicInfo?.defaultCity || 'Cuiabá';
  
  // Get WhatsApp number from basicInfo or use a default
  const whatsappNumber = basicInfo?.contactPhone || '5511999999999';
  const cleanPhone = whatsappNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello, I need refrigerator repair service in ${defaultCity}`;

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="rounded-xl md:rounded-2xl overflow-hidden mx-auto max-w-7xl shadow-xl relative"
          style={{ 
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${primaryColor}bb 100%)`
          }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center p-4 md:p-6 relative z-10">
            {/* Left Section - Technician Graphic */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                {/* Animated Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse"
                  style={{ backgroundColor: secondaryColor }}
                ></div>
                
                {/* White Circular Frame with Shadow */}
                <div className="relative bg-white rounded-full shadow-xl flex items-center justify-center p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
                  {/* Cartoon Technician SVG with Theme Colors */}
                  <svg 
                    viewBox="0 0 200 200" 
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head */}
                    <circle cx="100" cy="70" r="35" fill="#f4d1ae" />
                    
                    {/* Cap with Primary Color */}
                    <path d="M 70 50 Q 100 30 130 50 L 130 60 Q 100 45 70 60 Z" fill={primaryColor} />
                    <path d="M 75 55 Q 100 40 125 55 L 125 58 Q 100 45 75 58 Z" fill="#ffffff" />
                    {/* Snowflake logo on cap */}
                    <circle cx="100" cy="47" r="2" fill="#ffffff" />
                    <path d="M 100 45 L 100 49 M 97 47 L 103 47 M 98.5 45.5 L 101.5 48.5 M 101.5 45.5 L 98.5 48.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                    
                    {/* Face */}
                    <circle cx="92" cy="68" r="3" fill="#333" />
                    <circle cx="108" cy="68" r="3" fill="#333" />
                    <path d="M 90 78 Q 100 82 110 78" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    
                    {/* Body - T-shirt */}
                    <rect x="75" y="105" width="50" height="40" rx="5" fill="#ffffff" />
                    
                    {/* Overalls with Primary Color */}
                    <rect x="75" y="120" width="50" height="50" rx="5" fill={primaryColor} />
                    <path d="M 100 120 L 100 145 M 85 135 L 115 135" stroke={primaryColor} strokeWidth="2.5" opacity="0.7" />
                    
                    {/* Tool Belt */}
                    <rect x="75" y="160" width="50" height="8" fill={primaryColor} opacity="0.8" />
                    {/* Screwdriver handle with Secondary Color */}
                    <rect x="80" y="162" width="6" height="4" rx="1" fill={secondaryColor} />
                    
                    {/* Gloves */}
                    <ellipse cx="70" cy="175" rx="8" ry="12" fill={primaryColor} />
                    <ellipse cx="130" cy="175" rx="8" ry="12" fill={primaryColor} />
                    
                    {/* Thumbs Up Hand - Right arm raised */}
                    <path d="M 130 145 L 135 140 L 140 145 L 138 150 L 135 148 L 130 150 Z" fill="#f4d1ae" stroke="#333" strokeWidth="1.5" />
                    <circle cx="138" cy="148" r="3" fill="#f4d1ae" />
                  </svg>
                </div>

              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-2">
                <div 
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: secondaryColor }}
                ></div>
                <span className="text-[10px] md:text-xs font-semibold text-white">
                  Disponível 24/7
                </span>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                Reparo de Geladeira{' '}
                <span className="block" style={{ color: secondaryColor }}>
                  Perto de Você
                </span>
              </h2>
              
              <p className="text-white/95 text-xs md:text-sm mb-1.5 leading-relaxed">
                Sua geladeira não está resfriando, fazendo barulho ou vazando? Podemos consertar com serviço rápido e garantia!
              </p>
              
              <p className="text-white/90 text-[11px] md:text-xs mb-4 leading-relaxed">
                Assistência técnica 24/7 em <span className="font-semibold">{defaultCity}</span> com peças originais.
              </p>

              {/* Enhanced WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 group-hover:animate-shine" style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                }}></div>
                
                {/* WhatsApp Icon */}
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 relative z-10" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-xs md:text-sm relative z-10">Solicite seu orçamento</span>
                
                {/* Arrow Icon */}
                <svg 
                  className="w-3 h-3 md:w-4 md:h-4 relative z-10 transform group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

