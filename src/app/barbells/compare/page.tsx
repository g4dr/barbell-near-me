'use client';

import { useState } from 'react';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, getBarbellsByCategory } from '@/lib/data';

export default function ComparePage() {
  const [sortBy, setSortBy] = useState('rating');
  const [category, setCategory] = useState('all');
  
  const filteredBarbells = category === 'all' 
    ? MOCK_BARBELLS 
    : getBarbellsByCategory(category);
    
  const sortedBarbells = [...filteredBarbells].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'tensile': return b.tensile_strength - a.tensile_strength;
      default: return 0;
    }
  });

  return (
    <>
      <Header />

      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-4">
            Compare Barbells
          </h1>
          <p className="text-gray-400 text-center text-lg mb-8">
            Find the perfect barbell for your lifting goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 bg-white text-iron-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-gym-500"
            >
              <option value="all">All Categories</option>
              <option value="olympic">Olympic Bars</option>
              <option value="powerlifting">Powerlifting</option>
              <option value="crossfit">CrossFit</option>
              <option value="women">Women's Bars</option>
            </select>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white text-iron-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-gym-500"
            >
              <option value="rating">Top Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="tensile">Tensile Strength</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-400 mb-6">
          Showing {sortedBarbells.length} barbells
        </p>
        <BarbellGrid barbells={sortedBarbells} columns={4} />
      </div>

      <Footer />
    </>
  );
}
