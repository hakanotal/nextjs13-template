import { HeaderComponent } from '@/components/Header';
import { FooterComponent } from '@/components/Footer';
import { HeroComponent } from '@/components/Hero';
import { FeaturesComponent } from '@/components/Features';
import { ContactUs } from '@/components/ContactUs';
import { FAQ } from '@/components/FAQ';

export default function App() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <FeaturesComponent />
      <FAQ />
      <ContactUs />
      <FooterComponent />
    </>
  );
}
