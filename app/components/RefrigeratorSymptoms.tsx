'use client';

import type { BasicInfo } from '../lib/database';

interface RefrigeratorSymptomsProps {
  basicInfo: Partial<BasicInfo>;
  cityName?: string;
}

export default function RefrigeratorSymptoms({ basicInfo, cityName }: RefrigeratorSymptomsProps) {
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultCity = cityName || basicInfo?.defaultCity || 'Cuiabá';

  const symptoms = [
    'Vazamento de gás refrigerante ou fluido interno.',
    'Termostato com defeito ou compressor danificado.',
    'Placa eletrônica com defeito ou falha elétrica.',
    'Luz que não acende ou acúmulo excessivo de gelo.',
    'Vazamento de água ou ruídos anormais ao ligar.',
    'Alimentos estragam mesmo com refrigeração ativa.',
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Geladeira com Problema em {defaultCity}?{' '}
                <span className="block" style={{ color: primaryColor }}>
                  Procure pelos Sinais
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Problemas na geladeira podem ser causados por falhas elétricas, vazamentos ou peças desgastadas.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Preste atenção aos sintomas e evite o estrago de alimentos ou danos maiores ao equipamento.
              </p>

              <ul className="space-y-3 pt-2">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span 
                      className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                      style={{ backgroundColor: '#000' }}
                    ></span>
                    <span className="text-lg text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Graphic with Refrigerators */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Blue Circle Background */}
              <div 
                className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full"
                style={{ backgroundColor: primaryColor }}
              ></div>

              {/* Refrigerators Container */}
              <div className="relative h-full flex items-end justify-start pl-4">
                {/* Black Bottom-Freezer Refrigerator (Foreground, Left) - Open Doors */}
                <div className="absolute left-0 bottom-0 w-36 md:w-44 h-72 md:h-96 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-2xl z-30 transform hover:scale-105 transition-transform">
                  {/* Top Refrigerator Section - Open */}
                  <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-blue-50 to-white rounded-t-lg">
                    {/* Interior Light */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50"></div>
                    
                    {/* Food Items */}
                    <div className="absolute top-4 left-3 right-3 h-1 bg-gray-300 rounded"></div>
                    {/* Roasted Chicken */}
                    <div className="absolute top-8 left-4 w-6 h-5 bg-orange-600 rounded-sm"></div>
                    {/* Eggs */}
                    <div className="absolute top-8 left-11 w-3 h-3 bg-white rounded-full border border-gray-300"></div>
                    <div className="absolute top-8 left-16 w-3 h-3 bg-white rounded-full border border-gray-300"></div>
                    
                    <div className="absolute top-16 left-3 right-3 h-1 bg-gray-300 rounded"></div>
                    {/* Bottles */}
                    <div className="absolute top-20 left-4 w-2 h-6 bg-green-600 rounded-sm"></div>
                    <div className="absolute top-20 left-7 w-2 h-6 bg-blue-600 rounded-sm"></div>
                    
                    {/* Vegetable Drawer */}
                    <div className="absolute bottom-8 left-3 right-3 h-8 bg-green-100 rounded border border-green-200">
                      <div className="absolute top-1 left-1 right-1 h-1 bg-green-300 rounded"></div>
                      <div className="absolute top-3 left-1 right-1 h-1 bg-green-300 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Bottom Freezer Section - Open */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-100 to-blue-50 rounded-b-lg">
                    {/* Freezer Drawers */}
                    <div className="absolute top-2 left-2 right-2 h-4 bg-white/80 rounded border border-gray-200">
                      <div className="absolute top-1 left-1 right-1 h-0.5 bg-gray-300 rounded"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 h-4 bg-white/80 rounded border border-gray-200">
                      <div className="absolute top-1 left-1 right-1 h-0.5 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Door Handles */}
                  <div className="absolute top-1/3 -left-1 w-1 h-12 bg-gray-400 rounded-full"></div>
                  <div className="absolute bottom-1/3 -left-1 w-1 h-8 bg-gray-400 rounded-full"></div>
                </div>

                {/* Silver Single-Door Refrigerator (Middle) */}
                <div className="absolute left-32 md:left-40 bottom-4 w-28 md:w-36 h-64 md:h-80 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-xl z-20 transform hover:scale-105 transition-transform">
                  {/* Door Handle */}
                  <div className="absolute top-1/2 right-2 w-1 h-16 bg-gray-500 rounded-full"></div>
                  {/* Reflective shine */}
                  <div className="absolute top-4 left-2 w-16 h-20 bg-white/20 rounded"></div>
                </div>

                {/* Silver Side-by-Side Refrigerator (Background, Right) */}
                <div className="absolute left-56 md:left-72 bottom-0 w-32 md:w-40 h-80 md:h-96 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-2xl z-10 transform hover:scale-105 transition-transform">
                  {/* Water and Ice Dispenser on Left Door */}
                  <div className="absolute top-8 left-2 w-12 h-16 bg-gray-400 rounded flex flex-col items-center justify-center">
                    {/* Digital Display */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-[6px] text-white font-bold">-03-</span>
                    </div>
                    {/* Dispenser Buttons */}
                    <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-500 rounded"></div>
                  </div>
                  
                  {/* Door Handles */}
                  <div className="absolute top-1/2 right-2 w-1 h-16 bg-gray-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-2 w-1 h-16 bg-gray-500 rounded-full"></div>
                  
                  {/* Reflective shine */}
                  <div className="absolute top-6 right-4 w-12 h-24 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

