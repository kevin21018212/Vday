"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NoButtonProps {
  onClick: () => void;
  clickCount: number;
}

export default function NoButton({ onClick, clickCount }: NoButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isRandom, setIsRandom] = useState(false);

  const isDisabled = clickCount >= 3;

  const moveRandomly = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 100;

    const randomX = Math.random() * (viewportWidth - margin * 2) - (viewportWidth / 2 - margin);
    const randomY = Math.random() * (viewportHeight - margin * 2) - (viewportHeight / 2 - margin);

    setPosition({ x: randomX, y: randomY });
    setIsRandom(true);
  };

  const handleClick = () => {
    if (isDisabled) return;

    if (clickCount === 0 || clickCount === 2) {
      // FIRST and THIRD click → show popup
      onClick();
    } else if (clickCount === 1) {
      // SECOND click → move button randomly
      moveRandomly();
    }
  };

  return (
    <motion.button
      animate={position}
      transition={{ type: "spring", damping: 20, duration: 0.2 }}
      style={
        isRandom
          ? {
              position: "fixed",
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 50,
            }
          : {}
      }
      whileHover={{ scale: isDisabled ? 1 : 1.1 }}
      whileTap={{ scale: isDisabled ? 1 : 0.9 }}
      onClick={handleClick}
      disabled={isDisabled}
      className={`px-6 py-3 font-semibold rounded-xl shadow-md transition-all ${
        isDisabled ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-gray-300 text-gray-700"
      }`}
    >
      No 😿
    </motion.button>
  );
}
