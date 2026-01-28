'use client';

import { useState } from 'react';
import type { BasicInfo } from '../lib/database';

interface FAQProps {
  basicInfo: Partial<BasicInfo>;
}

export default function FAQ({ basicInfo }: FAQProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como posso buscar serviços na plataforma?',
      answer: 'Simplesmente use a barra de pesquisa no topo da página. Digite o serviço que você está procurando, selecione sua localização e clique em buscar. Você também pode navegar por categorias ou usar nossos filtros avançados para refinar seus resultados.',
    },
    {
      question: 'Todas as empresas são verificadas?',
      answer: 'Sim! Toda empresa listada em nossa plataforma passa por um processo abrangente de verificação. Verificamos licenças comerciais, informações de contato e autenticidade para garantir que você veja apenas prestadores de serviços legítimos e confiáveis.',
    },
    {
      question: 'Como posso entrar em contato com um prestador de serviços?',
      answer: 'Depois de encontrar um prestador de serviços que te interessa, clique na listagem para ver o perfil completo. Você encontrará informações de contato incluindo telefone, email e às vezes uma opção de mensagem direta através da nossa plataforma.',
    },
    {
      question: 'Posso deixar uma avaliação depois de usar um serviço?',
      answer: 'Absolutamente! Encorajamos todos os usuários a compartilharem suas experiências. Depois de usar um serviço, você pode fazer login na sua conta e deixar uma avaliação detalhada com notas. Seu feedback ajuda outros usuários a tomarem decisões informadas.',
    },
    {
      question: 'A plataforma é gratuita para usar?',
      answer: 'Sim, pesquisar e navegar em nosso diretório é completamente gratuito para usuários. Os prestadores de serviços podem ter seus próprios preços para os serviços que oferecem, mas usar nossa plataforma para encontrá-los não custa nada.',
    },
    {
      question: 'Como posso reportar um problema com uma listagem?',
      answer: 'Se você encontrar algum problema com uma listagem, pode reportá-la diretamente na página da listagem usando o botão "Reportar". Nossa equipe revisa todos os relatórios e toma as medidas apropriadas para manter a qualidade do nosso diretório.',
    },
    {
      question: 'As empresas podem se adicionar ao diretório?',
      answer: 'Sim! Damos as boas-vindas às empresas para se juntarem à nossa plataforma. Os prestadores de serviços podem criar um perfil, ser verificados e começar a receber consultas de clientes em potencial. Visite nossa página de registro de empresas para começar.',
    },
    {
      question: 'Vocês cobrem todas as cidades do Brasil?',
      answer: 'Estamos continuamente expandindo nossa cobertura. Atualmente, temos listagens em mais de 500 cidades em todo o Brasil, com novos locais sendo adicionados regularmente. Use o filtro de localização para ver se sua área está coberta.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Perguntas{' '}
              <span className="block" style={{ color: primaryColor }}>
                Frequentes
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: secondaryColor }}></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para perguntas comuns sobre nossa plataforma e serviços
            </p>
          </div>

          {/* FAQ Items */}
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

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Ainda tem perguntas?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: secondaryColor }}
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

