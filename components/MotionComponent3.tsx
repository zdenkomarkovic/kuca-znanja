"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionComponent1Props {
  children: React.ReactNode;
  direction?: "left" | "right";
}

const MotionComponent3= ({ children, direction = "right" }: MotionComponent1Props) => {
  const initialX = direction === "right" ? 100 : -100;
  
  return (
    <motion.div
      whileInView={{ x: [initialX, 0], opacity: [0, 1] }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileTap={{ scale: 0.95 }}
        className="rounded-xl h-full shadow-2xl shadow-muted-foreground"
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent3;
