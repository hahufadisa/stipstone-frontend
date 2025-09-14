import React from "react";
import { Container, Text, Grid, Stack, Box, useMatches } from "@mantine/core";
import { motion } from "framer-motion";
import { advantages } from "../../../public/data";
import AdvantageCard from "./AdvantageCard";

interface AdvantagesSectionProps {
  showTitle?: boolean;
  customTitle?: string;
  customSubtitle?: string;
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({
  showTitle = true,
  customTitle,
  customSubtitle,
}) => {
  const title = customTitle || "Почему  выбирают StipStone";
  const subtitle =
    customSubtitle ||
    "6 веских аргументов «ЗА» для профессионалов и частных лиц";

  // Вызываем useMatches вне условного блока
  const titleSize = useMatches({ base: "1.5rem", sm: "2rem", md: "2.5rem" });
  const subtitleSize = useMatches({ base: "1rem", sm: "1.2rem", md: "1.4rem" });
  const negotiationSize = useMatches({
    base: "1.2rem",
    sm: "1.4rem",
    md: "1.6rem",
  });

  return (
    <Box id="advantages" py={{ base: "lg", md: "xl" }}>
      <Container
        size="xl"
        px="sm"
        style={{
          paddingLeft: "clamp(0.5rem, 2vw, 1rem)",
          paddingRight: "clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        <Stack
          gap="lg"
          style={{
            gap: "clamp(1.5rem, 4vw, 2rem)",
          }}
        >
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Text
                size={titleSize}
                fw={800}
                ta="center"
                className="advantages-title"
                style={{ lineHeight: 1.2 }}
              >
                {title}
              </Text>
              <Text
                size={subtitleSize}
                fw={600}
                ta="center"
                className="advantages-subtitle"
                mt="md"
                style={{ lineHeight: 1.3 }}
              >
                {subtitle}
              </Text>
            </motion.div>
          )}
          <Grid gutter={{ base: "md", md: "xl" }}>
            {advantages.map((advantage, index) => (
              <Grid.Col key={advantage.id} span={{ base: 12, sm: 6, md: 4 }}>
                <AdvantageCard advantage={advantage} index={index} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdvantagesSection;
