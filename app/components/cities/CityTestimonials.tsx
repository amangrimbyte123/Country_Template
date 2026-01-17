import type { City } from '@/app/lib/database';

interface CityTestimonialsProps {
  city: City;
  primaryColor: string;
}

export default function CityTestimonials({ city, primaryColor }: CityTestimonialsProps) {
  // Mock testimonials - in a real app, these would come from the database
  const testimonials = [
    {
      name: 'Maria Silva',
      location: city.name,
      rating: 5,
      text: `Encontrei um excelente serviço de reparo de ar condicionado em ${city.name} através desta plataforma. Resposta rápida e serviço profissional!`,
      service: 'Reparo de Ar Condicionado',
    },
    {
      name: 'João Santos',
      location: city.name,
      rating: 5,
      text: `O serviço de reparo de lavadora foi excelente. O técnico chegou no horário e consertou o problema rapidamente.`,
      service: 'Reparo de Eletrodomésticos',
    },
    {
      name: 'Ana Costa',
      location: city.name,
      rating: 5,
      text: `Altamente recomendo esta plataforma para encontrar serviços domésticos confiáveis em ${city.name}. Muito satisfeita com a instalação de climatização.`,
      service: 'Instalação de Climatização',
    },
  ];

  return (
    <section className="py-16 mb-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          O Que Nossos Clientes Dizem Sobre {city.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    style={{ color: primaryColor }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-black">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm mt-1" style={{ color: primaryColor }}>
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

