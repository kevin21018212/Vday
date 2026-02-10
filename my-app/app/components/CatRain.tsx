"use client";

import { motion } from "framer-motion";

interface CatRainProps {
  active: boolean;
}

export default function CatRain({ active }: CatRainProps) {
  if (!active) return null;

  const catImages = [
    "/cats/cat1.jpg",
    "/cats/cat2.jpeg",
    "/cats/cat3.png",
    "/cats/cat4.jpg",
    "/cats/cat5.jpg",
    "/cats/cat6.jpeg",
  ];

  // Spawn more cats for a fuller rain
  const cats = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cats.map((_, i) => {
        const image = catImages[i % catImages.length];

        // Random horizontal start across full width
        const startX = Math.random() * 100;

        // Random animation duration and delay for natural spacing
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * 4;

        // Random size for variation
        const size = 40 + Math.random() * 40; // 40px → 80px

        // Random horizontal drift
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
