'use client';

import type { BasicInfo } from '../lib/database';

interface TestimonialsProps {
  basicInfo: Partial<BasicInfo>;
}

export default function Testimonials({ basicInfo }: TestimonialsProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Encontrei o encanador perfeito em minutos! A plataforma facilitou muito comparar preços e ler avaliações. Altamente recomendado!',
      service: 'Serviços de Encanamento',
      avatar: '👩',
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Como proprietário de negócio, estar listado aqui me trouxe muitos clientes novos. O processo de verificação dá confiança aos clientes.',
      service: 'Proprietário de Negócio',
      avatar: '👨',
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Adoro como posso ver avaliações reais de outros clientes. Isso me ajudou a escolher o melhor restaurante para meu jantar de aniversário!',
      service: 'Reserva de Restaurante',
      avatar: '👩‍🦰',
    },
    {
      name: 'Carlos Oliveira',
      location: 'Brasília, DF',
      rating: 5,
      text: 'A funcionalidade de busca é incrível. Encontrei exatamente o que precisava para reparos domésticos, e o serviço foi excelente!',
      service: 'Reparo Doméstico',
      avatar: '👨‍💼',
    },
    {
      name: 'Fernanda Lima',
      location: 'Curitiba, PR',
      rating: 5,
      text: 'Esta plataforma me economizou muito tempo! Em vez de ligar para vários lugares, pude comparar tudo em um só lugar.',
      service: 'Planejamento de Eventos',
      avatar: '👩‍💻',
    },
    {
      name: 'Roberto Alves',
      location: 'Porto Alegre, RS',
      rating: 5,
      text: 'Ótima experiência no geral. O suporte ao cliente foi útil quando tive dúvidas, e encontrei prestadores de serviços confiáveis rapidamente.',
      service: 'Serviços de TI',
      avatar: '👨‍🔧',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Não acredite apenas na nossa palavra. Veja o que clientes reais têm a dizer sobre sua experiência.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      style={{ color: secondaryColor }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="mb-4">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: `${primaryColor}80` }}
                  >
                    {testimonial.service}
                  </span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${secondaryColor}20` }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>4.8/5</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>50K+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

