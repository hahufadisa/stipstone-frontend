import React from "react";
import { Text, Button, Stack, useMatches } from "@mantine/core";
import { motion } from "framer-motion";
import type { Service } from "../../../public";
import { textContent, companyInfo } from "../../../public/data";
import { Link } from "react-router-dom";

interface HeroContentProps {
  service: Service;
  index: number;
}

const HeroContent: React.FC<HeroContentProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        flex: 1,
        maxWidth: "600px",
        width: "100%",
        padding: "0 1rem",
      }}
    >
      <img src="/mainLogoBlack.svg" alt="logo" width={700} />
      <Stack>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
        >
          <Text
            size={useMatches({ base: "1.5rem", sm: "2rem", md: "3rem" })}
            fw={800}
            className="hero-title"
          >
            {service.title}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
        >
          <Text
            size={useMatches({ base: "md", sm: "lg", md: "1.5rem" })}
            className="hero-description"
            style={{ lineHeight: 1.4 }}
          >
            {service.description}
          </Text>
        </motion.div>

        {service.price && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
          >
            <Text size={"lg"} className="hero-price">
              {service.price}
            </Text>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
        >
          <Stack gap="md" align="stretch">
            <Button
              color="red"
              size={useMatches({ base: "md", sm: "lg" })}
              radius="md"
              className="hero-button-primary"
              fullWidth
            >
              {textContent.hero.buttons.getPrice}
            </Button>
            <Link to="/catalog">
              <Button
                variant="filled"
                size={useMatches({ base: "md", sm: "lg" })}
                radius="md"
                fullWidth
              >
                {textContent.hero.buttons.viewCatalog}
              </Button>
            </Link>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
        >
          <Stack gap="xs">
            <Text
              size={useMatches({ base: "xs", sm: "sm" })}
              className="hero-contact-info"
              style={{ wordBreak: "break-word" }}
            >
              📍 {companyInfo.address}
            </Text>
            <Text
              size={useMatches({ base: "xs", sm: "sm" })}
              className="hero-contact-info"
              style={{ wordBreak: "break-all" }}
            >
              ✉️ {companyInfo.email}
            </Text>
          </Stack>
        </motion.div>
      </Stack>
    </motion.div>
  );
};

export default HeroContent;
