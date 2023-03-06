import { HeaderComponent } from "@/components/Header";
import { HeroComponent } from "@/components/Hero";
import { FeaturesComponent } from "@/components/Features";
import { FAQComponent } from "@/components/FAQ";
import { ContactComponent } from "@/components/Contact";
import { FooterComponent } from "@/components/Footer";

export default function App() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <FeaturesComponent />
      <FAQComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
