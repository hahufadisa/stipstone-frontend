import React from "react";
import { Text, Group } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "../../../public/data";

interface NavigationListProps {
  onItemClick: (href: string) => void;
  isScrolled: boolean;
}

const NavigationList: React.FC<NavigationListProps> = ({ onItemClick }) => {
  const location = useLocation();

  return (
    <Group gap="xl" visibleFrom="md">
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Text
            key={item.id}
            size="sm"
            fw={500}
            component={Link}
            to={item.href}
            style={{
              cursor: "pointer",
              color: isActive ? "#1976d2" : "inherit",
              textDecoration: isActive ? "underline" : "none",
            }}
          >
            {item.label}
          </Text>
        );
      })}
    </Group>
  );
};

export default NavigationList;
