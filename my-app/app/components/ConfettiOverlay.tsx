"use client";

import { useEffect } from "react";

interface ConfettiOverlayProps {
  triggerId: number;
}

export default function ConfettiOverlay({ triggerId }: ConfettiOverlayProps) {
  useEffect(() => {
    if (!triggerId) return;

    import("canvas-confetti").then((confetti) => {
      confetti.default({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.6 },
      });
    });
  }, [triggerId]);

  return null;
}
