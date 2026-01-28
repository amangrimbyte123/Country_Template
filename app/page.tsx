import { getBasicInfo, getSingleService, getStates, getCities } from './lib/database';
import HeroSection from './components/HeroSection';
import AboutUs from './home/AboutUs';
import TypesOfRefrigerators from './components/TypesOfRefrigerators';
import RefrigeratorServices from './components/RefrigeratorServices';
import RefrigeratorCTA from './components/RefrigeratorCTA';
import RefrigeratorSymptoms from './components/RefrigeratorSymptoms';
import RefrigeratorAdvantages from './components/RefrigeratorAdvantages';
import RefrigeratorBrands from './components/RefrigeratorBrands';
import ServiceAreasSection from './components/ServiceAreasSection';
import PopularCitiesSection from './components/PopularCitiesSection';
import WhyWeAreFirstChoice from './home/WhyWeAreFirstChoice';
import OurProcess from './home/OurProcess';
import Testimonials from './home/Testimonials';
import FAQ from './home/FAQ';
import CTA from './home/CTA';
import type { BasicInfo } from './lib/database';

export default async function Home() {
  // Fetch data from Appwrite at render time (Server Component - great for SEO)
  const basicInfo: BasicInfo | null = await getBasicInfo();
  const service = await getSingleService(); // Get single service instead of multiple
  const states = await getStates(12);
  const cities = await getCities(12);

  // Fallback data if database fetch fails
  const siteData = basicInfo || {
    siteName: 'ServiceFinder Brazil',
    tagline: 'Encontre Prestadores de Serviços Locais Confiáveis Perto de Você',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg',
    bannerAlt: 'Diretório de Serviços Locais no Brasil',
    primaryColor: '#0F4C81',
    secondaryColor: '#F59E0B',
    defaultCity: 'Belo Horizonte',
    defaultState: 'Minas Gerais',
    defaultService: 'Reparo de Ar Condicionado',
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection basicInfo={siteData} service={service} />
      <AboutUs basicInfo={siteData} />
      <TypesOfRefrigerators basicInfo={siteData} />
      <RefrigeratorServices basicInfo={siteData} />
      <RefrigeratorCTA basicInfo={siteData} />
      <RefrigeratorSymptoms basicInfo={siteData} />
      <PopularCitiesSection basicInfo={siteData} cities={cities} />
      <RefrigeratorCTA basicInfo={siteData} />
      <RefrigeratorAdvantages basicInfo={siteData} />
      <RefrigeratorBrands basicInfo={siteData} />
      <ServiceAreasSection basicInfo={siteData} states={states} />
      <WhyWeAreFirstChoice basicInfo={siteData} />
      <OurProcess basicInfo={siteData} />
      <Testimonials basicInfo={siteData} />
      <FAQ basicInfo={siteData} />
      <CTA basicInfo={siteData} />
    </div>
  );
}
