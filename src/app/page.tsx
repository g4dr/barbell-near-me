import { Header, Footer, SearchHero, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, MOCK_BRANDS, MOCK_CITIES, MOCK_SUPPLEMENTS, SUPPLEMENT_AFFILIATE_URL } from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
  const topBarbells = MOCK_BARBELLS.slice(0, 4);
  const topSupplements = MOCK_SUPPLEMENTS.slice(0, 3);
  const categories = [
    { name: 'Olympic Bars', icon: '🏅', count: MOCK_BARBELLS.filter(b => b.category === 'olympic').length, href: '/barbells?category=olympic' },
    { name: 'Powerlifting', icon: '💪', count: MOCK_BARBELLS.filter(b => b.category === 'powerlifting').length, href: '/barbells?category=powerlifting' },
    { name: 'CrossFit', icon: '🔥', count: MOCK_BARBELLS.filter(b => b.category === 'crossfit').length, href: '/barbells?category=crossfit' },
    { name: "Women's Bars", icon: '👩', count: MOCK_BARBELLS.filter(b => b.category === 'women').length, href: '/barbells?category=women' },
    { name: 'Technique', icon: '🎯', count: MOCK_BARBELLS.filter(b => b.category === 'technique').length, href: '/barbells?category=technique' },
    { name: 'Budget', icon: '💰', count: MOCK_BARBELLS.filter(b => b.price <= 300).length, href: '/best/barbells-under-300' },
  ];

  return (
    <>
      <Header />

      {/* Hero Search */}
      <SearchHero />

      {/* Categories */}
      <section className="py-16 bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Browse Barbell Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="bg-iron-700 hover:bg-iron-600 rounded-xl p-6 text-center transition-all hover:scale-105 group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-white font-semibold group-hover:text-gym-400">{cat.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{cat.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">🏆 Top Barbell Picks</h2>
              <p className="text-gray-400 mt-2">Our most recommended barbells from TruGrit Fitness</p>
            </div>
            <Link href="/barbells/compare" className="text-gym-400 hover:text-gym-300 font-medium">
              View All →
            </Link>
          </div>
          <BarbellGrid barbells={topBarbells} columns={4} />
        </div>
      </section>

      {/* Supplements Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/50 to-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>💪</span>
              <span>New Arrival</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Fuel Your Gains
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium supplements curated for serious lifters. Powered by Muscle & Strength.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {topSupplements.map((supp) => (
              <div 
                key={supp.id}
                className="bg-iron-800 rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-900/30 to-iron-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">💊</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full capitalize">
                      {supp.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-iron-900/80 backdrop-blur text-white text-sm px-2 py-1 rounded-lg flex items-center gap-1">
                      ⭐ {supp.rating}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-purple-400 text-sm font-medium uppercase tracking-wide">{supp.brand}</p>
                  <h3 className="text-white font-semibold text-lg mt-1 mb-2">{supp.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{supp.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${supp.price}</span>
                    <a 
                      href={supp.affiliate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      Shop Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href={SUPPLEMENT_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            >
              <span>🛒</span>
              <span>Shop All Supplements at Muscle & Strength</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Cities */}
      <section className="py-16 bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Find Barbells in Your City
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MOCK_CITIES.map((city) => (
              <Link
                key={city.id}
                href={`/barbells/near-me?city=${city.slug}`}
                className="bg-iron-700 hover:bg-iron-600 rounded-lg p-4 text-center transition-colors"
              >
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-white font-semibold">{city.name}</h3>
                <p className="text-gray-400 text-sm">{city.country}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/barbells/near-me" className="text-gym-400 hover:text-gym-300">
              View all cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MOCK_BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-iron-800 hover:bg-iron-700 rounded-xl p-6 text-center border border-iron-700 hover:border-gym-500 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gym-600 to-gym-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                  {brand.name[0]}
                </div>
                <h3 className="text-white font-semibold">{brand.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{brand.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gym-700 via-gym-600 to-gym-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Level Up Your Lifting?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Find your perfect barbell from TruGrit Fitness and fuel your progress with premium supplements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/barbells/compare"
              className="bg-white text-gym-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Compare Barbells →
            </Link>
            <Link
              href="/barbells/near-me"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Find Near Me 📍
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
