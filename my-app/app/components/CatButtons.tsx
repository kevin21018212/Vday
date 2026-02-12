"use client";

import { motion } from "framer-motion";

interface CatButtonsProps {
  onZoom: () => void;
  onRain: () => void;
  onParade: () => void;
  onExplosion: () => void;
  zoomActive: boolean;
  rainActive: boolean;
  paradeActive: boolean;
  explosionActive: boolean;
}

export default function CatButtons({
  onZoom,
  onRain,
  onParade,
  onExplosion,
  zoomActive,
  rainActive,
  paradeActive,
  explosionActive,
}: CatButtonsProps) {
  const buttons = [
    { label: "🐱 Cat Zoom", action: onZoom, color: "bg-green-300", active: zoomActive, toggle: false },
    { label: "🌧️ Cat Rain", action: onRain, color: "bg-blue-300", active: rainActive, toggle: true },
    { label: "🎪 Cat Parade", action: onParade, color: "bg-purple-300", active: paradeActive, toggle: true },
    { label: "💥 Cat Explosion", action: onExplosion, color: "bg-orange-300", active: explosionActive, toggle: false },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {buttons.map((btn, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={btn.action}
          className={`px-5 py-3 rounded-xl shadow-md font-semibold text-center transition-colors cursor-pointer ${
            btn.active ? "bg-gray-300 text-gray-700 ring-2 ring-gray-400" : `${btn.color}`
          }`}
        >
          {btn.label} {btn.active && btn.toggle && "✓"}
        </motion.div>
      ))}
    </div>
  );
}
