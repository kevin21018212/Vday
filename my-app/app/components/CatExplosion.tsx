"use client";

import { motion } from "framer-motion";
import { catImages } from "./catImages";
import { useEffect } from "react";

interface CatExplosionProps {
  active: boolean;
  onComplete: () => void;
}

export default function CatExplosion({ active, onComplete }: CatExplosionProps) {
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2500); // 1.2s to form + 3s display = 4.5s total
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  if (!active) return null;

  const cats = Array.from({ length: 30 });

  // Container variants with stagger
  const containerVariants = {
    hidden: {},
    explode: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="explode"
    >
      {cats.map((_, i) => {
        const image = catImages[i % catImages.length];

        // Heart shape parametric equation
        const t = (i / cats.length) * Math.PI * 2;
        const scale = 40; // Smaller heart to keep cats on screen

        // Parametric heart equations
        const heartX = scale * 16 * Math.pow(Math.sin(t), 3);
        const heartY = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const endX = heartX;
        const endY = heartY;
        const rotation = Math.random() * 720 - 360;

        // Individual cat variants
        const catVariants = {
          hidden: {
            x: 0,
            y: 0,
            scale: 0,
            rotate: 0,
            opacity: 0,
          },
          explode: {
            x: endX,
            y: endY,
            scale: 1,
            rotate: rotation,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 10,
            },
          },
        };

        return (
          <motion.img
            key={i}
            src={image}
            className="absolute object-contain"
            style={{
              width: "140px",
              height: "140px",
            }}
            variants={catVariants}
          />
        );
      })}
    </motion.div>
  );
}
