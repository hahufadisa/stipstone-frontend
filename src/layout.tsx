import { AppShell } from "@mantine/core";
import MobileHeader from "./components/Header/MobileHeader";
import ContactSection from "./components/Sections/ContactSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppShell>
      <MobileHeader />
      <AppShell.Main>{children}</AppShell.Main>
      {pathname !== "/calc" && <ContactSection />}
    </AppShell>
  );
};
