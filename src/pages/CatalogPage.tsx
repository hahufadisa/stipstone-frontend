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
    { name: "Главная", url: "https://stipstone.ru/" },
    {
      name: "Каталог изделий из камня",
      url: "https://stipstone.ru/catalog",
    },
  ]);

  return (
    <>
      <SEOHead
        title="Каталог изделий из камня в Зеленограде | Столешницы, подоконники, мойки | StipStone"
        description="Каталог изделий из камня в Зеленограде от StipStone: столешницы, подоконники, мойки, барные стойки из акрилового и кварцевого камня. Полный ассортимент изделий с ценами. ☎ +7 (985) 086-70-21"
        keywords="каталог камня Зеленоград, столешницы из камня каталог Зеленоград, подоконники камень каталог Зеленоград, мойки камень каталог Зеленоград, искусственный камень каталог Зеленоград, акриловый камень каталог, кварцевый камень каталог, изделия камень ассортимент Зеленоград"
        ogTitle="Каталог изделий из камня в Зеленограде - StipStone"
        ogDescription="Полный каталог изделий из камня в Зеленограде: столешницы, подоконники, мойки, барные стойки из акрилового и кварцевого камня."
        ogImage="/table2.jpg"
        ogUrl="https://stipstone.ru/catalog"
        canonical="https://stipstone.ru/catalog"
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
          {/* Блок "О нас"//////////////////////////////////////////////////////// */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Container size="xl" py="xl">
              <Card shadow="sm" radius="md" padding="xl" withBorder>
                <Stack>
                  <Text
                    size="md"
                    style={{
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                    }}
                  >
                    <b>StipStone</b>: Там, где камень обретает форму мечты
                  </Text>
                  <Text size="md">
                    <b>StipStone</b> — это не просто изделия из камня, это
                    искусство, застывшее в вечности. Мы создаём столешницы,
                    подоконники и раковины, которые становятся неотъемлемой
                    частью вашего дома, подчёркивая его уникальность и стиль.
                    Каждое изделие — это результат кропотливой работы мастеров,
                    вкладывающих душу в каждый камень.
                  </Text>
                  <Text size="md">
                    Мы верим, что камень обладает особой энергетикой, способной
                    преобразить любое пространство. Наша цель — раскрыть эту
                    энергию, создавая изделия, которые будут радовать вас долгие
                    годы. <b>StipStone</b> — это символ надёжности,
                    долговечности и безупречного качества.
                  </Text>
                  <Text size="md">
                    Выбирая <b>StipStone</b>, вы выбираете не просто камень, а
                    произведение искусства, которое станет гордостью вашего
                    дома. Наши изделия идеально впишутся в любой интерьер, от
                    классики до модерна, добавляя ему изысканности и
                    неповторимости. Камень <b>StipStone</b> — это инвестиция в
                    красоту и комфорт вашего дома.
                  </Text>
                  <Text size="md">
                    Мы гордимся тем, что помогаем нашим клиентам создавать дома
                    своей мечты. <b>StipStone</b> — это ваш надёжный партнёр в
                    мире камня, готовый воплотить в жизнь любые ваши задумки.
                  </Text>
                </Stack>
              </Card>
            </Container>
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
