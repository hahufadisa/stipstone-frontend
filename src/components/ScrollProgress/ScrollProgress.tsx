import { useScroll, motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const pathname = useLocation();
  console.log(scrollYProgress);

  useEffect(() => {
    scrollYProgress.set(0);
  }, [pathname.pathname, scrollYProgress]);

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 1000,
          backgroundColor: theme?.colors?.primary?.[4],
        }}
      />
    </>
  );
}
