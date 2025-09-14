import React from "react";
import { Text, Button, Group } from "@mantine/core";
import { companyInfo } from "../../../public/data";

interface ContactInfoProps {
  isScrolled: boolean;
  onCallButtonClick: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  isScrolled,
  onCallButtonClick,
}) => {
  return (
    <Group gap="md" visibleFrom="sm">
      <Text
        size="sm"
        className={`header-phone ${isScrolled ? "scrolled" : ""}`}
      >
        {companyInfo.phone}
      </Text>
      <Button color="red" size="sm" onClick={onCallButtonClick}>
        Заказать звонок
      </Button>
    </Group>
  );
};

export default ContactInfo;
