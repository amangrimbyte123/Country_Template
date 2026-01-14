import type { BasicInfo } from '../lib/database';

interface WhyChooseUsProps {
  basicInfo: Partial<BasicInfo>;
}

export default function WhyChooseUs({ basicInfo }: WhyChooseUsProps) {
  const siteName = basicInfo?.siteName || 'ServiceFinder Brazil';
  
  const features = [
    {
      icon: '🔍',
      title: 'Easy Search',
      description: 'Find exactly what you need with our powerful search engine',
    },
    {
      icon: '✓',
      title: 'Verified Listings',
      description: 'All businesses are verified for quality and authenticity',
    },
    {
      icon: '⭐',
      title: 'User Reviews',
      description: 'Real reviews from real customers to help you decide',
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access our directory anytime, anywhere on any device',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Why Choose {siteName}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

