import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, BARBELL_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Shop Barbells - Olympic, Powerlifting & CrossFit Bars | BarbellNearMe',
  description: 'Browse our complete collection of quality barbells. Olympic bars, powerlifting bars, CrossFit bars, and women\'s bars at TruGrit Fitness.',
  keywords: 'buy barbell, barbell shop, olympic barbell, powerlifting barbell, crossfit barbell',
};

export default function BarbellsPage() {
  const olympicBarbells = MOCK_BARBELLS.filter(b => b.category === 'olympic');
  const powerliftingBarbells = MOCK_BARBELLS.filter(b => b.category === 'powerlifting');
  const crossfitBarbells = MOCK_BARBELLS.filter(b => b.category === 'crossfit');
  const womenBarbells = MOCK_BARBELLS.filter(b => b.category === 'women');

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-gym-800 to-iron-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            🏋️ Shop Quality Barbells
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            From Olympic competition bars to garage gym essentials
          </p>
          <a 
            href={BARBELL_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            <span>🛒</span>
            <span>Shop All Barbells</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Olympic Bars */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                🥇 Olympic Barbells
              </h2>
              <p className="text-gray-400">Competition-ready bars for Olympic lifting</p>
            </div>
            <a href="/barbells/olympic" className="text-gym-400 hover:text-gym-300 font-medium">
              View All →
            </a>
          </div>
          <BarbellGrid barbells={olympicBarbells.slice(0, 4)} columns={4} />
        </section>

        {/* Powerlifting Bars */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                💪 Powerlifting Bars
              </h2>
              <p className="text-gray-400">Built for maximal strength and heavy lifts</p>
            </div>
            <a href="/barbells/powerlifting" className="text-gym-400 hover:text-gym-300 font-medium">
              View All →
            </a>
          </div>
          <BarbellGrid barbells={powerliftingBarbells.slice(0, 4)} columns={4} />
        </section>

        {/* CrossFit Bars */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                🔥 CrossFit Barbells
              </h2>
              <p className="text-gray-400">Versatile bars for functional training</p>
            </div>
            <a href="/barbells/crossfit" className="text-gym-400 hover:text-gym-300 font-medium">
              View All →
            </a>
          </div>
          <BarbellGrid barbells={crossfitBarbells.slice(0, 4)} columns={4} />
        </section>

        {/* Women's Bars */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">
                👩 Women's Barbells
              </h2>
              <p className="text-gray-400">Lighter bars designed for female athletes</p>
            </div>
            <a href="/barbells/women" className="text-gym-400 hover:text-gym-300 font-medium">
              View All →
            </a>
          </div>
          <BarbellGrid barbells={womenBarbells.slice(0, 4)} columns={4} />
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gym-700 via-gym-600 to-gym-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/80 mb-8">
            Browse our complete collection at TruGrit Fitness
          </p>
          <a 
            href={BARBELL_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gym-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <span>🛒</span>
            <span>Shop All Barbells</span>
            <span>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
