"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NoButtonProps {
  onClick: () => void;
  clickCount: number;
}

export default function NoButton({ onClick, clickCount }: NoButtonProps) {
  // Start at center
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDisabled = clickCount >= 3;

  // Optional: adjust on mount to center exactly
  useEffect(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const moveRandomly = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const buttonWidth = 150;
    const buttonHeight = 50;
    const margin = 20;

    // Limit random movement so button stays fully visible
    const maxX = vw / 2 - buttonWidth / 2 - margin;
    const maxY = vh / 2 - buttonHeight / 2 - margin;

    const randomX = (Math.random() - 0.5) * 2 * maxX; // between -maxX and +maxX
    const randomY = (Math.random() - 0.5) * 2 * maxY;

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
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 50,
        willChange: "transform",
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
