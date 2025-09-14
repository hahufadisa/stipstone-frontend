import { AppShell } from "@mantine/core";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AdvantagesSection from "../components/Sections/AdvantagesSection";
import ProductsSection from "../components/Sections/ProductsSection";
import ContactSection from "../components/Sections/ContactSection";
import SEOHead from "../components/SEO/SEOHead";
import {
  getOrganizationStructuredData,
  getFAQStructuredData,
} from "../components/SEO/StructuredData";

const HomePage = () => {
  const organizationData = getOrganizationStructuredData();
  const faqData = getFAQStructuredData();
  const structuredData = [organizationData, faqData];

  return (
    <>
      <SEOHead
        title="StipStone - изделия из камня в Зеленограде | Столешницы, подоконники из искусственного камня"
        description="Изделия из камня в Зеленограде от StipStone. Столешницы, подоконники, мойки из искусственного камня. Замер, изготовление и установка. Гарантия качества. ☎ +7 (904) 355-47-89"
        keywords="изделие из камня зеленоград, столешницы зеленоград, подоконники из камня зеленоград, искусственный камень зеленоград, акриловый камень зеленоград, кварцевый камень зеленоград, мойки из камня зеленоград, барные стойки зеленоград, изготовление камня зеленоград, установка столешниц зеленоград, StipStone"
        ogTitle="StipStone - изделия из камня в Зеленограде"
        ogDescription="Изделия из камня в Зеленограде от StipStone. Столешницы, подоконники, мойки из искусственного камня. Замер, изготовление и установка."
        ogImage="/public/kitchen.jpg"
        ogUrl="https://stipstone-zelenograd.ru/"
        canonical="https://stipstone-zelenograd.ru/"
        structuredData={structuredData}
      />

      <AppShell padding={0}>
        <AppShell.Main>
          <HeroSlider />
          <AdvantagesSection />
          <ProductsSection />
          <ContactSection />
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default HomePage;
