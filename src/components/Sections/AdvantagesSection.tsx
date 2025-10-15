import React from "react";
import { Container, Text, Stack, Box, useMatches } from "@mantine/core";
import { motion } from "framer-motion";

interface AdvantagesSectionProps {
  showTitle?: boolean;
  customTitle?: string;
  customSubtitle?: string;
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = () => {
  const titleSize = useMatches({ base: "1.5rem", sm: "2rem", md: "2.5rem" });
  const subtitleSize = useMatches({ base: "1rem", sm: "1.2rem", md: "1.4rem" });

  return (
    <Box
      id="advantages"
      py={{ base: "lg", md: "xl" }}
      style={{
        backgroundImage: "url('/Advant.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "550px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        size="xl"
        px="sm"
        style={{
          paddingLeft: "clamp(0.5rem, 2vw, 1rem)",
          paddingRight: "clamp(0.5rem, 2vw, 1rem)",
          width: "100%",
        }}
      >
        <Stack
          gap="lg"
          style={{
            gap: "clamp(1.5rem, 4vw, 2rem)",
            maxWidth: "600px",
            marginLeft: 0, // Изменено с auto на 0 для выравнивания влево
            marginRight: "auto",
            textAlign: "left", // Изменено с center на left
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Text
              size={titleSize}
              fw={800}
              style={{
                lineHeight: 1.2,
                color: "#f1ece8",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              ПРОИЗВОДСТВО ИЗДЕЛИЙ
              <br />
              ИЗ ИСКУССТВЕННОГО КАМНЯ
              <br />
              НА ЗАКАЗ
              <br />В САНКТ-ПЕТЕРБУРГЕ
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Stack gap="md">
              <Text
                size={subtitleSize}
                fw={600}
                style={{
                  lineHeight: 1.3,
                  color: "#ecdbbf",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  src="/Proziv.png" // путь к иконке производства
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Собственное производство
                  <br />
                  Контроль вашего заказа на всех фазах
                </span>
              </Text>

              <Text
                size={subtitleSize}
                fw={600}
                style={{
                  lineHeight: 1.3,
                  color: "#ecdbbf",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  src="/Raznob.png"
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Более 1500 вариантов декора
                  <br />
                  Подберем оптимальный вариант
                </span>
              </Text>

              <Text
                size={subtitleSize}
                fw={600}
                style={{
                  lineHeight: 1.3,
                  color: "#ecdbbf",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  src="/kachestvo.png"
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    flexShrink: 0,
                  }}
                />
                <span>
                  Гарантия качества
                  <br />
                  Мы уверены в качестве нашей продукции
                </span>
              </Text>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* <Text
              size="md"
              style={{
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                marginBottom: "2rem",
              }}
            >
              Рассчитаем стоимость столешницы из камня по Вашим размерам
              <br />с точностью до копейки за 5 минут!
            </Text> */}

            {/* <Button
              size={buttonSize}
              variant="filled"
              color="blue"
              style={{
                fontWeight: 600,
                fontSize: useMatches({ base: "1rem", md: "1.2rem" }),
                padding: useMatches({
                  base: "0.5rem 1.5rem",
                  md: "0.75rem 2rem",
                }),
              }}
            >
              РАССЧИТАТЬ СТОИМОСТЬ
            </Button> */}
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdvantagesSection;
