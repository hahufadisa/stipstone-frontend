import AdvantagesSection from "../components/Sections/AdvantagesSection";
import ProductsSection from "../components/Sections/ProductsSection";
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
        description="Изделия из камня в Зеленограде от StipStone. Столешницы, подоконники, мойки из искусственного камня. Замер, изготовление и установка. Гарантия качества. ☎ +7 (985) 086-70-21"
        keywords="изделие из камня Зеленоград, столешницы Зеленоград, подоконники из камня Зеленоград, искусственный камень Зеленоград, акриловый камень Зеленоград, кварцевый камень Зеленоград, мойки из камня Зеленоград, барные стойки Зеленоград, изготовление камня Зеленоград, установка столешниц Зеленоград, StipStone"
        ogTitle="StipStone - изделия из камня в Зеленограде"
        ogDescription="Изделия из камня в Зеленограде от StipStone. Столешницы, подоконники, мойки из искусственного камня. Замер, изготовление и установка."
        ogImage="/kitchen.jpg"
        ogUrl="https://stipstone.ru/"
        canonical="https://stipstone.ru/"
        structuredData={structuredData}
      />
      <AdvantagesSection />
      <ProductsSection />
    </>
  );
};

export default HomePage;
