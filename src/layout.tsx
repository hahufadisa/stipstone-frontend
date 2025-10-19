import { AppShell } from "@mantine/core";
import MobileHeader from "./components/Header/MobileHeader";
import ContactSection from "./components/Sections/ContactSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/HeroSlider/Header";
import { useWindowSize } from "usehooks-ts";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { width } = useWindowSize();
  const isMobile = width < 898;

  return (
    <AppShell>
      <Header />
      <AppShell.Main style={{ paddingTop: isMobile ? "30px" : "120px" }}>
        {children}
      </AppShell.Main>
      {pathname !== "/calc" && <ContactSection />}
    </AppShell>
  );
};
