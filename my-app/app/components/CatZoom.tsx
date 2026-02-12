"use client";

import { motion, AnimatePresence } from "framer-motion";
import { catImages } from "./catImages";
import { useEffect } from "react";

interface CatZoomProps {
  active: boolean;
  onComplete: () => void;
}

export default function CatZoom({ active, onComplete }: CatZoomProps) {
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800); // Much shorter jumpscare
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  const img = catImages[Math.floor(Math.random() * catImages.length)];

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.img
            src={img}
            className="rounded-xl shadow-2xl max-w-[80vw] max-h-[80vh] object-contain"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1.2, rotate: 0 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
