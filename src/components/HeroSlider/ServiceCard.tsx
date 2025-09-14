import { Box, Stack, Button, Image } from "@mantine/core";
import { motion } from "framer-motion";
import type { Service } from "../../../public";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
      style={{ flex: 1, maxWidth: "500px" }}
    >
      <Box className="hero-service-card">
        <Stack gap="lg">
          <Box className="hero-service-image">
            <Image
              src={service.image}
              alt={`${service.title} - изделие из камня в Зеленограде от StipStone`}
              loading="lazy"
            />
          </Box>

          <Stack gap="md">
            <Button color="red" fullWidth size="md">
              УСПЕЙ КУПИТЬ
            </Button>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default ServiceCard;
