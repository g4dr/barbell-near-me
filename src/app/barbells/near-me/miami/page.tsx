import type { Metadata } from 'next';

import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';


const CITY_BARBELLS = MOCK_BARBELLS;

export default function MiamiPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌴</span>
            <span>Magic City</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Barbells in Miami
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Build your Miami home gym with premium barbells. Fast delivery across Florida.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">450K</p>
              <p className="text-gray-400 text-sm">Population</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-gray-400 text-sm">Fitness Studios</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">⭐ 4.8</p>
              <p className="text-gray-400 text-sm">Avg Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$295+</p>
              <p className="text-gray-400 text-sm">Starting Price</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">
          🏋️ Top Barbells for Miami
        </h2>
        <BarbellGrid barbells={CITY_BARBELLS} columns={4} />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Get Your Barbell Delivered to Miami
          </h2>
          <p className="text-white/80 mb-8">
            Shop TruGrit Fitness for fast delivery to Miami.
          </p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Shop Barbells</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
