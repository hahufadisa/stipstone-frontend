import { useDisclosure } from "@mantine/hooks";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [opened, { close }] = useDisclosure(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  return (
    <MobileMenu opened={opened} onClose={close} onItemClick={scrollToSection} />
  );
};

export default Header;
