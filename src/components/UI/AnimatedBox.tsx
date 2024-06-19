import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface AnimatedBoxProps {
  children: React.ReactNode;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация срабатывает только один раз
    threshold: 0.1, // Порог видимости элемента (10% видимости)
  });

  return (
    <Box
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;
