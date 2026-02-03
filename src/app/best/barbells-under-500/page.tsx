import { MOCK_BARBELLS } from '@/lib/data';

import { Header, Footer, BarbellGrid } from '@/components';
export default function Under500Page() {
  const barbells = MOCK_BARBELLS.filter(b => b.price <= 500);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gym-600/20 text-gym-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>⭐</span>
            <span>Sweet Spot</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Best Barbells Under $500
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The sweet spot for home gym barbells. Quality materials and construction without the premium competition pricing.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4">
            <span className="text-gray-400 text-sm flex items-center">Price range:</span>
            <a href="/best/barbells-under-200" className="bg-iron-700 hover:bg-iron-600 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
              Under $200
            </a>
            <a href="/best/barbells-under-300" className="bg-iron-700 hover:bg-iron-600 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
              Under $300
            </a>
            <a href="/best/barbells-under-500" className="bg-gym-600 text-white px-4 py-2 rounded-lg text-sm">
              Under $500
            </a>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-400 mb-6">
          {barbells.length} barbells under $500
        </p>
        <BarbellGrid barbells={barbells} columns={4} />
      </div>

      {/* Tips */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            💡 Why Under $500?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔩</div>
              <h3 className="text-white font-semibold mb-2">Better Materials</h3>
              <p className="text-gray-400 text-sm">Higher tensile strength steel, better chrome or ceramic coatings that resist rust and wear.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">📏</div>
              <h3 className="text-white font-semibold mb-2">Precision Knurling</h3>
              <p className="text-gray-400 text-sm">More aggressive and consistent knurling patterns for better grip during heavy lifts.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Smooth Rotation</h3>
              <p className="text-gray-400 text-sm">Quality bushings or bearings in the sleeves for smooth and reliable plate rotation.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
