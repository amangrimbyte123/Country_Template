import type { City } from '@/app/lib/database';

interface CityWhyChooseProps {
  city: City;
  primaryColor: string;
}

export default function CityWhyChoose({ city, primaryColor }: CityWhyChooseProps) {
  const reasons = [
    {
      icon: '🏆',
      title: 'Prestadores Mais Bem Avaliados',
      description: `Acesso aos prestadores de serviços mais confiáveis e bem avaliados em ${city.name}`,
    },
    {
      icon: '⚡',
      title: 'Resposta Rápida',
      description: 'Conecte-se com prestadores que respondem rapidamente às suas solicitações de serviço',
    },
    {
      icon: '💰',
      title: 'Preços Competitivos',
      description: 'Compare preços de vários prestadores para obter o melhor valor',
    },
    {
      icon: '🛡️',
      title: 'Verificado e Segurado',
      description: 'Todos os prestadores listados são verificados, licenciados e segurados para sua tranquilidade',
    },
  ];

  return (
    <section className="py-16 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Por Que Escolher Prestadores de Serviços em {city.name}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

