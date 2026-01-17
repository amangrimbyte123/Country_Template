'use client';

import { useState } from 'react';
import type { City } from '@/app/lib/database';

interface CityFAQProps {
  city: City;
  primaryColor: string;
}

export default function CityFAQ({ city, primaryColor }: CityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `Quais serviços estão disponíveis em ${city.name}?`,
      answer: `Oferecemos uma ampla gama de serviços domésticos em ${city.name}, incluindo reparo de ar condicionado, instalação de climatização, reparo de eletrodomésticos, encanamento, trabalhos elétricos e muito mais. Navegue pela nossa página de serviços para ver a lista completa.`,
    },
    {
      question: `Como encontro um prestador de serviços em ${city.name}?`,
      answer: `Simplesmente navegue pelos nossos serviços, selecione o serviço que você precisa e verá uma lista de prestadores verificados em ${city.name}. Você pode comparar notas, avaliações e entrar em contato diretamente.`,
    },
    {
      question: `Todos os prestadores de serviços são verificados?`,
      answer: `Sim, todos os prestadores de serviços listados em nossa plataforma são verificados, licenciados e segurados. Garantimos qualidade e confiabilidade para nossos clientes.`,
    },
    {
      question: `Quais áreas em ${city.name} vocês cobrem?`,
      answer: `Cobrimos todas as áreas dentro de ${city.name} e regiões circundantes. A maioria dos prestadores oferece serviços em toda a cidade e área metropolitana.`,
    },
    {
      question: `Com que rapidez posso obter serviço em ${city.name}?`,
      answer: `Os tempos de resposta variam por prestador, mas a maioria oferece serviço no mesmo dia ou no dia seguinte. Você pode entrar em contato diretamente com os prestadores para discutir disponibilidade e agendamento.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Perguntas Frequentes Sobre {city.name}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-black pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: primaryColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

