import { ContactComponent } from "@/components/common/Contact";
import { FAQComponent } from "@/components/common/FAQ";
import { FooterComponent } from "@/components/common/Footer";
import { HeaderComponent } from "@/components/common/Header";

export default function Page() {
  return (
    <>
      <HeaderComponent />
      <FAQComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
