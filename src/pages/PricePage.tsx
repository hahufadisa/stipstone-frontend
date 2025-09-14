import React from "react";
import { Container, Box, Title, Text, Grid } from "@mantine/core";
import PriceTable from "../components/Sections/PriceTable";
import AdvantagesSection from "../components/Sections/AdvantagesSection";
import ContactForm from "../components/ContactForm/ContactForm";
import SEOHead from "../components/SEO/SEOHead";
import { getBreadcrumbStructuredData } from "../components/SEO/StructuredData";

const PricePage: React.FC = () => {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Главная", url: "https://stipstone-zelenograd.ru/" },
    {
      name: "Цены на изделия из камня",
      url: "https://stipstone-zelenograd.ru/prices",
    },
  ]);

  return (
    <>
      <SEOHead
        title="Цены на изделия из камня в Зеленограде | Прайс-лист столешниц, подоконников | StipStone"
        description="Цены на изделия из камня в Зеленограде от StipStone. Актуальный прайс-лист на столешницы, подоконники, мойки из искусственного камня. Стоимость работ и материалов. ☎ +7 (904) 355-47-89"
        keywords="цены камень зеленоград, стоимость столешниц зеленоград, цена подоконники камень зеленоград, прайс лист камень зеленоград, стоимость изделий камень зеленоград, цены искусственный камень зеленоград, стоимость акриловый камень, цена кварцевый камень зеленоград"
        ogTitle="Цены на изделия из камня в Зеленограде - StipStone"
        ogDescription="Актуальные цены на изделия из камня в Зеленограде: столешницы, подоконники, мойки из искусственного камня. Прозрачное ценообразование."
        ogImage="/public/kitchen3.jpg"
        ogUrl="https://stipstone-zelenograd.ru/prices"
        canonical="https://stipstone-zelenograd.ru/prices"
        structuredData={breadcrumbData}
      />

      <Box className="price-page">
        <Container size="xl" py="xl">
          <Box className="price-page-header" mb="xl">
            <Title order={1} className="price-page-title">
              Прайс лист
            </Title>
            <Text className="price-page-description" mt="md">
              Компания StipStone всегда за "прозрачное ценообразование". На
              нашем сайте представлена стоимость искусственного камня, стоимость
              работ и дополнительных услуг. Вы можете самостоятельно произвести
              расчёт цены изделия из искусственного камня через
              онлайн-калькулятор, или связаться с нашим отделом продаж.
              Отсутствие лишних посредников гарантирует конкурентоспособные цены
              и сжатые сроки выполнения заказа.
            </Text>
          </Box>

          <Box className="main-price-section" mb="xl">
            <Title order={2} className="section-title" mb="lg">
              Стоимость материала и базовых работ
            </Title>
            <PriceTable />
          </Box>

          <Box className="additional-works-section" mb="xl">
            <Title order={2} className="section-title" mb="lg">
              Стоимость дополнительных работ
            </Title>
            <PriceTable type="additional" />
          </Box>

          <Box className="additional-services-section" mb="xl">
            <Title order={2} className="section-title" mb="lg">
              Дополнительные услуги
            </Title>
            <PriceTable type="services" />
          </Box>

          <Box className="advantages-section" mb="xl">
            <AdvantagesSection />
          </Box>

          <Box className="contact-form-section">
            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Box className="contact-form-wrapper">
                  <Title order={2} className="contact-form-title" mb="md">
                    Бесплатная консультация и вызов замерщика
                  </Title>
                  <Text className="contact-form-description" mb="lg">
                    Оставьте заявку на консультацию и мы перезвоним уже через 1
                    минуту
                  </Text>
                  <ContactForm />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PricePage;
