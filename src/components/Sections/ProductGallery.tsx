import { Box, Image, Container, useMatches } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { motion } from "framer-motion";
import { textContent } from "../../../public/data";

const ProductGallery = () => {
  const slideSize = useMatches({ base: "100%", sm: "33.333333%" });
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Box className="products-gallery">
        <Container size="xl" mt={useMatches({ base: "md", sm: "xl" })}>
          <Carousel
            withIndicators
            height={400}
            slideSize={slideSize}
            slideGap="md"
          >
            {textContent.products.gallery.map((item) => (
              <Carousel.Slide key={item.id}>
                <Box className="gallery-slide">
                  <Image
                    src={item.image}
                    alt={`Изделия из камня в Зеленограде - галерея работ StipStone ${item.id}`}
                    height={350}
                    fit="cover"
                    radius="md"
                    loading="lazy"
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Container>
      </Box>
    </motion.div>
  );
};

export default ProductGallery;
