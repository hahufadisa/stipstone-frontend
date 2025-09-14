import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Text,
  Box,
  FileInput,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconCloudUpload } from "@tabler/icons-react";
import { textContent } from "../../../public/data";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box className="contact-form-container">
        <Text size="xl" fw={600} mb="xl" className="contact-form-title">
          {textContent.contact.form.title}
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            {/* Имя */}
            <TextInput
              label={textContent.contact.form.name}
              placeholder={textContent.contact.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              size="md"
              className="contact-form-input"
            />

            {/* Телефон */}
            <TextInput
              label={textContent.contact.form.phone}
              placeholder={textContent.contact.form.phonePlaceholder}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              size="md"
              className="contact-form-input"
            />

            {/* Дополнительная информация */}
            <Textarea
              label={textContent.contact.form.message}
              placeholder={textContent.contact.form.messagePlaceholder}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              minRows={4}
              size="md"
              className="contact-form-textarea"
            />

            {/* Кнопка отправки */}
            <Button
              type="submit"
              color="red"
              size="lg"
              fullWidth
              className="contact-form-submit"
            >
              {textContent.contact.form.submitButton}
            </Button>

            {/* Уведомление о конфиденциальности */}
            <Text
              size="xs"
              c="dimmed"
              ta="center"
              className="contact-form-privacy"
            >
              {textContent.contact.form.privacy}
            </Text>
          </Stack>
        </form>
      </Box>
    </motion.div>
  );
};

export default ContactForm;
