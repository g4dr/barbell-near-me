'use client';

import { useState } from 'react';

interface SupplementCardProps {
  supplement: {
    id: string;
    name: string;
    brand: string;
    slug: string;
    price: number;
    original_price: number;
    rating: number;
    category: string;
    image_url: string;
    affiliate_url: string;
    description: string;
  };
}

export function SupplementCard({ supplement }: SupplementCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [src, setSrc] = useState(supplement.image_url);

  return (
    <div
      className="bg-iron-800 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-900/30 to-iron-900">
        <img
          src={src}
          alt={supplement.name}
          onError={(e) => { 
            (e.target as HTMLImageElement).src = '/fallback-barbell.svg'; 
            setSrc('/fallback-barbell.svg'); 
          }}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full capitalize">
            {supplement.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-iron-900/80 backdrop-blur text-white text-sm px-2 py-1 rounded-lg flex items-center gap-1">
            ⭐ {supplement.rating}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            FREE SHIPPING
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-purple-400 text-sm font-medium uppercase tracking-wide">{supplement.brand}</p>
        <h3 className="text-white font-semibold text-lg mt-1 mb-2 line-clamp-1">{supplement.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{supplement.description}</p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">${supplement.price}</span>
            <span className="text-gray-400 text-sm line-through ml-2">${supplement.original_price}</span>
          </div>
          <a 
            href={supplement.affiliate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
}
