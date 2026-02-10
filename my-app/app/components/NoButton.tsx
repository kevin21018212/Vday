"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NoButtonProps {
  onClick: () => void;
  clickCount: number;
}

export default function NoButton({ onClick, clickCount }: NoButtonProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isRandom, setIsRandom] = useState(false);
  const isDisabled = clickCount >= 3;

  const moveRandomly = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const buttonWidth = 150;
    const buttonHeight = 50;
    const margin = 20;

    const maxX = vw - buttonWidth - margin;
    const maxY = vh - buttonHeight - margin;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ x: randomX, y: randomY });
    setIsRandom(true);
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
    <motion.div
      animate={position ?? {}}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={{
        position: isRandom ? "fixed" : "relative",
        top: isRandom ? 0 : undefined,
        left: isRandom ? 0 : undefined,
        zIndex: isRandom ? 50 : undefined,
        willChange: "transform",
        display: "inline-block",
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      onClick={handleClick}
      className={`px-6 py-3 font-semibold rounded-xl shadow-md transition-all ${
        isDisabled ? "bg-gray-400 text-gray-600" : "bg-gray-300 text-gray-700"
      }`}
    >
      No 😿
    </motion.div>
  );
}
