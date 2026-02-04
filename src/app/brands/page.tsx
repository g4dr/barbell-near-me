import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer, BarbellCard } from '@/components';
import { MOCK_BARBELLS, BARBELL_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Barbell Brands - Rogue, Eleiko, REP & CAP | BarbellNearMe',
  description: 'Compare top barbell brands. Rogue, Eleiko, REP, and CAP barbells with specs, prices, and reviews.',
  keywords: 'Rogue barbell, Eleiko barbell, REP barbell, CAP barbell, barbell brands',
};

const BRANDS = [
  {
    slug: 'rogue',
    name: 'Rogue Fitness',
    logo: '🔴',
    description: 'American-made quality barbells trusted by gyms worldwide',
    color: 'red',
    stats: ['Made in USA', 'IPF Approved', 'Best Seller']
  },
  {
    slug: 'eleiko',
    name: 'Eleiko',
    logo: '🟡',
    description: 'Swedish-made premium barbells for competition and training',
    color: 'yellow',
    stats: ['Swedish Steel', 'Competition Standard', 'Premium']
  },
  {
    slug: 'rep',
    name: 'REP Fitness',
    logo: '🟢',
    description: 'American-made value barbells for home gyms',
    color: 'green',
    stats: ['Great Value', 'American Made', 'Popular']
  },
  {
    slug: 'cap',
    name: 'CAP Barbell',
    logo: '🔵',
    description: 'Budget-friendly barbells for beginners and home gyms',
    color: 'blue',
    stats: ['Budget Friendly', 'Entry Level', 'Reliable']
  }
];

export default function BrandsPage() {
  const brandProducts = {
    rogue: MOCK_BARBELLS.filter(b => b.brand?.toLowerCase().includes('rogue')),
    eleiko: MOCK_BARBELLS.filter(b => b.brand?.toLowerCase().includes('eleiko')),
    rep: MOCK_BARBELLS.filter(b => b.brand?.toLowerCase().includes('rep')),
    cap: MOCK_BARBELLS.filter(b => b.brand?.toLowerCase().includes('cap')),
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-gym-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            🏷️ Top Barbell Brands
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Compare the best barbell brands in the industry. From American-made Rogue to Swedish Eleiko.
          </p>
          <a 
            href={BARBELL_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            <span>🛒</span>
            <span>Shop All Brands</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {BRANDS.map((brand) => (
            <div 
              key={brand.slug}
              className={`bg-gradient-to-br from-${brand.color}-900/50 to-${brand.color}-800/30 border border-${brand.color}-700/50 rounded-2xl p-8 hover:border-${brand.color}-500/50 transition-all`}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-6xl">{brand.logo}</span>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    {brand.name}
                  </h2>
                  <p className="text-gray-400">{brand.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {brand.stats.map((stat, i) => (
                  <span 
                    key={i}
                    className={`px-3 py-1 bg-${brand.color}-600/30 text-${brand.color}-300 text-sm rounded-full`}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link 
                  href={`/brands/${brand.slug}`}
                  className={`flex-1 text-center py-3 bg-${brand.color}-600 hover:bg-${brand.color}-700 text-white font-semibold rounded-xl transition-colors`}
                >
                  View Products
                </Link>
                <a 
                  href={BARBELL_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center py-3 border border-${brand.color}-500 text-${brand.color}-400 hover:bg-${brand.color}-900/30 font-semibold rounded-xl transition-colors`}
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Comparison */}
      <div className="bg-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            🏆 Brand Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-iron-700">
                  <th className="py-4 px-6 text-gray-400 font-medium">Feature</th>
                  {BRANDS.map(brand => (
                    <th key={brand.slug} className="py-4 px-6 text-white font-bold text-center">
                      <span className="text-2xl">{brand.logo}</span>
                      <span className="block text-sm mt-1">{brand.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-iron-800">
                  <td className="py-4 px-6 font-medium">Country of Origin</td>
                  <td className="py-4 px-6 text-center">🇺🇸 USA</td>
                  <td className="py-4 px-6 text-center">🇸🇪 Sweden</td>
                  <td className="py-4 px-6 text-center">🇺🇸 USA</td>
                  <td className="py-4 px-6 text-center">🌍 Global</td>
                </tr>
                <tr className="border-b border-iron-800">
                  <td className="py-4 px-6 font-medium">Price Range</td>
                  <td className="py-4 px-6 text-center">$$$</td>
                  <td className="py-4 px-6 text-center">$$$$</td>
                  <td className="py-4 px-6 text-center">$$</td>
                  <td className="py-4 px-6 text-center">$</td>
                </tr>
                <tr className="border-b border-iron-800">
                  <td className="py-4 px-6 font-medium">IPF Approved</td>
                  <td className="py-4 px-6 text-center">✅ Yes</td>
                  <td className="py-4 px-6 text-center">✅ Yes</td>
                  <td className="py-4 px-6 text-center">✅ Some</td>
                  <td className="py-4 px-6 text-center">❌ No</td>
                </tr>
                <tr className="border-b border-iron-800">
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center">All-around</td>
                  <td className="py-4 px-6 text-center">Competition</td>
                  <td className="py-4 px-6 text-center">Home Gym</td>
                  <td className="py-4 px-6 text-center">Beginners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gym-700 via-gym-600 to-gym-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Find Your Perfect Barbell
          </h2>
          <p className="text-white/80 mb-8">
            Browse our complete collection from all top brands
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
