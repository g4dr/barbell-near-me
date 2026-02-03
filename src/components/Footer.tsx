import Link from 'next/link';
import { SUPPLEMENT_AFFILIATE_URL } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-iron-900 border-t border-iron-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏋️</span>
              <span className="font-display text-xl font-bold text-white">
                Barbell<span className="text-gym-500">NearMe</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Find. Compare. Lift. Your ultimate guide to finding the perfect barbell.
            </p>
            <p className="text-gray-500 text-xs">
              Powered by <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="text-gym-400 hover:text-gym-300">TruGrit Fitness</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Barbells</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/barbells/compare" className="hover:text-white">Compare All</Link></li>
              <li><Link href="/brands" className="hover:text-white">Top Brands</Link></li>
              <li><Link href="/best/barbells-under-300" className="hover:text-white">Under $300</Link></li>
              <li><Link href="/best/powerlifting" className="hover:text-white">Powerlifting</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/barbells?category=olympic" className="hover:text-white">Olympic Bars</Link></li>
              <li><Link href="/barbells?category=powerlifting" className="hover:text-white">Powerlifting</Link></li>
              <li><Link href="/barbells?category=crossfit" className="hover:text-white">CrossFit</Link></li>
              <li><Link href="/barbells?category=women" className="hover:text-white">Women's Bars</Link></li>
            </ul>
          </div>

          {/* Supplements */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">💪 Supplements</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={SUPPLEMENT_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
                  Protein
                </a>
              </li>
              <li>
                <a href={SUPPLEMENT_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
                  Creatine
                </a>
              </li>
              <li>
                <a href={SUPPLEMENT_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
                  Pre-Workout
                </a>
              </li>
              <li>
                <a href={SUPPLEMENT_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium">
                  Shop All →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 py-6 border-t border-iron-700">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-xl">🔒</span>
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-xl">🚚</span>
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-xl">⭐</span>
            <span>Top Rated Products</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-xl">💯</span>
            <span>30-Day Returns</span>
          </div>
        </div>

        <div className="border-t border-iron-700 mt-4 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} BarbellNearMe. All rights reserved.</p>
          <p className="mt-2 text-xs">
            BarbellNearMe is a participant in affiliate programs. We earn commissions on qualifying purchases through our links.
          </p>
          <p className="mt-2">
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="text-gym-400 hover:text-gym-300">
              TruGrit Fitness
            </a>
            {' · '}
            <a href={SUPPLEMENT_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
              Muscle & Strength
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
