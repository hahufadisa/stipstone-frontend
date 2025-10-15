import { memo } from "react";
import { Box, Group, Text, Button, Anchor } from "@mantine/core";
import { companyInfo, navigationItems } from "../../../public/data";
import { Link } from "react-router-dom";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";

const HeroSlider = memo(() => {
  return (
    <Box
      id="hero"
      className="hero-container"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 40px",
      }}
    >
      <Box
        className="hero-background"
        style={{
          position: "absolute",
          width: "100%",
          height: "60%",
          backgroundImage: "url('/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Group
        justify="space-between"
        align="center"
        w="100%"
        style={{ position: "relative", zIndex: 10, marginBottom: "14px" }}
      >
        {/* Лого с отступом слева */}
        <Box style={{ marginLeft: "-80px" }}>
          <img src="/svgviewer-output.svg" alt="logo" width={480} />
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "8px",
            marginRight: "-240px", // Сдвигаем левее
          }}
        >
          <Group
            gap="md"
            style={{ flexDirection: "column", alignItems: "flex-end" }}
          >
            <Group gap="md">
              <Button
                component="a"
                href="https://wa.me/79850867021"
                target="_blank"
                color="green"
              >
                <IconBrandWhatsapp />
              </Button>

              <Button
                component="a"
                href="https://t.me/Stipstone"
                target="_blank"
                color="blue"
              >
                <IconBrandTelegram />
              </Button>
            </Group>

            <Group gap="xs">
              <IconPhone style={{ color: "grey" }} size={20} />
              <Anchor
                href={`tel:${companyInfo.phone}`}
                style={{
                  color: "grey",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {companyInfo.phone}
              </Anchor>
            </Group>
          </Group>
        </Box>
        {/* Кнопка "Заказать звонок" с прозрачным фоном */}
        <Button
          variant="outline"
          style={{
            height: "48px",
            borderRadius: "8px",
            borderColor: "grey",
            color: "#grey",
            backgroundColor: "transparent",
          }}
        >
          <Anchor
            href={`tel:${companyInfo.phone}`}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Заказать звонок
          </Anchor>
        </Button>
      </Group>

      <Group
        gap="xs"
        style={{
          position: "relative",
          zIndex: 10,
          flexWrap: "wrap",
        }}
      >
        {navigationItems.map((item, index) => (
          <Group key={item.id} gap="xs" align="center">
            <Link to={item.href}>
              <Button variant="subtle" color="dark" justify="flex-start">
                {item.label}
              </Button>
            </Link>

            {index < navigationItems.length - 1 && (
              <Text c="teal" size="sm">
                •
              </Text>
            )}
          </Group>
        ))}
      </Group>
    </Box>
  );
});

HeroSlider.displayName = "HeroSlider";

export default HeroSlider;
