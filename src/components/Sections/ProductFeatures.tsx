import React from "react";
import { Stack, Text, Box } from "@mantine/core";
import { motion } from "framer-motion";
import { textContent } from "../../../public/data";

const ProductFeatures: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Stack gap="lg">
        <Text size="xl" fw={700}>
          {textContent.products.features.title}
        </Text>

        <Stack gap="md">
          {textContent.products.features.items.map((feature, index) => (
            <Box key={index}>
              <Text fw={600} size="sm">
                {feature.title}
              </Text>
              <Text size="sm" className="feature-description">
                {feature.description}
              </Text>
            </Box>
          ))}
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default ProductFeatures;
