import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'CrossFit Barbells - Functional Training Bars | BarbellNearMe',
  description: 'Multi-purpose CrossFit barbells for Olympic lifting and high-rep training. Durable, versatile bars at TruGrit Fitness.',
  openGraph: {
    title: 'CrossFit Barbells - Versatile Training',
    description: 'Bars built for CrossFit and functional fitness.',
  }
};

const crossfitBarbells = MOCK_BARBELLS.filter(b => b.category === 'crossfit');

export default function CrossFitPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🔥</span>
            <span>WOD Ready</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            CrossFit Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Multi-purpose bars designed for high-rep Olympic lifting, thrusters, and everything in your WOD.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">28.5mm</p>
              <p className="text-gray-400 text-sm">Shaft Diameter</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">75ft-lb</p>
              <p className="text-gray-400 text-sm">Spin Efficiency</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-400">Dual Markings</p>
              <p className="text-gray-400 text-sm">IWF & IPF</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Lifetime</p>
              <p className="text-gray-400 text-sm">Bushing Warranty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products or Coming Soon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {crossfitBarbells.length > 0 ? (
          <BarbellGrid barbells={crossfitBarbells} columns={4} />
        ) : (
          <div className="bg-iron-800 rounded-2xl p-12 text-center border border-iron-700">
            <div className="text-6xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-white mb-4">CrossFit Barbells Coming Soon!</h2>
            <p className="text-gray-400 mb-6">
              We're adding more CrossFit-friendly bars to our collection.
            </p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              <span>Browse All Bars</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready for Your WOD?
          </h2>
          <p className="text-white/80 mb-8">
            Shop CrossFit bars at TruGrit Fitness.
          </p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Shop CrossFit Bars</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
