import { Metadata } from 'next';
import { MOCK_BARBELLS, getBarbellsByBrand } from '@/lib/data';
import { Header, Footer, BarbellGrid } from '@/components';

export const metadata: Metadata = {
  title: 'CAP Barbells - Affordable Quality Gym Equipment | BarbellNearMe',
  description: 'Shop CAP barbells for budget-friendly quality. American-made gym equipment at unbeatable prices. Perfect for home gyms and commercial use.',
  keywords: 'CAP barbell, CAP Fitness, budget barbell, affordable gym equipment, american made',
  openGraph: {
    title: 'CAP Barbells - Quality at Affordable Prices',
    description: 'Budget-friendly barbells without compromising on quality.',
  },
};

export default function CAPPage() {
  const brandBarbells = getBarbellsByBrand('CAP');

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💎</span>
            <span>Best Value</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            CAP Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven quality at unbeatable prices. CAP has been equipping home gyms and commercial facilities for decades.
          </p>
        </div>
      </div>

      {/* Brand Stats */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">Budget King</p>
              <p className="text-gray-400 text-sm">Best Value</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{brandBarbells.length}</p>
              <p className="text-gray-400 text-sm">Models Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">$129</p>
              <p className="text-gray-400 text-sm">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">⭐4.2</p>
              <p className="text-gray-400 text-sm">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barbells */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">
          CAP Barbells ({brandBarbells.length})
        </h2>
        <BarbellGrid barbells={brandBarbells} columns={4} />
      </div>

      {/* Why CAP */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Quality Without the Premium Price
            </h2>
            <p className="text-gray-400 mb-8">
              CAP barbells offer exceptional value for budget-conscious lifters. Whether you're setting up a home gym or equipping a commercial facility, CAP delivers reliable performance without breaking the bank.
            </p>
            <a 
              href="https://trugritfitness.pxf.io/Z6PKV1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              <span>🛒</span>
              <span>Shop CAP Barbells at TruGrit Fitness</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
