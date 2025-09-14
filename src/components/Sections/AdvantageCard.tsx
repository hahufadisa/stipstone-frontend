import React from "react";
import { Card, Stack, Box, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { Advantage } from "../../../public";

interface AdvantageCardProps {
  advantage: Advantage;
  index: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card shadow="sm" padding="xl" radius="md" className="advantage-card">
        <Stack gap="md" align="center" ta="center">
          <Box className="advantage-icon">{advantage.icon}</Box>
          <Text size="xl" fw={700}>
            {advantage.title}
          </Text>
          <Text size="sm" className="advantage-description">
            {advantage.description}
          </Text>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default AdvantageCard;
