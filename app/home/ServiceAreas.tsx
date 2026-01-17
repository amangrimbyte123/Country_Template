'use client';

import type { BasicInfo, State } from '../lib/database';
import Link from 'next/link';

interface ServiceAreasProps {
  basicInfo: Partial<BasicInfo>;
  states: State[];
}

export default function ServiceAreas({ basicInfo, states }: ServiceAreasProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const contactPhone = basicInfo?.contactPhone || '+55 31 99999-9999';
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';

  if (!states || states.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Section - Service Areas */}
              <div className="bg-white p-8 md:p-12">
                <h2 
                  className="text-3xl md:text-4xl font-bold text-center mb-8"
                  style={{ color: secondaryColor }}
                >
                  Servimos com Orgulho as Seguintes Áreas
                </h2>
                
                {/* States Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {states.slice(0, 12).map((state) => (
                    <Link
                      key={state.$id || state.slug}
                      href={`/states/${state.slug}`}
                      className="block"
                    >
                      <div 
                        className="px-4 py-3 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-md transform hover:scale-105"
                        style={{ 
                          backgroundColor: `${secondaryColor}15`,
                          color: secondaryColor,
                        }}
                      >
                        {state.name}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Button */}
                <div className="text-right mt-6">
                  <Link
                    href="/states"
                    className="inline-block px-6 py-3 rounded-lg text-white font-bold transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Ver Todos
                  </Link>
                </div>
              </div>

              {/* Right Section - Call to Action */}
              <div 
                className="p-8 md:p-12 flex flex-col justify-center items-center text-center"
                style={{ backgroundColor: secondaryColor }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Precisa de Serviço Rápido?
                </h3>
                <p className="text-xl md:text-2xl font-bold text-white mb-8">
                  Ligue Agora para um Orçamento Grátis!
                </p>

                {/* Phone Icon and Number */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
                    <svg 
                      className="w-12 h-12"
                      style={{ color: secondaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <div className="text-white">
                    <p className="text-sm font-medium mb-1 opacity-90">LIGUE HOJE</p>
                    <a 
                      href={`tel:${contactPhone.replace(/\s/g, '')}`}
                      className="text-2xl md:text-3xl font-bold hover:underline"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

