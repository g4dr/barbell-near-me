'use client';

import { useState, useEffect } from 'react';

export default function FastBurnPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay to capture attention */}
      <div 
        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div 
        className={`
          fixed bottom-4 left-4 z-50
          w-[360px] max-w-[calc(100vw-2rem)]
          bg-gradient-to-br from-orange-500 via-red-500 to-pink-600
          rounded-2xl shadow-2xl overflow-hidden
          transform transition-all duration-500 ease-out
          ${isClosing ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}
          animate-slideUpFade
        `}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        <div className="absolute -top-10 -left-2">
          <div className="bg-yellow-400 text-orange-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
            🔥 HOT OFFER
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Product Image Placeholder */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl">💪</span>
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-white text-xl font-bold text-center mb-2 leading-tight">
            BURN FAT
            <br />
            <span className="text-yellow-300">3X FASTER</span>
          </h3>

          {/* Subheadline */}
          <p className="text-white/90 text-sm text-center mb-4">
            The #1 fat burner supplement to optimize your workouts
          </p>

          {/* Benefits */}
          <ul className="text-white/80 text-xs space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span>
              Accelerates metabolism
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span>
              More energy for training
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span>
              Visible results in 2-3 weeks
            </li>
          </ul>

          {/* CTA Button */}
          <a 
            href="https://top-deal.me/a/NkRQzIjjYnHREwo"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-orange-600 font-bold text-center py-3 px-4 rounded-xl hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🔥 BUY NOW
          </a>

          {/* Urgency */}
          <p className="text-center text-white/70 text-xs mt-3">
            ⏰ Offer expires soon
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="bg-black/10 py-2 px-4">
          <p className="text-center text-white/60 text-xs">
            🚚 Free Shipping | 🔒 Secure Payment
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideUpFade {
          animation: slideUpFade 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
