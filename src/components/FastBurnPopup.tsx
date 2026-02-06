"use client";

import { useState, useEffect } from "react";

interface FastBurnPopupProps {
  affiliateLink?: string;
  showOnRoutes?: string[];
}

const FASTBURN_POPUP: FastBurnPopupProps = {
  affiliateLink: "https://top-deal.me/a/NkRQzIjjYnHREwo",
};

export default function FastBurnPopup({
  affiliateLink = FASTBURN_POPUP.affiliateLink,
}: FastBurnPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    // Show popup after 3 seconds delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else {
        if (timeLeft.minutes > 0) {
          setTimeLeft({ minutes: timeLeft.minutes - 1, seconds: 59 });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  const handleClick = () => {
    // Open affiliate link in new tab
    window.open(affiliateLink, "_blank");
  };

  if (isClosed) return null;

  return (
    <>
      {/* Popup Container */}
      <div
        className={`fixed bottom-4 left-4 z-50 max-w-sm w-full transition-all duration-500 ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ animation: "slideUpFade 0.5s ease-out" }}
      >
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-orange-600 rounded-xl shadow-2xl overflow-hidden border border-orange-400/30">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close popup"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Urgency Badge */}
          <div className="bg-orange-500 text-white text-center py-1 px-3 text-sm font-bold">
            🔥 LIMITED TIME OFFER - {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, "0")} LEFT
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Fire Icon */}
            <div className="flex justify-center mb-3">
              <div className="text-5xl animate-pulse">🔥</div>
            </div>

            {/* Headline */}
            <h3 className="text-white text-xl font-bold text-center mb-2 leading-tight">
              BURN FAT 3X FASTER
            </h3>
            <p className="text-orange-100 text-center text-sm mb-3">
              Transform Your Body in Weeks, Not Months!
            </p>

            {/* Benefit Points */}
            <ul className="text-white text-sm space-y-1 mb-4">
              <li className="flex items-center gap-2">
                <span className="text-orange-300">✓</span> Boost Metabolism by 300%
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-300">✓</span> Crush Cravings All Day
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-300">✓</span> Energy That Lasts Hours
              </li>
            </ul>

            {/* CTA Button */}
            <button
              onClick={handleClick}
              className="w-full bg-white text-red-600 font-bold py-3 px-4 rounded-lg hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <span className="block text-lg">GET FASTBURN EXTREME</span>
              <span className="block text-xs font-normal opacity-80">
                🔥 50% OFF - Limited Stock!
              </span>
            </button>

            {/* Trust Badge */}
            <p className="text-center text-orange-200 text-xs mt-3">
              ⭐⭐⭐⭐⭐ 4.9/5 Rating • 50,000+ Happy Customers
            </p>
          </div>

          {/* Bottom Strip */}
          <div className="bg-black/20 py-1 px-3 text-center">
            <p className="text-white text-xs font-medium">
              ⚡ Fast Shipping • 30-Day Money Back Guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style jsx global>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
