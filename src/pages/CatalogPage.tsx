import {
  Container,
  Title,
  Grid,
  Card,
  Image,
  Text,
  Stack,
  Box,
  Group,
  ThemeIcon,
} from "@mantine/core";
import { motion } from "framer-motion";
import { catalogCategories, catalogServices } from "../../public/data";
import SEOHead from "../components/SEO/SEOHead";
import {
  getProductStructuredData,
  getBreadcrumbStructuredData,
} from "../components/SEO/StructuredData";

const CatalogPage = () => {
  const productData = getProductStructuredData("столешницы");
  const breadcrumbData = getBreadcrumbStructuredData([
    { name: "Главная", url: "https://stipstone-zelenograd.ru/" },
    {
      name: "Каталог изделий из камня",
      url: "https://stipstone-zelenograd.ru/catalog",
    },
  ]);

  return (
    <>
      <SEOHead
        title="Каталог изделий из камня в Зеленограде | Столешницы, подоконники, мойки | StipStone"
        description="Каталог изделий из камня в Зеленограде от StipStone: столешницы, подоконники, мойки, барные стойки из акрилового и кварцевого камня. Полный ассортимент изделий с ценами. ☎ +7 (985) 086-70-21"
        keywords="каталог камня зеленоград, столешницы из камня каталог зеленоград, подоконники камень каталог зеленоград, мойки камень каталог зеленоград, искусственный камень каталог зеленоград, акриловый камень каталог, кварцевый камень каталог, изделия камень ассортимент зеленоград"
        ogTitle="Каталог изделий из камня в Зеленограде - StipStone"
        ogDescription="Полный каталог изделий из камня в Зеленограде: столешницы, подоконники, мойки, барные стойки из акрилового и кварцевого камня."
        ogImage="/table2.jpg"
        ogUrl="https://stipstone-zelenograd.ru/catalog"
        canonical="https://stipstone-zelenograd.ru/catalog"
        structuredData={[productData, breadcrumbData]}
      />

      <Box className="catalog-page">
        <Container size="xl" py="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title
              order={1}
              size="h1"
              ta="center"
              mb="xl"
              className="catalog-title"
            >
              Каталог изделий
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Grid gutter="xl" mb="xl">
              {catalogCategories.map((category, index) => (
                <Grid.Col key={category.id} span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="catalog-category-card"
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                    >
                      <Card.Section>
                        <Image
                          src={category.image}
                          height={200}
                          alt={`${category.title} из камня в Зеленограде - каталог изделий StipStone`}
                          fit="cover"
                          loading="lazy"
                          className="catalog-category-image"
                        />
                      </Card.Section>

                      <Stack gap="md" mt="md">
                        <Title
                          order={3}
                          size="h3"
                          className="catalog-category-title"
                        >
                          {category.title}
                        </Title>

                        <Stack gap="xs">
                          {category.links.map((link, linkIndex) => (
                            <Text
                              key={linkIndex}
                              size="sm"
                              className="catalog-category-link"
                              component="a"
                              href="#"
                            >
                              {link}
                            </Text>
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Grid gutter="xl">
              {catalogServices.map((service, index) => (
                <Grid.Col key={service.id} span={{ base: 12, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="catalog-service-card"
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                    >
                      <Group align="flex-start" gap="md">
                        <ThemeIcon
                          size="xl"
                          radius="xl"
                          className="catalog-service-icon"
                        >
                          <Text size="xl">{service.icon}</Text>
                        </ThemeIcon>

                        <Stack gap="sm" style={{ flex: 1 }}>
                          <Title
                            order={4}
                            size="h4"
                            className="catalog-service-title"
                          >
                            {service.title}
                          </Title>
                          <Text
                            size="sm"
                            className="catalog-service-description"
                          >
                            {service.description}
                          </Text>
                        </Stack>
                      </Group>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default CatalogPage;
