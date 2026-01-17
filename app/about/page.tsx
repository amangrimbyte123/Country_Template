import { getBasicInfo } from '../lib/database';
import type { BasicInfo } from '../lib/database';
import Link from 'next/link';

export default async function AboutPage() {
  const basicInfo: BasicInfo | null = await getBasicInfo();
  
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  const tagline = basicInfo?.tagline || 'Your comprehensive guide to discovering businesses, services, and places across Brazil.';
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const stats = [
    { number: '10K+', label: 'Prestadores Verificados', icon: '✓' },
    { number: '50K+', label: 'Clientes Satisfeitos', icon: '😊' },
    { number: '500+', label: 'Cidades Cobertas', icon: '📍' },
    { number: '4.8★', label: 'Avaliação Média', icon: '⭐' },
  ];

  const features = [
    {
      title: 'Listagens Verificadas',
      description: 'Todas as empresas são verificadas para garantir qualidade e autenticidade.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Cobertura Abrangente',
      description: 'Cobrimos todas as principais cidades e regiões do Brasil.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Avaliações de Usuários',
      description: 'Avaliações reais de clientes reais para ajudá-lo a tomar decisões informadas.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: 'Fácil de Usar',
      description: 'Interface simples e intuitiva para buscas e reservas rápidas.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Suporte 24/7',
      description: 'Suporte ao cliente 24 horas por dia para ajudá-lo sempre que precisar.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Plataforma Confiável',
      description: 'Junte-se a milhares de clientes satisfeitos que confiam em nós para suas necessidades de serviços.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const values = [
    { title: 'Integridade', description: 'Mantemos os mais altos padrões de honestidade e transparência.' },
    { title: 'Inovação', description: 'Melhoramos continuamente nossa plataforma para servi-lo melhor.' },
    { title: 'Foco no Cliente', description: 'Sua satisfação é nossa prioridade máxima em tudo que fazemos.' },
    { title: 'Comunidade', description: 'Apoiamos empresas locais e fortalecemos comunidades.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${secondaryColor} 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Sobre {siteName}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
              {tagline}
            </p>
            <div className="w-24 h-1 mx-auto bg-white/80 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: primaryColor }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Quem Somos
                </h2>
                <div className="w-24 h-1 mb-6" style={{ backgroundColor: secondaryColor }}></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {siteName} é seu guia abrangente para descobrir as melhores empresas, serviços e lugares em todo o Brasil. 
                  Conectamos pessoas com empresas locais e ajudamos a tomar decisões informadas.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Fundada com a missão de apoiar empresas locais e facilitar a busca do que as pessoas precisam, 
                  crescemos para nos tornar uma das plataformas de diretório mais confiáveis do Brasil.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: secondaryColor }}
                >
                  Entre em Contato
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${secondaryColor} 100%)`,
                    }}
                  >
                    <div className="text-center p-8">
                      <div className="text-7xl mb-4">🇧🇷</div>
                      <h4 className="text-3xl font-bold text-white mb-2">Servindo o Brasil</h4>
                      <p className="text-white/90 text-lg">Conectando comunidades em todo o país</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Nossa Missão e Visão
              </h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estamos comprometidos em transformar como as pessoas descobrem e se conectam com serviços locais
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${primaryColor}15` }}>
                  <svg className="w-8 h-8" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Nossa Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Capacitar empresas locais fornecendo-lhes uma plataforma para alcançar mais clientes, 
                  enquanto ajudamos as pessoas a descobrirem os melhores serviços e produtos em sua área. Acreditamos 
                  em criar conexões significativas que beneficiam tanto empresas quanto consumidores.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${secondaryColor}15` }}>
                  <svg className="w-8 h-8" style={{ color: secondaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Nossa Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tornar-nos o diretório de serviços mais confiável e abrangente do Brasil, onde toda empresa 
                  local pode prosperar e todo cliente pode facilmente encontrar exatamente o que procura. 
                  Vislumbramos um futuro onde encontrar serviços de qualidade seja sem esforço e acessível a todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Por Que Nos Escolher
              </h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubra o que nos torna a escolha preferida para encontrar serviços locais
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Nossos Valores Fundamentais
              </h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Os princípios que guiam tudo que fazemos
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {value.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de clientes satisfeitos que confiam na {siteName} para encontrar os melhores serviços locais. 
              Comece sua busca hoje ou entre em contato conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: primaryColor }}
              >
                Navegar Serviços
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: secondaryColor }}
              >
                Entre em Contato
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

