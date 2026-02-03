'use client';

import { useState } from 'react';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, MOCK_CITIES } from '@/lib/data';

export default function NearMePage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const city = MOCK_CITIES.find(c => c.slug === selectedCity) || 
               MOCK_CITIES.find(c => c.name.toLowerCase() === selectedCity.toLowerCase());

  const nearbyBarbells = MOCK_BARBELLS;
  const cities = MOCK_CITIES;

  const handleCitySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSelectedCity(searchQuery.toLowerCase().replace(/\s+/g, '-'));
    }
  };

  return (
    <>
      <Header />

      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4">
            {city ? `Barbells in ${city.name}` : 'Find Barbells Near You'}
          </h1>
          <p className="text-gray-400 text-center text-lg mb-8">
            Discover the best barbells available in your area
          </p>

          <form onSubmit={handleCitySearch} className="max-w-xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📍</span>
                <input
                  type="text"
                  placeholder="Enter your city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white text-iron-900 rounded-xl text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gym-500"
                />
              </div>
              <button
                type="submit"
                className="bg-gym-600 hover:bg-gym-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-gray-400 text-sm whitespace-nowrap">Popular:</span>
            {cities.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCity(c.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCity === c.slug
                    ? 'bg-gym-600 text-white'
                    : 'bg-iron-700 text-gray-300 hover:bg-iron-600'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            {city ? `Available in ${city.name}, ${city.country}` : 'All Barbells'}
          </h2>
          <p className="text-gray-400">
            {nearbyBarbells.length} products found • Price range: ${Math.min(...nearbyBarbells.map(b => b.price))} - ${Math.max(...nearbyBarbells.map(b => b.price))}
          </p>
        </div>
        <BarbellGrid barbells={nearbyBarbells} columns={4} />
      </div>

      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-gym-700/50 to-gym-600/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              🏪 Want to try before you buy?
            </h3>
            <p className="text-gray-300 mb-6">
              Find local gyms and sporting goods stores in {city ? city.name : 'your area'} that carry barbells.
            </p>
            <button className="bg-gym-600 hover:bg-gym-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Find Local Stores →
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
