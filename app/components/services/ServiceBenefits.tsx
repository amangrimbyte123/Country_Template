'use client';

import type { Service } from '@/app/lib/database';

interface ServiceBenefitsProps {
  service: Service;
  primaryColor: string;
  secondaryColor: string;
}

export default function ServiceBenefits({ service, primaryColor, secondaryColor }: ServiceBenefitsProps) {
  const benefits = [
    {
      title: 'Atendimento rápido',
      description: 'Chegamos em poucas horas após o contato para resolver o problema.',
      icon: '⚡',
    },
    {
      title: 'Diagnóstico preciso',
      description: 'Identificamos a causa exata da falha para consertos mais eficientes.',
      icon: '🔍',
    },
    {
      title: 'Uso de peças originais',
      description: 'Trabalhamos apenas com peças originais para maior durabilidade.',
      icon: '✅',
    },
    {
      title: 'Garantia no serviço',
      description: 'Serviços com garantia e suporte caso ocorra qualquer imprevisto.',
      icon: '🛡️',
    },
    {
      title: 'Pagamento facilitado',
      description: 'Aceitamos cartão e Pix para sua maior comodidade na hora do conserto.',
      icon: '💳',
    },
    {
      title: 'Técnicos certificados',
      description: 'Profissionais experientes e certificados para seu total confiança.',
      icon: '👨‍🔧',
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Vantagens de contratar um técnico de {service.name.toLowerCase()} perto de mim
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: `${secondaryColor}20` }}
              >
                {benefit.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

