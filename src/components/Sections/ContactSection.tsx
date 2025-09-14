import React from "react";
import { Container, Text, Stack, Box, useMatches } from "@mantine/core";
import { motion } from "framer-motion";
import { textContent } from "../../../public/data";
import ContactInfoList from "./ContactInfoList";

const ContactSection: React.FC = () => {
  return (
    <Box
      id="contacts"
      py={{ base: "lg", md: "xl" }}
      className="contact-section"
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
              size={useMatches({ base: "1.5rem", sm: "2rem", md: "3rem" })}
              fw={800}
              ta="center"
              className="contact-title"
              style={{ lineHeight: 1.2 }}
            >
              {textContent.contact.title}
            </Text>
          </motion.div>

          <ContactInfoList />
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;
