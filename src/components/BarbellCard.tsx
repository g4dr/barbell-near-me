'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BarbellCardProps {
  barbell: {
    id: string;
    name: string;
    brand: string;
    slug: string;
    weight: number;
    price: number;
    rating: number;
    coating: string;
    tensile_strength: number;
    image_url: string;
    affiliate_url: string;
    category: string;
  };
}

export function BarbellCard({ barbell }: BarbellCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [src, setSrc] = useState(barbell.image_url || '/fallback-barbell.svg');

  return (
    <div
      className="bg-iron-800 rounded-xl overflow-hidden border border-iron-700 hover:border-gym-500 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={src}
          alt={barbell.name}
          onError={(e) => { (e.target as HTMLImageElement).src = '/fallback-barbell.svg'; setSrc('/fallback-barbell.svg'); }}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-gym-600 text-white text-xs px-2 py-1 rounded-full capitalize">
            {barbell.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-iron-900/80 backdrop-blur text-white text-sm px-2 py-1 rounded-lg">
            ⭐ {barbell.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gym-400 text-sm font-medium uppercase tracking-wide">{barbell.brand}</p>
        <h3 className="text-white font-semibold text-lg mt-1 mb-2 line-clamp-1">{barbell.name}</h3>
        
        {/* Specs */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
          <span className="flex items-center gap-1">
            <span>🏋️</span> {barbell.weight}kg
          </span>
          <span className="flex items-center gap-1">
            <span>💪</span> {barbell.tensile_strength.toLocaleString()} PSI
          </span>
          <span className="capitalize">{barbell.coating}</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">${barbell.price}</span>
          </div>
          <a
            href={barbell.affiliate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gym-600 hover:bg-gym-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Check Price →
          </a>
        </div>
      </div>
    </div>
  );
}

interface BarbellGridProps {
  barbells: any[];
  columns?: 2 | 3 | 4;
}

export function BarbellGrid({ barbells, columns = 4 }: BarbellGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {barbells.map((barbell) => (
        <BarbellCard key={barbell.id} barbell={barbell} />
      ))}
    </div>
  );
}
