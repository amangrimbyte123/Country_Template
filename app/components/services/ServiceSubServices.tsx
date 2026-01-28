'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/app/lib/database';

interface ServiceSubServicesProps {
  service: Service;
  primaryColor: string;
  secondaryColor: string;
}

export default function ServiceSubServices({ service, primaryColor, secondaryColor }: ServiceSubServicesProps) {
  // Default sub-services - can be customized per service
  const subServices = [
    {
      title: 'Manutenção de motor',
      description: 'Motor não liga? Fazemos conserto rápido e garantido.',
      icon: '⚙️',
    },
    {
      title: 'Recarga de gás',
      description: 'Parou de funcionar? Recarga de gás com urgência agora.',
      icon: '🔧',
    },
    {
      title: 'Conserto de placa eletrônica',
      description: 'Painel sem resposta? Reparamos placas eletrônicas no mesmo dia.',
      icon: '💻',
    },
    {
      title: 'Retirada de vazamento',
      description: 'Detectamos e corrigimos vazamentos com solução definitiva.',
      icon: '🔍',
    },
    {
      title: 'Troca de termostato',
      description: 'Temperatura desregulada? Trocamos o termostato com ajuste imediato.',
      icon: '🌡️',
    },
    {
      title: 'Limpeza de sistema',
      description: 'Mau cheiro ou água acumulada? Fazemos a limpeza completa.',
      icon: '🧹',
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Serviços de Assistência Técnica para {service.name}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Quando você busca por "{service.name.toLowerCase()} perto de mim", nós entregamos um serviço completo:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subServices.map((subService, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6"
          >
            <div className="text-5xl mb-4 text-center">{subService.icon}</div>
            <h3 className="text-xl font-bold text-black mb-3 text-center">
              {subService.title}
            </h3>
            <p className="text-gray-600 text-center mb-4">
              {subService.description}
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: secondaryColor }}
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

