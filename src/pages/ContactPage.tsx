import { Container, Grid, Box } from "@mantine/core";
import ContactInfo from "../components/ContactForm/ContactInfo";
import ContactForm from "../components/ContactForm/ContactForm";
import SEOHead from "../components/SEO/SEOHead";
import { getBreadcrumbStructuredData } from "../components/SEO/StructuredData";

const ContactPage = () => {
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Главная", url: "https://stipstone-zelenograd.ru/" },
    { name: "Контакты", url: "https://stipstone-zelenograd.ru/contacts" },
  ]);

  return (
    <>
      <SEOHead
        title="Контакты StipStone в Зеленограде | Изделия из камня | Адрес, телефон, заказать консультацию"
        description="Контакты StipStone в Зеленограде. Заказать изделия из камня: столешницы, подоконники, мойки. Адрес: Георгиевский проспект 33а. Телефон: +7 (904) 355-47-89. Бесплатная консультация."
        keywords="контакты камень зеленоград, StipStone зеленоград адрес, телефон изделия камень зеленоград, заказать столешницы зеленоград, консультация камень зеленоград, Георгиевский проспект 33а, замер камень зеленоград"
        ogTitle="Контакты StipStone в Зеленограде - изделия из камня"
        ogDescription="Контакты StipStone в Зеленограде. Заказать изделия из камня: столешницы, подоконники, мойки. Бесплатная консультация и замер."
        ogImage="/kitchen6.jpg"
        ogUrl="https://stipstone-zelenograd.ru/contacts"
        canonical="https://stipstone-zelenograd.ru/contacts"
        structuredData={breadcrumbData}
      />

      <Box className="contact-page">
        <Container size="xl" py="xl">
          <Grid gutter="xl" className="contact-page-grid">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box className="contact-info-section">
                <ContactInfo />
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box className="contact-form-section">
                <ContactForm />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
