import React from "react";
import {
  Stack,
  Group,
  Box,
  Text,
  Button,
  Anchor,
  Grid,
  Flex,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";
import { companyInfo, textContent } from "../../../public/data";
import { Link } from "react-router-dom";

const contactItems = [
  {
    icon: <IconPhone size={24} color="white" />,
    title: textContent.contact.contactInfo.phone,
    value: companyInfo.phone,
  },
  {
    icon: <IconMail size={24} color="white" />,
    title: textContent.contact.contactInfo.email,
    value: companyInfo.email,
  },
  {
    icon: <IconMapPin size={24} color="white" />,
    title: textContent.contact.contactInfo.address,
    value: companyInfo.address,
  },
];

const ContactInfoList: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Stack gap="xl">
        <Text size="xl" fw={600} ta="center">
          {textContent.contact.contactInfo.title}
        </Text>

        <Grid className="contact-grid">
          {contactItems.map((item, index) => (
            <Flex key={index}>
              <Box className="contact-item">
                <Group gap="md" align="flex-start">
                  <Box className="contact-icon">{item.icon}</Box>
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text fw={600} size="sm">
                      {item.title}
                    </Text>
                    <Text size="sm" style={{ whiteSpace: "pre-line" }}>
                      {item.value}
                    </Text>
                  </Stack>
                </Group>
              </Box>
            </Flex>
          ))}
        </Grid>

        <Link to={`tel:${companyInfo.phone}`} className="contact-button">
          <Button color="red" size="lg" w={400}>
            {textContent.contact.callButton}
          </Button>
        </Link>
      </Stack>
    </motion.div>
  );
};

export default ContactInfoList;
