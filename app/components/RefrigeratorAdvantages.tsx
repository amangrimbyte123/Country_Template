'use client';

import type { BasicInfo } from '../lib/database';

interface RefrigeratorAdvantagesProps {
  basicInfo: Partial<BasicInfo>;
}

export default function RefrigeratorAdvantages({ basicInfo }: RefrigeratorAdvantagesProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const advantages = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {/* Stopwatch circle */}
          <circle cx="12" cy="12" r="10" />
          {/* Stopwatch hands */}
          <path d="M12 6v6l4 2" />
          {/* Speed lines to the left */}
          <path d="M2 12h2" strokeWidth={1.5} />
          <path d="M1 8h1.5" strokeWidth={1.5} />
          <path d="M1 16h1.5" strokeWidth={1.5} />
        </svg>
      ),
      title: 'Serviço Rápido',
      description: 'Chegamos em poucas horas após o contato para resolver o problema.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {/* Magnifying glass */}
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          {/* Document/checklist inside */}
          <path d="M8 9h2" strokeWidth={1.5} />
          <path d="M8 12h2" strokeWidth={1.5} />
          <path d="M8 15h2" strokeWidth={1.5} />
          <path d="M11 9l1 1 2-2" strokeWidth={1.5} />
          <path d="M11 12l1 1 2-2" strokeWidth={1.5} />
        </svg>
      ),
      title: 'Diagnóstico Preciso',
      description: 'Identificamos a causa exata da falha para reparos mais eficientes.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {/* Gear */}
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <circle cx="12" cy="12" r="3" />
          {/* Wrench */}
          <path d="M14 6l-2 2" strokeWidth={1.5} />
          {/* Circuit/Graph line */}
          <path d="M16 4l2 2-2 2" strokeWidth={1.5} />
        </svg>
      ),
      title: 'Uso de Peças Originais',
      description: 'Trabalhamos apenas com peças originais para maior durabilidade.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {/* Shield shape */}
          <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
          {/* Checkmark inside */}
          <path d="M9 12l2 2 4-4" strokeWidth={2.5} />
        </svg>
      ),
      title: 'Garantia de Serviço',
      description: 'Serviços com garantia e suporte em caso de qualquer imprevisto.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {/* Left hand */}
          <path d="M6 12c0-1.5 1-3 3-3s3 1.5 3 3v2" />
          <path d="M6 14v2c0 1 1 2 2 2" />
          {/* Right hand */}
          <path d="M18 12c0-1.5-1-3-3-3s-3 1.5-3 3v2" />
          <path d="M18 14v2c0 1-1 2-2 2" />
          {/* Connection/handshake */}
          <path d="M9 12h6" strokeWidth={2.5} />
          {/* Dollar signs above */}
          <text x="5" y="6" fontSize="9" fontWeight="bold" fill="currentColor">$</text>
          <text x="17" y="6" fontSize="9" fontWeight="bold" fill="currentColor">$</text>
        </svg>
      ),
      title: 'Pagamento Fácil',
      description: 'Aceitamos cartões de crédito e Pix para sua conveniência quando precisar de reparos.',
    },
  ];

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
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              Vantagens de Contratar um{' '}
              <span className="block" style={{ color: primaryColor }}>
                Técnico de Geladeira
              </span>
            </h2>
          </div>

          {/* Advantages Grid - Modern Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
                  }}
                ></div>

                {/* Card Content */}
                <div className="relative p-6 md:p-7">
                  {/* Icon Container with Enhanced Design */}
                  <div className="mb-5">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {/* Icon Background Pattern */}
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                          backgroundSize: '8px 8px'
                        }}
                      ></div>
                      <div className="relative z-10">
                        {advantage.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:underline">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {advantage.description}
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

                {/* Corner Decoration */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

