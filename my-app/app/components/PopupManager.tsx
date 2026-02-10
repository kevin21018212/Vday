"use client";

import { motion } from "framer-motion";

interface PopupManagerProps {
  type: "none" | "tryAgain" | "success";
  onClose: () => void;
}

export default function PopupManager({ type, onClose }: PopupManagerProps) {
  if (type === "none") return null;

  const message = type === "success" ? "Yay! You chose correctly! 💘🐱" : "Wrong answer! Try again 😼";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full"
      >
        <p className="text-xl font-semibold text-pink-600 mb-4">{message}</p>

        <button onClick={onClose} className="px-4 py-2 bg-pink-300 rounded-lg">
          Close
        </button>
      </motion.div>
    </div>
  );
}
