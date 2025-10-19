import { useState, useEffect } from "react";
import {
  Box,
  Group,
  Text,
  Button,
  Anchor,
  Flex,
  Image,
  Drawer,
  Stack,
  Burger,
  NavLink,
} from "@mantine/core";
import { companyInfo, navigationItems } from "../../../public/data";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { useWindowSize } from "usehooks-ts";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [opened, { toggle, close }] = useDisclosure(false);
  const { width } = useWindowSize();
  const isMobile = width < 898;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Box
        className={`header-fixed ${
          isVisible ? "header-visible" : "header-hidden"
        }`}
      >
        {/* Верхняя часть хедера */}
        <Box
          style={{
            background: "white",
            padding: isMobile ? "8px 12px" : "12px 18px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Flex justify="space-between" align="center">
            <Group
              gap="md"
              align="center"
              onClick={() => navigate("/")}
              style={{
                height: isMobile ? "50px" : "100px",
                cursor: "pointer",
              }}
            >
              <Image
                src="/svgviewer-output.svg"
                alt="logo"
                style={{
                  height: isMobile ? "50px" : "60px",
                }}
              />
            </Group>

            {!isMobile && (
              <Group gap="lg" align="center">
                <Group gap="xs" align="center">
                  <IconPhone size={20} color="grey" />
                  <Anchor
                    href={`tel:${companyInfo.phone}`}
                    c="dark"
                    fw={600}
                    style={{ textDecoration: "underline" }}
                  >
                    {companyInfo.phone}
                  </Anchor>
                </Group>

                <Group gap="xs" align="center">
                  <Box
                    w={8}
                    h={8}
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#4caf50",
                    }}
                  />
                  <Text size="sm" c="dark">
                    Звоните, мы на связи
                  </Text>
                </Group>
              </Group>
            )}

            {/* Действия - кнопки и гамбургер */}
            <Group gap="md" align="center">
              {/* Социальные кнопки - скрываются на мобилке */}
              {!isMobile && (
                <Group gap="xs">
                  <Button
                    component="a"
                    href="https://wa.me/79850867021"
                    target="_blank"
                    variant="outline"
                    size="sm"
                    style={{
                      background:
                        "linear-gradient(90deg,rgb(68, 213, 39) 0%, #4caf50 100%)",
                      border: "none",
                      borderRadius: "6px",
                      color: "white",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      padding: "8px 16px",
                    }}
                  >
                    <IconBrandWhatsapp size={16} />
                  </Button>

                  <Button
                    component="a"
                    href="https://t.me/Stipstone"
                    target="_blank"
                    variant="outline"
                    size="sm"
                    style={{
                      background:
                        "linear-gradient(90deg,rgb(26, 36, 176) 0%,rgb(76, 135, 175) 100%)",
                      border: "none",
                      borderRadius: "6px",
                      color: "white",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      padding: "8px 16px",
                    }}
                  >
                    <IconBrandTelegram size={16} />
                  </Button>
                </Group>
              )}

              {/* Кнопка звонка - скрывается на мобилке */}
              {!isMobile && (
                <Button
                  size="sm"
                  component="a"
                  href={`tel:${companyInfo.phone}`}
                  style={{
                    background:
                      "linear-gradient(90deg,rgb(213, 39, 68) 0%, #4caf50 100%)",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    padding: "8px 16px",
                  }}
                >
                  ПЕРЕЗВОНИТЕ НАМ
                </Button>
              )}

              {isMobile && (
                <Burger
                  opened={opened}
                  onClick={toggle}
                  size="sm"
                  color="#1976d2"
                />
              )}
            </Group>
          </Flex>
        </Box>

        {!isMobile && (
          <Box
            style={{
              background: "white",
              padding: "12px 24px",
            }}
          >
            <Group gap="md" justify="center">
              {navigationItems.map((item, index) => (
                <Group key={item.id} gap="md" align="center">
                  <Link to={item.href} style={{ textDecoration: "none" }}>
                    <Text className="nav-link">{item.label}</Text>
                  </Link>

                  {index < navigationItems.length - 1 && (
                    <Text c="#4caf50" size="sm">
                      •
                    </Text>
                  )}
                </Group>
              ))}
            </Group>
          </Box>
        )}
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        title="Меню"
        position="right"
        size="sm"
        zIndex={1000}
        className="mobile-drawer"
      >
        <Stack gap="md">
          <Box>
            <Text fw={600} size="lg" mb="sm">
              Контакты
            </Text>
            <Group gap="xs" align="center" mb="sm">
              <IconPhone size={20} color="#1976d2" />
              <Anchor
                href={`tel:${companyInfo.phone}`}
                c="dark"
                fw={600}
                size="lg"
              >
                {companyInfo.phone}
              </Anchor>
            </Group>
            <Group gap="xs" align="center">
              <Box
                w={8}
                h={8}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                }}
              />
              <Text size="sm" c="dark">
                Звоните, мы на связи
              </Text>
            </Group>
          </Box>

          <Box>
            <Text fw={600} size="lg" mb="sm">
              Навигация
            </Text>
            <Stack gap="xs">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.id}
                  href={item.href}
                  onClick={close}
                  label={item.label}
                >
                  {item.label}
                </NavLink>
              ))}
            </Stack>
          </Box>

          {/* Социальные кнопки в мобильном меню */}
          <Box>
            <Text fw={600} size="lg" mb="sm">
              Связаться с нами
            </Text>
            <Group gap="md">
              <Button
                component="a"
                href="https://wa.me/79850867021"
                target="_blank"
                fullWidth
                style={{
                  background:
                    "linear-gradient(90deg,rgb(68, 213, 39) 0%, #4caf50 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: 600,
                  height: "48px",
                }}
              >
                <IconBrandWhatsapp size={20} />
                <Text ml="xs" c="white">
                  WhatsApp
                </Text>
              </Button>

              <Button
                component="a"
                href="https://t.me/Stipstone"
                target="_blank"
                fullWidth
                style={{
                  background:
                    "linear-gradient(90deg,rgb(26, 36, 176) 0%,rgb(76, 135, 175) 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: 600,
                  height: "48px",
                }}
              >
                <IconBrandTelegram size={20} />
                <Text ml="xs" c="white">
                  Telegram
                </Text>
              </Button>
            </Group>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

Header.displayName = "Header";

export default Header;
