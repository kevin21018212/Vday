"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NoButtonProps {
  onClick: () => void;
  clickCount: number;
}

export default function NoButton({ onClick, clickCount }: NoButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isDisabled = clickCount >= 3;

  const moveRandomly = () => {
    const randomX = Math.random() * 260 - 130;
    const randomY = Math.random() * 260 - 130;

    setPosition({
      x: randomX,
      y: randomY,
    });
  };

  const handleClick = () => {
    if (isDisabled) return;

    // Always trigger parent logic (to show popup)
    onClick();

    if (clickCount === 1) {
      // SECOND CLICK → move button
      moveRandomly();
    }

    if (clickCount === 2) {
      // THIRD CLICK → reset position
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 110 }}
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
