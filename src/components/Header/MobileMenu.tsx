import React from "react";
import { Drawer, Container, Stack, Text, Button } from "@mantine/core";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "../../../public/data";

interface MobileMenuProps {
  opened: boolean;
  onClose: () => void;
  onItemClick: (href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  opened,
  onClose,
  onItemClick,
}) => {
  const location = useLocation();

  const handleItemClick = (href: string) => {
    if (href.startsWith("/")) {
      // Это роут, закрываем меню и переходим
      onClose();
    } else {
      // Это якорная ссылка, используем старую логику
      onItemClick(href);
    }
  };

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="top"
      size="100%"
      styles={{
        content: {
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Container size="xl" py="xl">
        <Stack gap="lg">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Text
                  size="xl"
                  fw={600}
                  component={Link}
                  to={item.href}
                  style={{
                    cursor: "pointer",
                    color: isActive ? "#1976d2" : "white",
                    textDecoration: "none",
                  }}
                  onClick={() => handleItemClick(item.href)}
                >
                  {item.label}
                </Text>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              color="red"
              size="lg"
              fullWidth
              onClick={() => onItemClick("#contacts")}
            >
              Заказать звонок
            </Button>
          </motion.div>
        </Stack>
      </Container>
    </Drawer>
  );
};

export default MobileMenu;
