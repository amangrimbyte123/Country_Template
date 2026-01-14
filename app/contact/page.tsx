import { getBasicInfo } from '../lib/database';
import type { BasicInfo } from '../lib/database';
import ContactPageClient from './ContactPageClient';

export default async function ContactPage() {
  const basicInfo: BasicInfo | null = await getBasicInfo();
  return <ContactPageClient basicInfo={basicInfo} />;
}
