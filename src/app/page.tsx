import { Header, Footer, SearchHero, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, MOCK_BRANDS, MOCK_CITIES, MOCK_SUPPLEMENTS, SUPPLEMENT_AFFILIATE_URL, BARBELL_AFFILIATE_URL } from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
  const topBarbells = MOCK_BARBELLS.slice(0, 4);
  const topSupplements = MOCK_SUPPLEMENTS.slice(0, 3);
  const categories = [
    { name: 'Olympic Bars', icon: '🏅', count: MOCK_BARBELLS.filter(b => b.category === 'olympic').length, href: '/barbells/olympic', desc: 'Competition-ready bars' },
    { name: 'Powerlifting', icon: '💪', count: MOCK_BARBELLS.filter(b => b.category === 'powerlifting').length, href: '/barbells/powerlifting', desc: 'Max strength bars' },
    { name: 'CrossFit', icon: '🔥', count: MOCK_BARBELLS.filter(b => b.category === 'crossfit').length, href: '/barbells/crossfit', desc: 'Versatile training bars' },
    { name: "Women's Bars", icon: '👩', count: MOCK_BARBELLS.filter(b => b.category === 'women').length, href: '/barbells/women', desc: 'Lighter grip bars' },
    { name: 'Budget', icon: '💰', count: MOCK_BARBELLS.filter(b => b.price <= 300).length, href: '/guide/budget-barbells', desc: 'Best value under $300' },
    { name: 'Shop All', icon: '🛒', count: MOCK_BARBELLS.length, href: '/barbells', desc: 'View all barbells' },
  ];

  return (
    <>
      <Header />

      {/* Hero Search - URGENT CTA */}
      <SearchHero />

      {/* Social Proof Bar */}
      <div className="bg-gradient-to-r from-gym-800 via-gym-700 to-gym-800 py-4 border-y border-gym-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <span className="text-gray-300">🏆 Trusted by 50,000+ lifters</span>
            <span className="text-gray-300">⭐ 4.8/5 average rating</span>
            <span className="text-gray-300">🚚 Free shipping over $300</span>
            <span className="text-gray-300">💯 30-day money back guarantee</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16 bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-4 text-center">
            Find Your Perfect Barbell
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Browse by category to find the barbell that matches your training goals
          </p>
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

      {/* Top Picks - HIGH CONVERTING SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-white">🔥 Best Selling Barbells</h2>
              <p className="text-gray-400 mt-2">Top-rated by our community • Updated February 2026</p>
            </div>
            <Link href="/barbells/compare" className="text-gym-400 hover:text-gym-300 font-medium flex items-center gap-1">
              View All <span>→</span>
            </Link>
          </div>
          <BarbellGrid barbells={topBarbells} columns={4} />
          
          <div className="text-center mt-8">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-gym-600/30"
            >
              <span>🛒</span>
              <span>Shop All Barbells at TruGrit Fitness</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-iron-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="text-white font-semibold">Secure Checkout</h4>
              <p className="text-gray-400 text-sm">SSL encrypted payments</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="text-white font-semibold">Free Shipping</h4>
              <p className="text-gray-400 text-sm">On orders $300+</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="text-white font-semibold">Top Rated</h4>
              <p className="text-gray-400 text-sm">4.8/5 from 5,000+ reviews</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">💯</div>
              <h4 className="text-white font-semibold">30-Day Returns</h4>
              <p className="text-gray-400 text-sm">No questions asked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements Section - HIGH CONVERSION */}
      <section className="py-16 bg-gradient-to-br from-purple-900/50 to-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>💪</span>
              <span>LIMITED TIME OFFER</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Fuel Your Gains with Premium Supplements
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Curated for serious lifters by Muscle & Strength. Get 10% off your first order with code <strong className="text-purple-400">LIFT10</strong>
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
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                      FREE SHIPPING
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-purple-400 text-sm font-medium uppercase tracking-wide">{supp.brand}</p>
                  <h3 className="text-white font-semibold text-lg mt-1 mb-2">{supp.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{supp.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${supp.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">${(supp.price * 1.2).toFixed(2)}</span>
                    </div>
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
              href="/supplements"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-purple-600/30"
            >
              <span>🛒</span>
              <span>Shop All Supplements</span>
              <span>→</span>
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Use code <strong className="text-purple-400">LIFT10</strong> for 10% off at checkout
            </p>
          </div>
        </div>
      </section>

      {/* SEO Cities - LOCAL SEO */}
      <section className="py-16 bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-4 text-center">
            Find Barbells Near You
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Local gym equipment stores and online options available in your area
          </p>
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
            <Link href="/barbells/near-me" className="text-gym-400 hover:text-gym-300 font-medium">
              View all 50+ cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Shop by Brand
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MOCK_BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-iron-800 hover:bg-iron-700 rounded-xl p-6 text-center border border-iron-700 hover:border-gym-500 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gym-600 to-gym-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold group-hover:scale-110 transition-transform">
                  {brand.name[0]}
                </div>
                <h3 className="text-white font-semibold">{brand.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{brand.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - HIGH CONVERSION */}
      <section className="py-20 bg-gradient-to-r from-gym-700 via-gym-600 to-gym-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Transform Your Lifting?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join 50,000+ satisfied customers who found their perfect barbell with BarbellNearMe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gym-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              🏋️ Find Your Barbell Now
            </a>
            <Link
              href="/barbells/compare"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Compare All Models →
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-4">
            🔒 Secure checkout • 🚚 Free shipping over $300 • 💯 30-day returns
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 bg-iron-800">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-white">Related Articles</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/guide/how-to-choose-barbell" className="text-gym-400 hover:underline">
              How to Choose the Right Barbell
            </Link>
            <Link href="/best/best-olympic-barbell" className="text-gym-400 hover:underline">
              Best Olympic Barbells 2026
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
