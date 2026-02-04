import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Find Barbells Near You | BarbellNearMe',
  description: 'Search for barbells and gym equipment in your city. Local delivery available.',
};

const CITIES = [
  'albuquerque', 'anchorage', 'annapolis', 'atlanta', 'austin',
  'baltimore', 'baton-rouge', 'birmingham', 'boise', 'boston',
  'buffalo', 'charleston', 'charlotte', 'chicago', 'cincinnati',
  'cleveland', 'colorado-springs', 'columbus', 'dallas', 'denver',
  'des-moines', 'detroit', 'el-paso', 'fort-worth', 'fresno',
  'greenville', 'harrisburg', 'hartford', 'honolulu', 'houston',
  'indianapolis', 'jacksonville', 'kansas-city', 'knoxville',
  'las-vegas', 'lexington', 'lincoln', 'little-rock', 'los-angeles',
  'louisville', 'macon', 'madison', 'memphis', 'miami',
  'milwaukee', 'minneapolis', 'nashville', 'new-orleans', 'new-york',
  'oklahoma-city', 'omaha', 'orlando', 'philadelphia', 'phoenix',
  'pittsburgh', 'portland', 'providence', 'raleigh', 'richmond',
  'rochester', 'sacramento', 'san-antonio', 'san-diego', 'san-francisco',
  'seattle', 'st-louis', 'tampa', 'tucson', 'tulsa',
  'virginia-beach', 'washington'
];

export default function NearMePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gym-900 via-purple-900 to-gym-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              🗺️ Find Barbells Near You
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Search for barbells and gym equipment in your city. We deliver to 68+ cities across the United States.
            </p>
            
            {/* Search Form */}
            <form 
              action="/barbells/near-me" 
              method="GET"
              className="max-w-lg mx-auto mb-8"
            >
              <div className="relative">
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city (e.g., Miami, Austin, Seattle)"
                  className="w-full px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
                  autoComplete="off"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-gray-800 text-center mb-8">
              🏙️ Browse by City
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {CITIES.slice(0, 36).map((city) => (
                <Link
                  key={city}
                  href={`/barbells/near-me/${city}`}
                  className="bg-white p-4 rounded-xl text-center hover:bg-gym-50 hover:text-gym-600 transition-colors border border-gray-200 shadow-sm hover:shadow-md"
                >
                  <span className="text-2xl mb-2 block">
                    {city === 'new-york' ? '🗽' : 
                     city === 'los-angeles' ? '🌴' : 
                     city === 'miami' ? '🌴' : 
                     city === 'chicago' ? '🌬️' : 
                     city === 'houston' ? '🌵' : 
                     city === 'seattle' ? '☕' : 
                     city === 'denver' ? '🏔️' : 
                     city === 'san-francisco' ? '🌉' : 
                     city === 'las-vegas' ? '🎰' : 
                     city === 'boston' ? '🍵' : 
                     city === 'atlanta' ? '🐖' : 
                     '🏙️'}
                  </span>
                  <span className="font-medium capitalize">
                    {city.replace(/-/g, ' ')}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="#all-cities"
                className="text-gym-600 hover:text-gym-700 font-medium"
              >
                View All 68 Cities →
              </Link>
            </div>
          </div>
        </section>

        {/* All Cities */}
        <section id="all-cities" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-8">
              📋 All Available Cities
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/barbells/near-me/${city}`}
                  className="p-3 rounded-lg text-center hover:bg-gray-100 transition-colors text-gray-700 capitalize"
                >
                  {city.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              🏋️ Ready to Lift?
            </h2>
            <p className="text-white/80 mb-8">
              Shop quality barbells delivered to your door
            </p>
            <a 
              href="https://trugritfitness.pxf.io/Z6PKV1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>🛒</span>
              <span>Shop Barbells</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
