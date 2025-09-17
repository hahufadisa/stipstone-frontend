import { AppShell } from "@mantine/core";
import MobileHeader from "./components/Header/MobileHeader";
import ContactSection from "./components/Sections/ContactSection";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell>
      <MobileHeader />
      <AppShell.Main>{children}</AppShell.Main>
      <ContactSection />
    </AppShell>
  );
};
