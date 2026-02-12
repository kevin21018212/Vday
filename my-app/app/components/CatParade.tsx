"use client";

import { motion } from "framer-motion";
import { catImages } from "./catImages";

interface CatParadeProps {
  active: boolean;
  onComplete: () => void;
}

export default function CatParade({ active, onComplete }: CatParadeProps) {
  if (!active) return null;

  const cats = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col items-start justify-center gap-4">
      {cats.map((_, i) => {
        const image = catImages[i % catImages.length];

        return (
          <motion.img
            key={i}
            src={image}
            className="object-cover"
            style={{
              width: "120px",
              height: "120px",
            }}
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={{
              x: typeof window !== "undefined" ? window.innerWidth + 200 : 2000,
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              delay: i * 0.15,
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 2,
              opacity: {
                duration: 5,
                times: [0, 0.05, 0.95, 1],
                repeat: Infinity,
                repeatDelay: 5,
              },
            }}
          />
        );
      })}
    </div>
  );
}
