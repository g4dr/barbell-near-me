import type { Metadata } from 'next';
import { Header, Footer, SupplementCard } from '@/components';
import { MOCK_SUPPLEMENTS, SUPPLEMENT_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Premium Supplements - Whey Protein, Creatine & More | BarbellNearMe',
  description: 'Shop premium supplements for muscle growth and recovery. Whey protein, creatine, pre-workout, and more at Muscle & Strength.',
  keywords: 'whey protein, creatine, pre-workout, supplements, muscle growth, fitness supplements',
};

export default function SupplementsPage() {
  const proteins = MOCK_SUPPLEMENTS.filter(s => s.category === 'protein');
  const performance = MOCK_SUPPLEMENTS.filter(s => s.category === 'performance');
  const preWorkouts = MOCK_SUPPLEMENTS.filter(s => s.category === 'pre-workout');
  const health = MOCK_SUPPLEMENTS.filter(s => s.category === 'health');

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>💪</span>
            <span>Premium Quality</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Fuel Your Gains
          </h1>
          <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
            Premium supplements curated for serious lifters. Get 10% off with code <strong className="text-white">LIFT10</strong>
          </p>
          <a 
            href={SUPPLEMENT_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span>🛒</span>
            <span>Shop All Supplements</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-iron-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">🌿</span>
              <span className="text-white font-semibold">Natural Ingredients</span>
              <span className="text-gray-400 text-sm">No artificial fillers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">🔬</span>
              <span className="text-white font-semibold">Lab Tested</span>
              <span className="text-gray-400 text-sm">Quality assured</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">🚀</span>
              <span className="text-white font-semibold">Fast Shipping</span>
              <span className="text-gray-400 text-sm">Free over $50</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-2">💯</span>
              <span className="text-white font-semibold">30-Day Returns</span>
              <span className="text-gray-400 text-sm">Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Protein Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                🥤 Protein Powders
              </h2>
              <p className="text-gray-400">Build and repair muscle tissue</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proteins.map((supp) => (
              <SupplementCard key={supp.id} supplement={supp} />
            ))}
          </div>
        </section>

        {/* Pre-Workout Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                ⚡ Pre-Workouts
              </h2>
              <p className="text-gray-400">Boost energy and focus for powerful sessions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {preWorkouts.map((supp) => (
              <SupplementCard key={supp.id} supplement={supp} />
            ))}
          </div>
        </section>

        {/* Performance Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                💪 Performance
              </h2>
              <p className="text-gray-400">Enhance strength and recovery</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performance.map((supp) => (
              <SupplementCard key={supp.id} supplement={supp} />
            ))}
          </div>
        </section>

        {/* Health Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                🫀 Health & Wellness
              </h2>
              <p className="text-gray-400">Support overall health</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {health.map((supp) => (
              <SupplementCard key={supp.id} supplement={supp} />
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Need More Options?
          </h2>
          <p className="text-white/80 mb-8">
            Browse our complete supplement collection at Muscle & Strength
          </p>
          <a 
            href={SUPPLEMENT_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span>🛒</span>
            <span>Shop All Supplements</span>
            <span>→</span>
          </a>
          <p className="text-white/60 text-sm mt-4">
            Use code <strong className="text-white">LIFT10</strong> for 10% off
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
