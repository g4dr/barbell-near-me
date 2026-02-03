import type { Metadata } from 'next';

import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';


const REP_BARBELLS = MOCK_BARBELLS.filter(b => b.brand === 'REP');

export default function REPBrandPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-4xl text-white font-bold">
              R
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                REP Fitness Barbells
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Premium home gym equipment designed in the USA. The go-to brand for serious lifters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-gray-400 text-sm">Barbell Models</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">USA</p>
              <p className="text-gray-400 text-sm">Designed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">⭐ 4.7</p>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$299+</p>
              <p className="text-gray-400 text-sm">Starting Price</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">
          💪 REP Barbells at TruGrit
        </h2>
        <BarbellGrid barbells={REP_BARBELLS} columns={4} />
      </div>

      {/* Why REP */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Why Choose REP?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-white font-semibold mb-2">Home Gym Expert</h3>
              <p className="text-gray-400 text-sm">Designed by home gym enthusiasts, for home gym enthusiasts.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔩</div>
              <h3 className="text-white font-semibold mb-2">205,000 PSI Steel</h3>
              <p className="text-gray-400 text-sm">High-strength steel for serious training demands.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-white font-semibold mb-2">Smooth Sleeves</h3>
              <p className="text-gray-400 text-sm">Precision-machined bushings for fluid rotation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Build Your Dream Home Gym
          </h2>
          <p className="text-white/80 mb-8">
            Shop REP's premium barbell lineup at TruGrit Fitness.
          </p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Shop REP at TruGrit</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
