import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, MOCK_BRANDS } from '@/lib/data';
import Link from 'next/link';

export const metadata = {
  title: 'Top Barbell Brands - BarbellNearMe',
  description: 'Compare barbells from top brands like Rogue, Eleiko, CAP, and REP. Find the perfect barbell for your lifting goals.',
};

export default function BrandsPage() {
  const brands = MOCK_BRANDS;

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Top Barbell Brands
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compare quality, prices, and specifications from the world's leading barbell manufacturers.
          </p>
        </div>
      </div>

      {/* Brand Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => {
            const brandBarbells = MOCK_BARBELLS.filter(b => b.brand === brand.name);
            const avgPrice = brandBarbells.length > 0
              ? Math.round(brandBarbells.reduce((sum, b) => sum + b.price, 0) / brandBarbells.length)
              : 0;
            const avgRating = brandBarbells.length > 0
              ? (brandBarbells.reduce((sum, b) => sum + b.rating, 0) / brandBarbells.length).toFixed(1)
              : 'N/A';

            return (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="bg-iron-800 rounded-xl p-6 border border-iron-700 hover:border-gym-500 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-iron-700 rounded-xl flex items-center justify-center text-3xl font-bold text-white">
                    {brand.name[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{brand.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-iron-700 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">{brandBarbells.length}</p>
                    <p className="text-gray-400 text-xs">Products</p>
                  </div>
                  <div className="bg-iron-700 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">${avgPrice}</p>
                    <p className="text-gray-400 text-xs">Avg Price</p>
                  </div>
                  <div className="bg-iron-700 rounded-lg p-3">
                    <p className="text-2xl font-bold text-gym-400">⭐{avgRating}</p>
                    <p className="text-gray-400 text-xs">Avg Rating</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-iron-700 hover:bg-iron-600 text-white py-3 rounded-lg font-medium transition-colors">
                  View All {brand.name} Barbells →
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* All Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-display font-bold text-white mb-6">
          All Barbells
        </h2>
        <BarbellGrid barbells={MOCK_BARBELLS} columns={4} />
      </div>

      <Footer />
    </>
  );
}
