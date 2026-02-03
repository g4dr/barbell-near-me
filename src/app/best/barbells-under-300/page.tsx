import type { Metadata } from 'next';

import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';

export default function BestUnder300Page() {
  const affordableBarbells = MOCK_BARBELLS.filter(b => b.price <= 300);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💰</span>
            <span>Budget-Friendly Picks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Best Barbells Under $300
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Great quality doesn't have to break the bank. Compare top-rated barbells under $300.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4">
            <span className="text-gray-400 text-sm flex items-center">Quick filters:</span>
            <a href="/best/barbells-under-200" className="bg-iron-700 hover:bg-iron-600 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
              Under $200
            </a>
            <a href="/best/barbells-under-300" className="bg-gym-600 text-white px-4 py-2 rounded-lg text-sm">
              Under $300
            </a>
            <a href="/best/barbells-under-500" className="bg-iron-700 hover:bg-iron-600 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
              Under $500
            </a>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-400 mb-6">
          {affordableBarbells.length} barbells under $300
        </p>
        <BarbellGrid barbells={affordableBarbells} columns={4} />
      </div>

      {/* Tips */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            💡 Tips for Buying a Budget Barhell
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-white font-semibold mb-2">Check Tensile Strength</h3>
              <p className="text-gray-400 text-sm">Look for at least 150,000 PSI for home gyms. Lower PSI may bend over time.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-white font-semibold mb-2">Consider Weight</h3>
              <p className="text-gray-400 text-sm">20kg (45lbs) is standard for Olympic lifting. Women's bars are 15kg.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-white font-semibold mb-2">Sleeve Rotation</h3>
              <p className="text-gray-400 text-sm">Ensure sleeves rotate smoothly for Olympic lifts to protect your wrists.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
