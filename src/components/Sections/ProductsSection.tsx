import React from "react";
import { Container, Text, Grid, Stack, Box, useMatches } from "@mantine/core";
import { motion } from "framer-motion";
import { products, textContent } from "../../../public/data";
import ProductCard from "./ProductCard";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";

const ProductsSection: React.FC = () => {
  const textSizes = useMatches({ base: "1.5rem", sm: "2rem", md: "3rem" });

  return (
    <Box
      id="products"
      py={{ base: "lg", md: "xl" }}
      className="products-section"
    >
      <Container size="xl" px={{ base: "sm", md: "md" }}>
        <Stack gap={useMatches({ base: "lg", md: "xl" })}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Text
              size={textSizes}
              fw={800}
              ta="center"
              className="products-title"
            >
              {textContent.products.title}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text
              size={useMatches({ base: "md", sm: "lg" })}
              ta="center"
              maw={800}
              mx="auto"
              className="products-description"
            >
              {textContent.products.description}
            </Text>
          </motion.div>

          <Grid mt={{ base: "lg", md: "xl" }}>
            {products.map((product, index) => (
              <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 3 }}>
                <ProductCard product={product} index={index} />
              </Grid.Col>
            ))}
          </Grid>

          <Grid gutter={{ base: "md", md: "xl" }} mt={{ base: "lg", md: "xl" }}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <ProductFeatures />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ProductGallery />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsSection;
