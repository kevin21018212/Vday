"use client";

import { useState } from "react";
import ConfettiOverlay from "./components/ConfettiOverlay";
import NoButton from "./components/NoButton";
import PopupManager from "./components/PopupManager";
import YesButton from "./components/YesButton";
import CatRain from "./components/CatRain";

export default function Home() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [popup, setPopup] = useState<"none" | "tryAgain" | "success">("none");

  const [confettiId, setConfettiId] = useState(0);
  const [showCats, setShowCats] = useState(false);

  const handleYesClick = () => {
    setPopup("success");

    // trigger confetti
    setConfettiId(Date.now());

    // start the cats!
    setShowCats(true);
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    setPopup("tryAgain");
  };

  const closePopup = () => {
    setPopup("none");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100 p-4 relative overflow-hidden">
      {/* Floating cats appear here when showCats is true */}
      <CatRain active={showCats} />

      <main className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl text-center border-2 border-pink-200">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">💖 Will you be my Valentine? 💖</h1>

        <p className="text-pink-500 mb-8">(Choose carefully...)</p>

        <div className="flex justify-center gap-6">
          <YesButton onClick={handleYesClick} />

          <NoButton onClick={handleNoClick} clickCount={noClickCount} />
        </div>

        <PopupManager type={popup} onClose={closePopup} />

        <ConfettiOverlay triggerId={confettiId} />

        <p className="mt-6 text-sm text-pink-400">No clicks so far: {noClickCount}</p>
      </main>
    </div>
  );
}
