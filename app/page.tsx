import { getBasicInfo, getServices, getStates, getCities } from './lib/database';
import HeroSection from './components/HeroSection';
import AboutUs from './home/AboutUs';
import Services from './home/Services';
import PopularCities from './home/PopularCities';
import WhyWeAreFirstChoice from './home/WhyWeAreFirstChoice';
import OurProcess from './home/OurProcess';
import Testimonials from './home/Testimonials';
import ServiceAreas from './home/ServiceAreas';
import FAQ from './home/FAQ';
import CTA from './home/CTA';
import type { BasicInfo } from './lib/database';

export default async function Home() {
  // Fetch data from Appwrite at render time (Server Component - great for SEO)
  const basicInfo: BasicInfo | null = await getBasicInfo();
  const services = await getServices(12);
  const states = await getStates(12);
  const cities = await getCities(12);

  // Fallback data if database fetch fails
  const siteData = basicInfo || {
    siteName: 'ServiceFinder Brazil',
    tagline: 'Find Trusted Local Service Providers Near You',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg',
    bannerAlt: 'Local Services Directory in Brazil',
    primaryColor: '#0F4C81',
    secondaryColor: '#F59E0B',
    defaultCity: 'Belo Horizonte',
    defaultState: 'Minas Gerais',
    defaultService: 'Air Conditioner Repair',
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection basicInfo={siteData} />
      <AboutUs basicInfo={siteData} />
      <Services basicInfo={siteData} services={services} />
      <WhyWeAreFirstChoice basicInfo={siteData} />
      <PopularCities basicInfo={siteData} cities={cities} />
      <ServiceAreas basicInfo={siteData} states={states} />
      <OurProcess basicInfo={siteData} />
      <Testimonials basicInfo={siteData} />
      <FAQ basicInfo={siteData} />
      <CTA basicInfo={siteData} />
    </div>
  );
}
