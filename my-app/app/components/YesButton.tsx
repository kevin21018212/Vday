"use client";

import { motion } from "framer-motion";

interface YesButtonProps {
  onClick: () => void;
}

export default function YesButton({ onClick }: YesButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-xl shadow-md"
    >
      Yes 😻
    </motion.button>
  );
}
