import { getSingleService, getBasicInfo } from '../lib/database';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const basicInfo = await getBasicInfo();
  const service = await getSingleService();
  
  if (service) {
    return {
      title: `${service.name} – ${basicInfo?.siteName || 'ServiceFinder Brazil'}`,
      description: service.seoDescription || service.description,
      keywords: `${service.name}, ${service.category || ''}, ${basicInfo?.metaKeywords || ''}`,
    };
  }
  
  return {
    title: `Serviço – ${basicInfo?.siteName || 'ServiceFinder Brazil'}`,
    description: basicInfo?.metaDescription || 'Encontre prestadores de serviços confiáveis perto de você.',
    keywords: basicInfo?.metaKeywords || 'services, service providers, home services',
  };
}

export default async function ServicesPage() {
  const service = await getSingleService();
  
  // Redirect to single service page if service exists and has a slug
  if (service && service.slug) {
    redirect(`/services/${service.slug}`);
  }

  // If no service found, show error message
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-[72px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Serviço Não Encontrado</h1>
        <p className="text-gray-600 text-lg">Nenhum serviço disponível no momento.</p>
      </div>
    </div>
  );
}

