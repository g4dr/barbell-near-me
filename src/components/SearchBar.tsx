'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SearchHero() {
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      router.push(`/barbells/near-me?city=${city.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-24 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gym-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gym-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gym-600/20 text-gym-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>🏋️</span>
          <span>The #1 Barbell Comparison Engine</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Find the Perfect <span className="text-gym-500">Barbell</span> Near You
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Compare prices, specs, and reviews from top brands. Olympic, Powerlifting, CrossFit, and Women's bars — all in one place.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📍</span>
              <input
                type="text"
                placeholder="Enter your city or ZIP code..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-white text-iron-900 rounded-xl text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gym-500 shadow-xl"
              />
            </div>
            <button
              type="submit"
              className="bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-xl flex items-center justify-center gap-2"
            >
              <span>🔍</span>
              <span>Search</span>
            </button>
          </div>
        </form>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <span className="text-gray-400">Popular:</span>
          <a href="/barbells/near-me?city=new-york" className="text-gym-400 hover:text-gym-300">New York</a>
          <a href="/barbells/near-me?city=los-angeles" className="text-gym-400 hover:text-gym-300">Los Angeles</a>
          <a href="/barbells/near-me?city=chicago" className="text-gym-400 hover:text-gym-300">Chicago</a>
          <a href="/barbells/near-me?city=london" className="text-gym-400 hover:text-gym-300">London</a>
          <a href="/barbells/near-me?city=miami" className="text-gym-400 hover:text-gym-300">Miami</a>
        </div>
      </div>
    </div>
  );
}

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  variant?: 'hero' | 'compact';
}

export function SearchBar({ placeholder = 'Search barbells...', onSearch, variant = 'compact' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  if (variant === 'hero') {
    return <SearchHero />;
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-iron-800 border border-iron-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gym-500"
      />
    </form>
  );
}
