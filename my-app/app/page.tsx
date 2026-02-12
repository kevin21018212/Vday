"use client";

import { useState } from "react";

import ConfettiOverlay from "./components/ConfettiOverlay";
import CatZoom from "./components/CatZoom";
import CatRain from "./components/CatRain";
import CatParade from "./components/CatParade";
import CatExplosion from "./components/CatExplosion";

import CatButtons from "./components/CatButtons";

export default function Home() {
  const [confettiId, setConfettiId] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [rain, setRain] = useState(false);
  const [parade, setParade] = useState(false);
  const [explosion, setExplosion] = useState(false);

  const startCelebration = () => {
    setConfettiId(Date.now());
    setZoom(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100 p-4 relative overflow-hidden">
      {/* Fun cat effects */}
      <CatZoom active={zoom} onComplete={() => setZoom(false)} />
      <CatRain active={rain} />
      <CatParade
        active={parade}
        onComplete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <CatExplosion active={explosion} onComplete={() => setExplosion(false)} />

      <main className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl text-center border-2 border-pink-200">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">💘 Happy Valentine's Day! 💘</h1>

        <p className="text-pink-500 mb-6">Meow Meow Meow Meow</p>

        <CatButtons
          onZoom={() => setZoom(true)}
          onRain={() => setRain(!rain)}
          onParade={() => setParade(!parade)}
          onExplosion={() => setExplosion(true)}
          zoomActive={zoom}
          rainActive={rain}
          paradeActive={parade}
          explosionActive={explosion}
        />

        <ConfettiOverlay triggerId={confettiId} />

        <p className="mt-6 text-sm text-pink-400">Meow Meow Meow Meow Meow</p>
      </main>
    </div>
  );
}
