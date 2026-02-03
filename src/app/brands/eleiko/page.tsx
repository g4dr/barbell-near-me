import { Metadata } from 'next';
import { MOCK_BARBELLS, getBarbellsByBrand } from '@/lib/data';
import { Header, Footer, BarbellGrid } from '@/components';

export const metadata: Metadata = {
  title: 'Eleiko Barbells - Swedish Quality Since 1957 | BarbellNearMe',
  description: 'Discover Eleiko barbells, the choice of Olympic champions worldwide. Premium Swedish-made barbells for competition and training. Experience legendary quality and precision.',
  keywords: 'Eleiko barbell, Eleiko Olympic bar, Swedish barbell, competition barbell, weightlifting bar',
  openGraph: {
    title: 'Eleiko Barbells - Swedish Excellence Since 1957',
    description: 'Premium barbells made in Sweden, used by Olympic champions worldwide.',
  },
};

export default function EleikoPage() {
  const brandBarbells = getBarbellsByBrand('Eleiko');

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🇸🇪</span>
            <span>Swedish Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Eleiko Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Since 1957, Eleiko has been crafting the world's finest barbells. Used in more World Championships than any other brand.
          </p>
        </div>
      </div>

      {/* Brand Stats */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">Since 1957</p>
              <p className="text-gray-400 text-sm">Swedish Heritage</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{brandBarbells.length}</p>
              <p className="text-gray-400 text-sm">Competition Models</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">215K+</p>
              <p className="text-gray-400 text-sm">PSI Tensile Strength</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">⭐4.9</p>
              <p className="text-gray-400 text-sm">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barbells */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">
          Eleiko Competition Barbells ({brandBarbells.length})
        </h2>
        <BarbellGrid barbells={brandBarbells} columns={4} />
      </div>

      {/* Why Eleiko */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              The Choice of Champions
            </h2>
            <p className="text-gray-400 mb-8">
              Eleiko barbells are the official equipment of the International Weightlifting Federation and have been used in countless World Championships and Olympic Games. When nothing but the best will do, athletes choose Eleiko.
            </p>
            <a 
              href="https://trugritfitness.pxf.io/Z6PKV1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              <span>🛒</span>
              <span>Shop Eleiko at TruGrit Fitness</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
