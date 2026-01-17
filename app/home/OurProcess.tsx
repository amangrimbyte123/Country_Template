'use client';

import type { BasicInfo } from '../lib/database';

interface OurProcessProps {
  basicInfo: Partial<BasicInfo>;
}

export default function OurProcess({ basicInfo }: OurProcessProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const steps = [
    {
      number: '01',
      title: 'Buscar e Descobrir',
      description: 'Use nosso poderoso mecanismo de busca para encontrar serviços na sua área. Filtre por categoria, localização, avaliações e muito mais.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Comparar e Revisar',
      description: 'Navegue por perfis detalhados, leia avaliações autênticas de clientes, verifique notas e compare diferentes prestadores.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Conectar e Reservar',
      description: 'Entre em contato com o prestador de serviços escolhido diretamente através da nossa plataforma. Reserve consultas ou solicite orçamentos instantaneamente.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Receber Serviço e Avaliar',
      description: 'Receba um serviço de qualidade e compartilhe sua experiência deixando uma avaliação para ajudar outros a tomarem melhores decisões.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Como Funciona
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Começar é simples. Siga estes quatro passos fáceis para encontrar e conectar-se com o prestador de serviços perfeito.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5" style={{ backgroundColor: `${primaryColor}20` }}>
              <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
              <div className="absolute left-2/4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
              <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    {/* Step Number */}
                    <div 
                      className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg z-10"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mt-2 sm:mt-3 md:mt-4"
                      style={{ 
                        backgroundColor: `${secondaryColor}15`,
                        color: secondaryColor,
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gray-50 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full">
              <p className="text-sm sm:text-base text-gray-600">
                <span className="font-bold text-black">Pronto para começar?</span> Busque serviços agora e experimente a diferença!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

