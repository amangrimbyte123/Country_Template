'use client';

import type { Service } from '@/app/lib/database';

interface ServiceWhyChooseProps {
  service: Service;
  primaryColor: string;
  secondaryColor: string;
  defaultCity: string;
}

export default function ServiceWhyChoose({ service, primaryColor, secondaryColor, defaultCity }: ServiceWhyChooseProps) {
  const reasons = [
    'Técnicos experientes e certificados',
    'Atendimento a domicílio em cidade e região',
    'Diagnóstico técnico preciso e transparente',
    'Garantia de 90 dias em todos os serviços',
    'Manutenção preventiva para prolongar a vida útil do equipamento',
    'Atendimento em todos os bairros da cidade',
  ];

  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Por que escolher {service.name}?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Precisando de conserto urgente? Nossa equipe em {defaultCity} atende rapidamente em casos emergenciais, com técnicos prontos para agir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-3 p-4">
              <svg 
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                style={{ color: secondaryColor }}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-lg">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

