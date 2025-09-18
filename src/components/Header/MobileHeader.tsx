import { useState } from "react";
import { Group, Text, Button, Stack, ActionIcon, Anchor } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconMenu2, IconPhone } from "@tabler/icons-react";
import { companyInfo, navigationItems } from "../../../public/data";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-header-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <ActionIcon
          size="xl"
          radius="xl"
          color="red"
          variant="filled"
          onClick={toggleMenu}
          style={{
            width: "60px",
            height: "60px",
            boxShadow: "0 4px 12px rgba(231, 76, 60, 0.3)",
          }}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </ActionIcon>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 1001,
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "24px",
                minWidth: "280px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <Stack gap="lg">
                <Stack gap="sm">
                  {navigationItems.map((item) => (
                    <Link to={item.href} key={item.id}>
                      <Button
                        variant="subtle"
                        color="dark"
                        w={"100%"}
                        justify="flex-start"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </Stack>

                <Stack
                  gap="sm"
                  style={{ borderTop: "1px solid #e9ecef", paddingTop: "16px" }}
                >
                  <Group gap="sm">
                    <IconPhone size={20} color="#e74c3c" />
                    <Text size="sm" c="dark" fw={500}>
                      {companyInfo.phone}
                    </Text>
                  </Group>

                  <Button
                    color="red"
                    fullWidth
                    onClick={() => scrollToSection("#contacts")}
                    style={{ height: "48px", borderRadius: "8px" }}
                  >
                    <Anchor href={`tel:${companyInfo.phone}`}>
                      Заказать звонок
                    </Anchor>
                  </Button>
                </Stack>
              </Stack>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
