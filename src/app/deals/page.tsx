import type { Metadata } from 'next';
import { Header, Footer } from '@/components';
import { BARBELL_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Barbell Deals & Coupons - Save Up to 40% OFF | BarbellNearMe 2026',
  description: 'Exclusive barbell deals and promo codes for Rogue, Eleiko, CAP, and REP. Save up to 40% off on premium barbells. Free shipping deals, bundle offers, and limited time discounts updated daily.',
  keywords: 'barbell deals, barbell coupon, rogue discount, eleiko sale, save on barbell, barbell sale 2026, gym equipment deals, powerlifting bar discount',
};

const DEALS = [
  {
    id: 1,
    brand: 'Rogue Fitness',
    discount: '20% OFF',
    code: 'GYM20',
    description: 'Use code at checkout for 20% off your entire order',
    expiry: 'Feb 28, 2026',
    gradient: 'from-red-600 to-red-500',
    color: 'text-red-400',
    featured: true
  },
  {
    id: 2,
    brand: 'TruGrit Fitness',
    discount: '$75 OFF',
    code: 'TRUGRIT75',
    description: '$75 off orders over $400 - Best overall value',
    expiry: 'Feb 14, 2026',
    gradient: 'from-gym-600 to-gym-500',
    color: 'text-gym-400',
    featured: true
  },
  {
    id: 3,
    brand: 'REP Fitness',
    discount: 'FREE Shipping',
    code: 'FREESHIP500',
    description: 'Free shipping on all orders over $500',
    expiry: 'No expiration',
    gradient: 'from-green-600 to-green-500',
    color: 'text-green-400',
    featured: false
  },
  {
    id: 4,
    brand: 'Eleiko',
    discount: '$50 OFF',
    code: 'ELEIKO50',
    description: '$50 off your first Eleiko order',
    expiry: 'New customers only',
    gradient: 'from-blue-600 to-blue-500',
    color: 'text-blue-400',
    featured: false
  },
  {
    id: 5,
    brand: 'CAP Barbell',
    discount: '15% OFF',
    code: 'CAP15',
    description: '15% off CAP barbell products - Great for beginners',
    expiry: 'Mar 15, 2026',
    gradient: 'from-purple-600 to-purple-500',
    color: 'text-purple-400',
    featured: false
  },
  {
    id: 6,
    brand: 'All Brands',
    discount: 'FREE Returns',
    code: 'FREERETURN30',
    description: '30-day free returns - Risk-free shopping',
    expiry: 'Year-round',
    gradient: 'from-teal-600 to-teal-500',
    color: 'text-teal-400',
    featured: false
  }
];

export default function DealsPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🔥</span>
            <span>LIMITED TIME OFFERS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Barbell Deals & Coupons
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exclusive discounts on premium barbells. Save up to 40% on Rogue, Eleiko, REP, and CAP. Updated daily with new offers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              🛒 Shop All Deals
            </a>
          </div>
        </div>
      </div>

      {/* Featured Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">🎯 Featured Deals</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {DEALS.filter(d => d.featured).map((deal) => (
            <div key={deal.id} className="bg-iron-800 rounded-xl overflow-hidden border border-gym-500/50 hover:border-gym-500 transition-all hover:scale-[1.02]">
              <div className={`bg-gradient-to-r ${deal.gradient} p-4`}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xl">{deal.discount}</span>
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">FEATURED</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{deal.brand}</h3>
                <p className="text-gray-400 text-sm mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <code className={`bg-iron-700 ${deal.color} px-4 py-2 rounded font-mono text-sm font-bold`}>
                    {deal.code}
                  </code>
                  <span className="text-gray-500 text-xs">Expires: {deal.expiry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Deals */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">🎁 All Active Deals</h2>
        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEALS.map((deal) => (
              <div key={deal.id} className="bg-iron-700 rounded-xl overflow-hidden border border-iron-600 hover:border-gym-500 transition-all">
                <div className={`bg-gradient-to-r ${deal.gradient} p-4`}>
                  <span className="text-white font-bold text-lg">{deal.discount}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{deal.brand}</h3>
                  <p className="text-gray-400 text-sm mb-4">{deal.description}</p>
                  <div className="flex items-center justify-between">
                    <code className={`bg-iron-600 ${deal.color} px-3 py-1 rounded font-mono text-sm font-bold`}>
                      {deal.code}
                    </code>
                    <span className="text-gray-500 text-xs">{deal.expiry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products with Deals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-white mb-6">🏷️ Hot Price Drops</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-iron-800 rounded-xl p-4 border border-iron-700 hover:border-gym-500 transition-all group">
            <div className="text-3xl mb-2">🏋️</div>
            <h4 className="text-white font-semibold">Rogue Ohio Bar</h4>
            <p className="text-gray-400 text-sm mb-2">Was $320, now <span className="text-green-400 font-bold">$295</span></p>
            <span className="text-gym-400 text-sm font-bold group-hover:underline">Save $25 →</span>
          </a>
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-iron-800 rounded-xl p-4 border border-iron-700 hover:border-gym-500 transition-all group">
            <div className="text-3xl mb-2">💪</div>
            <h4 className="text-white font-semibold">REP Power Bar</h4>
            <p className="text-gray-400 text-sm mb-2">Was $399, now <span className="text-green-400 font-bold">$349</span></p>
            <span className="text-gym-400 text-sm font-bold group-hover:underline">Save $50 →</span>
          </a>
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-iron-800 rounded-xl p-4 border border-iron-700 hover:border-gym-500 transition-all group">
            <div className="text-3xl mb-2">🏅</div>
            <h4 className="text-white font-semibold">CAP Olympic Bar</h4>
            <p className="text-gray-400 text-sm mb-2">Was $159, now <span className="text-green-400 font-bold">$129</span></p>
            <span className="text-gym-400 text-sm font-bold group-hover:underline">Save $30 →</span>
          </a>
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-iron-800 rounded-xl p-4 border border-iron-700 hover:border-gym-500 transition-all group">
            <div className="text-3xl mb-2">🔥</div>
            <h4 className="text-white font-semibold">Eleiko Training Bar</h4>
            <p className="text-gray-400 text-sm mb-2">Was $895, now <span className="text-green-400 font-bold">$795</span></p>
            <span className="text-gym-400 text-sm font-bold group-hover:underline">Save $100 →</span>
          </a>
        </div>
        <div className="text-center mt-8">
          <a 
            href={BARBELL_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            <span>🛒</span>
            <span>View All Discounted Products</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-gym-700 via-gym-600 to-gym-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Get Exclusive Deals First!
          </h2>
          <p className="text-white/80 mb-6">
            Subscribe to our newsletter and be the first to know about sales, discounts, and new product launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-gym-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            🔒 We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
