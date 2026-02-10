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
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = 150; // approximate button size
    const buttonHeight = 50;
    const margin = 20;

    const maxX = viewportWidth - buttonWidth - margin;
    const maxY = viewportHeight - buttonHeight - margin;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ x: randomX, y: randomY });
  };

  const handleClick = () => {
    if (isDisabled) return;

    if (clickCount === 0 || clickCount === 2) {
      onClick();
    } else if (clickCount === 1) {
      moveRandomly();
    }
  };

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        willChange: "transform", // smoother on mobile
      }}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
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
