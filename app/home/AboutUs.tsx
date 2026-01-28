'use client';

import type { BasicInfo } from '../lib/database';
import Image from 'next/image';

interface AboutUsProps {
  basicInfo: Partial<BasicInfo>;
}

export default function AboutUs({ basicInfo }: AboutUsProps) {
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const stats = [
    { number: '10K+', label: 'Prestadores Verificados' },
    { number: '50K+', label: 'Clientes Satisfeitos' },
    { number: '500+', label: 'Cidades Cobertas' },
    { number: '4.8★', label: 'Avaliação Média' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Sobre{' '}
              <span className="block" style={{ color: primaryColor }}>
                {siteName}
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos a principal plataforma de diretório de serviços do Brasil, conectando clientes com prestadores de serviços locais confiáveis em todo o país.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Seu Parceiro Confiável para Encontrar Serviços de Qualidade
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Na {siteName}, entendemos a importância de encontrar prestadores de serviços confiáveis e profissionais. 
                Nossa plataforma facilita a descoberta, comparação e conexão com empresas verificadas 
                na sua região.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Se você está procurando reparos domésticos, serviços profissionais, restaurantes ou locais de entretenimento, 
                temos tudo para você. Nosso diretório abrangente apresenta milhares de listagens verificadas com 
                avaliações reais de clientes para ajudá-lo a tomar decisões informadas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black font-medium">100% Listagens Verificadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black font-medium">Suporte 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: secondaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black font-medium">Avaliações Reais de Clientes</span>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${secondaryColor} 100%)`,
                  }}
                >
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🇧🇷</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Servindo o Brasil</h4>
                    <p className="text-white/90">Conectando comunidades em todo o país</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

