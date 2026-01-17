'use client';

import type { BasicInfo } from '../lib/database';

interface WhyWeAreFirstChoiceProps {
  basicInfo: Partial<BasicInfo>;
}

export default function WhyWeAreFirstChoice({ basicInfo }: WhyWeAreFirstChoiceProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Verificado e Confiável',
      description: 'Toda empresa em nossa plataforma passa por um rigoroso processo de verificação para garantir autenticidade e qualidade.',
      color: primaryColor,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Busca Rápida e Fácil',
      description: 'Encontre exatamente o que você precisa em segundos com nosso sistema intuitivo de busca e filtros.',
      color: secondaryColor,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Avaliações e Notas Reais',
      description: 'Tome decisões informadas com avaliações autênticas de clientes e notas detalhadas de usuários verificados.',
      color: primaryColor,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Otimizado para Mobile',
      description: 'Acesse nossa plataforma perfeitamente em qualquer dispositivo - desktop, tablet ou celular. Busque em movimento!',
      color: secondaryColor,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Suporte ao Cliente 24/7',
      description: 'Nossa equipe de suporte dedicada está disponível 24 horas por dia para ajudá-lo com qualquer dúvida ou preocupação.',
      color: primaryColor,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Conexões Instantâneas',
      description: 'Conecte-se diretamente com prestadores de serviços através da nossa plataforma. Sem intermediários, sem atrasos.',
      color: secondaryColor,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Por Que Somos a Primeira Escolha
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra o que nos torna a plataforma preferida para encontrar serviços confiáveis em todo o Brasil
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: `${reason.color}15`,
                    color: reason.color,
                  }}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div 
              className="inline-block px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: secondaryColor }}
            >
              Junte-se a Milhares de Usuários Satisfeitos Hoje
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

