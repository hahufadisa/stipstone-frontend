import { Container, Grid, Image, Title, Box } from "@mantine/core";
import { motion } from "framer-motion";
import SEOHead from "../components/SEO/SEOHead";
import { portfolioImages } from "../../public/data";

const PortfolioPage = () => {
  return (
    <>
      <SEOHead
        title="Портфолио работ из камня | StipStone Зеленоград"
        description="Фото наших работ из камня: столешницы, подоконники, мойки, барные стойки, облицовка. Портфолио StipStone в Зеленограде."
        keywords="портфолио камень Зеленоград, работы из камня Зеленоград, столешницы подоконники мойки барные стойки фото"
        ogTitle="Портфолио работ StipStone"
        ogDescription="Наши готовые работы из акрилового и кварцевого камня в Зеленограде."
        ogImage="/portfolio/work1.jpg"
        ogUrl="https://stipstone-zelenograd.ru/portfolio"
        canonical="https://stipstone-zelenograd.ru/portfolio"
      />

      <Box className="portfolio-page">
        <Container size="xl" py="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title order={1} ta="center" mb="xl" className="portfolio-title">
              Наши работы
            </Title>
          </motion.div>

          <Grid gutter="md">
            {portfolioImages.map((src, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Image
                    src={src}
                    alt={`Работа StipStone №${index + 1}`}
                    radius="md"
                    fit="cover"
                    height={250}
                    loading="lazy"
                  />
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PortfolioPage;
