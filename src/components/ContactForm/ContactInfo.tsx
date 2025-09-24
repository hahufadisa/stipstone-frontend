import React from "react";
import { Stack, Text, Group, Box, Button } from "@mantine/core";
import { motion } from "framer-motion";
import { contactDetails } from "../../../public/data";
import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Box className="contact-info-container">
        <Stack gap="xl">
          {/* Адрес */}
          <Box className="contact-info-item">
            <Group align="flex-start" gap="md" mb="sm">
              <Text size="xl" className="contact-info-icon">
                {contactDetails.address.icon}
              </Text>
              <Box>
                <Text fw={600} size="lg" mb="xs">
                  {contactDetails.address.title}
                </Text>
                <Text size="sm" mb="xs">
                  {contactDetails.address.details}
                </Text>
                <Text size="sm" c="dimmed">
                  {contactDetails.address.workingHours}
                </Text>
              </Box>
            </Group>
          </Box>

          {/* Телефоны */}
          <Box className="contact-info-item">
            <Group align="flex-start" gap="md" mb="sm">
              <Text size="xl" className="contact-info-icon">
                {contactDetails.phones.icon}
              </Text>
              <Box>
                <Text fw={600} size="lg" mb="md">
                  {contactDetails.phones.title}
                </Text>
                <Stack gap="md">
                  {contactDetails.phones.items.map((item, index) => (
                    <Box key={index}>
                      <Text fw={500} size="sm" mb="xs">
                        {item.department}
                      </Text>
                      <Text size="sm" mb="xs">
                        {item.phone}
                      </Text>
                      {/* <Text size="sm" c="dimmed">
                        {item.hours}
                      </Text> */}
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Group>
            <Box className="contact-info-item">
              <Group gap="md">
                <Button
                  component="a"
                  href="https://wa.me/79850867021"
                  target="_blank"
                  color="green"
                  leftSection={<IconBrandWhatsapp size={20} />}
                >
                  WhatsApp
                </Button>

                <Button
                  component="a"
                  href="https://t.me/Stipstone"
                  target="_blank"
                  color="blue"
                  leftSection={<IconBrandTelegram size={20} />}
                >
                  Telegram
                </Button>
              </Group>
            </Box>
          </Box>

          <Box className="contact-info-item">
            <Group align="flex-start" gap="md" mb="sm">
              <Text size="xl" className="contact-info-icon">
                {contactDetails.email.icon}
              </Text>
              <Box>
                <Text fw={600} size="lg" mb="xs">
                  {contactDetails.email.title}
                </Text>
                <Text size="sm" c="dimmed">
                  {contactDetails.email.details}
                </Text>
              </Box>
            </Group>
          </Box>
        </Stack>
      </Box>
      {/* Соцсети / мессенджеры */}
    </motion.div>
  );
};

export default ContactInfo;
