import { memo } from "react";
import { Container, Group, Box, Image } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { services } from "../../../public/data";
import HeroContent from "./HeroContent";
import ServiceCard from "./ServiceCard";

const HeroSlider = memo(() => {
  return (
    <Box id="hero" className="hero-container" style={{ position: "relative" }}>
      <Box
        className="hero-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src="/bg.jpg"
          alt="Hero Background"
          loading="eager"
          fetchPriority="high"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        loop
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        speed={1000}
        allowTouchMove={true}
        touchRatio={1}
        touchAngle={45}
        grabCursor={true}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            <Container
              size="xl"
              className="hero-content"
              px={{ base: "sm", md: "md" }}
              py={{ base: "lg", md: "xl" }}
            >
              <Group align="center" justify="space-between">
                <HeroContent service={service} index={index} />
                <Box
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    flexShrink: 0,
                  }}
                  visibleFrom="sm"
                >
                  <ServiceCard service={service} index={index} />
                </Box>
              </Group>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
});

HeroSlider.displayName = "HeroSlider";

export default HeroSlider;
