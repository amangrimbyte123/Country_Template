import { getCities, getBasicInfo } from '../lib/database';
import type { Metadata } from 'next';
import CitiesPageClient from './CitiesPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const basicInfo = await getBasicInfo();
  
  return {
    title: `Todas as Cidades – ${basicInfo?.siteName || 'ServiceFinder Brazil'}`,
    description: basicInfo?.metaDescription || 'Navegue por todas as cidades e encontre prestadores de serviços confiáveis na sua área.',
    keywords: basicInfo?.metaKeywords || 'cities, service providers, home services',
  };
}

export default async function CitiesPage() {
  const cities = await getCities(1000); // Get all cities
  const basicInfo = await getBasicInfo();
  
  const primaryColor = basicInfo?.primaryColor || '#0F4C81';
  const secondaryColor = basicInfo?.secondaryColor || '#F59E0B';
  const defaultState = basicInfo?.defaultState || 'Minas Gerais';

  return (
    <CitiesPageClient 
      cities={cities}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      defaultState={defaultState}
    />
  );
}

