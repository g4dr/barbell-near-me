import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-iron-900 border-b border-iron-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🏋️</span>
            <span className="font-display text-2xl font-bold text-white">
              Barbell<span className="text-gym-500">NearMe</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/barbells/compare" className="text-gray-300 hover:text-white transition">
              Compare
            </Link>
            <Link href="/brands" className="text-gray-300 hover:text-white transition">
              Brands
            </Link>
            <Link href="/best/barbells-under-300" className="text-gray-300 hover:text-white transition">
              Under $300
            </Link>
            <Link href="/best/powerlifting" className="text-gray-300 hover:text-white transition">
              Powerlifting
            </Link>
            <Link href="/deals" className="text-gray-300 hover:text-white transition">
              Deals
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <button className="bg-gym-600 hover:bg-gym-700 text-white px-4 py-2 rounded-lg font-medium transition">
              Find Near Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-iron-700">
        <div className="flex overflow-x-auto space-x-4 px-4 py-2">
          <Link href="/barbells/compare" className="text-gray-300 whitespace-nowrap">Compare</Link>
          <Link href="/brands" className="text-gray-300 whitespace-nowrap">Brands</Link>
          <Link href="/best/barbells-under-300" className="text-gray-300 whitespace-nowrap">Under $300</Link>
          <Link href="/best/powerlifting" className="text-gray-300 whitespace-nowrap">Powerlifting</Link>
        </div>
      </div>
    </header>
  );
}
