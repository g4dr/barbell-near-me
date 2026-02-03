import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Women\'s Barbells - 15kg Olympic Bars | BarbellNearMe',
  description: 'Shop women\'s Olympic barbells (15kg) designed for female lifters. Lighter bars with optimal grip at TruGrit Fitness.',
  openGraph: {
    title: 'Women\'s Barbells - 15kg Olympic Bars',
    description: 'Bars designed specifically for female lifters.',
  }
};

const womenBarbells = MOCK_BARBELLS.filter(b => b.category === 'women');

export default function WomenPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>👩</span>
            <span>Designed for Women</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Women's Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            15kg Olympic bars designed for female lifters. Smaller diameter, lighter weight, perfect fit.
          </p>
        </div>
      </div>

      {/* Specs */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">15kg</p>
              <p className="text-gray-400 text-sm">Weight</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2010mm</p>
              <p className="text-gray-400 text-sm">Length</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-pink-400">25mm</p>
              <p className="text-gray-400 text-sm">Shaft Diameter</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">390mm</p>
              <p className="text-gray-400 text-sm">Sleeve Length</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">IWF</p>
              <p className="text-gray-400 text-sm">Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {womenBarbells.length > 0 ? (
          <BarbellGrid barbells={womenBarbells} columns={4} />
        ) : (
          <div className="bg-iron-800 rounded-2xl p-12 text-center border border-iron-700">
            <div className="text-6xl mb-4">👩</div>
            <h2 className="text-2xl font-bold text-white mb-4">Women's Barbells Available Soon!</h2>
            <p className="text-gray-400 mb-6">
              We're adding women's Olympic bars to our collection.
            </p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              <span>Browse All Bars</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>

      {/* Benefits */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Why Choose a Women's Bar?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">✋</div>
              <h3 className="text-white font-semibold mb-2">Better Grip</h3>
              <p className="text-gray-400 text-sm">25mm shaft diameter is easier to grip for smaller hands.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🏋️</div>
              <h3 className="text-white font-semibold mb-2">Lighter Weight</h3>
              <p className="text-gray-400 text-sm">15kg (33lbs) is perfect for learning proper technique.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="text-white font-semibold mb-2">Shorter Length</h3>
              <p className="text-gray-400 text-sm">Shorter overall length fits better in smaller home gyms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-700 via-pink-600 to-pink-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Find Your Perfect Fit
          </h2>
          <p className="text-white/80 mb-8">
            Shop women's bars at TruGrit Fitness.
          </p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-pink-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Shop Women's Bars</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
