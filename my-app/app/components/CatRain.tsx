"use client";

import { motion } from "framer-motion";
import { catImages } from "./catImages";

interface CatRainProps {
  active: boolean;
}

export default function CatRain({ active }: CatRainProps) {
  if (!active) return null;

  const cats = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cats.map((_, i) => {
        const image = catImages[i % catImages.length];

        const startX = Math.random() * 100;
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * 4;
        const size = 80 + Math.random() * 60;
        const drift = Math.random() * 200 - 100;

        return (
          <motion.img
            key={i}
            src={image}
            className="absolute object-contain opacity-90"
            style={{
              left: `${startX}%`,
              top: "-100px",
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, drift],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
