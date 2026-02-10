"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NoButtonProps {
  onClick: () => void;
  clickCount: number;
}

export default function NoButton({ onClick, clickCount }: NoButtonProps) {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isRandom, setIsRandom] = useState(false);
  const isDisabled = clickCount >= 3;

  // Store viewport size to avoid recalculating mid-drag
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setViewport({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const moveRandomly = () => {
    const buttonWidth = 150;
    const buttonHeight = 50;
    const margin = 20;

    const maxX = viewport.width - buttonWidth - margin;
    const maxY = viewport.height - buttonHeight - margin;

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
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={{
        position: "fixed", // Always fixed to avoid jitter on mobile
        top: 0,
        left: 0,
        zIndex: 50,
        willChange: "transform",
        display: "inline-block",
        cursor: isDisabled ? "not-allowed" : "pointer",
        width: 150,
        height: 50,
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
