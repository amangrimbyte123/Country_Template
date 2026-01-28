'use client';

import { useState } from 'react';
import type { Service } from '@/app/lib/database';

interface ServiceFAQProps {
  service: Service;
  primaryColor: string;
  secondaryColor: string;
}

export default function ServiceFAQ({ service, primaryColor, secondaryColor }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `Como saber se sua ${service.name.replace(/Conserto de |Reparo de |Serviço de /gi, '').toLowerCase()} precisa de conserto?`,
      answer: `Se sua ${service.name.replace(/Conserto de |Reparo de |Serviço de /gi, '').toLowerCase()} parou de funcionar, está fazendo barulhos estranhos ou apresenta vazamentos, é hora de buscar uma assistência técnica.`,
    },
    {
      question: 'Qual é o valor médio para consertar?',
      answer: 'O custo do conserto pode variar conforme o defeito identificado e o modelo. Em média, os preços ficam entre R$150 e R$1000, incluindo mão de obra e, se necessário, troca de peças.',
    },
    {
      question: 'Vocês realizam atendimento em domicílio?',
      answer: 'Sim, oferecemos atendimento técnico em domicílio em toda a cidade. Nossa equipe vai até você com todos os equipamentos necessários para realizar o reparo no local.',
    },
    {
      question: 'Quanto tempo leva para consertar?',
      answer: 'A maioria dos consertos é resolvida em até 2 a 4 horas, dependendo da complexidade. Problemas mais técnicos podem levar até 24 horas.',
    },
    {
      question: 'Vocês atendem fora do horário comercial ou aos finais de semana?',
      answer: 'Sim! Nossa assistência técnica funciona 24 horas, inclusive à noite, finais de semana e feriados. Estamos sempre prontos para atender emergências.',
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Trabalhamos com diversas formas de pagamento: dinheiro, Pix, cartões de crédito e débito, além de transferências bancárias.',
    },
    {
      question: 'Vale a pena consertar um equipamento antigo ou é melhor comprar um novo?',
      answer: 'Depende da situação. Se o equipamento tiver menos de 10 anos e o conserto for financeiramente viável, vale a pena reparar. Nossa equipe pode avaliar o estado e orientar você com total transparência.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Perguntas frequentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-black pr-8">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 flex-shrink-0 transition-transform duration-300`}
                style={{ 
                  color: primaryColor,
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 py-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

