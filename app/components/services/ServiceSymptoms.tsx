'use client';

import type { Service } from '@/app/lib/database';

interface ServiceSymptomsProps {
  service: Service;
  primaryColor: string;
  secondaryColor: string;
}

export default function ServiceSymptoms({ service, primaryColor, secondaryColor }: ServiceSymptomsProps) {
  const symptoms = [
    'Vazamento de gás refrigerante ou fluido interno',
    'Termostato com falha ou compressor danificado',
    'Placa eletrônica com defeito ou falha elétrica',
    'Luz que não acende ou formação excessiva de gelo',
    'Vazamento de água ou ruídos anormais ao ligar',
    'Alimentos estragam mesmo com refrigeração ativa',
  ];

  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {service.name.replace(/Conserto de |Reparo de |Serviço de /gi, '')} com defeito? Veja os sinais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Problemas podem ser causados por falhas elétricas, vazamentos ou peças desgastadas. Fique atento aos sintomas e evite perda de alimentos ou danos maiores ao equipamento.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: secondaryColor }}
              ></span>
              <span className="text-gray-700">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

