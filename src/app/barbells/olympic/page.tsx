import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Olympic Barbells - 20kg Weightlifting Bars | BarbellNearMe',
  description: 'Shop Olympic barbells (20kg) for weightlifting and CrossFit. Rogue, Eleiko, CAP & REP bars at TruGrit Fitness. IWF compliant.',
  openGraph: {
    title: 'Olympic Barbells - 20kg Competition Bars',
    description: 'Official Olympic weightlifting bars for serious lifters.',
  }
};

const olympicBarbells = MOCK_BARBELLS.filter(b => b.category === 'olympic');

export default function OlympicPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏅</span>
            <span>Competition Standard</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Olympic Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            20kg Olympic weightlifting bars for snatch, clean & jerk, and CrossFit. IWF compliant specifications.
          </p>
        </div>
      </div>

      {/* Specs */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">20kg</p>
              <p className="text-gray-400 text-sm">Weight</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2200mm</p>
              <p className="text-gray-400 text-sm">Length</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">415mm</p>
              <p className="text-gray-400 text-sm">Sleeve Length</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">28mm</p>
              <p className="text-gray-400 text-sm">Shaft Diameter</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50mm</p>
              <p className="text-gray-400 text-sm">Sleeve Diameter</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BarbellGrid barbells={olympicBarbells} columns={4} />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready for the Platform?
          </h2>
          <p className="text-white/80 mb-8">
            Shop Olympic bars at TruGrit Fitness for competition-level performance.
          </p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Shop Olympic Bars</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
