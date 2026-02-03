import { Metadata } from 'next';
import { MOCK_BARBELLS } from '@/lib/data';
import { Header, Footer, BarbellGrid } from '@/components';

export const metadata: Metadata = {
  title: 'Buy Barbells in Los Angeles | LA Gym Equipment | BarbellNearMe',
  description: 'Find barbells for sale in Los Angeles. Browse Olympic bars, power bars, and more available in LA. The fitness capital of the world.',
  keywords: 'buy barbells Los Angeles, LA barbell shop, Los Angeles gym equipment, Venice beach gym, Santa Monica fitness',
  openGraph: {
    title: 'Find Barbells in Los Angeles',
    description: 'Browse quality barbells available in LA. Fast delivery across Southern California.',
  },
};

const CITY = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
  slug: 'los-angeles',
};

export default function LosAngelesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gym-600/20 text-gym-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌴</span>
            <span>Fitness Capital</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Barbells in {CITY.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Venice Beach to Santa Monica, find quality barbells available in LA. Perfect for your home gym or commercial facility.
          </p>
        </div>
      </div>

      {/* City Info */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">3.9M</p>
              <p className="text-gray-400 text-sm">Population</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Year-round</p>
              <p className="text-gray-400 text-sm">Outdoor Training</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">World Class</p>
              <p className="text-gray-400 text-sm">Gym Scene</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">🏖️</p>
              <p className="text-gray-400 text-sm">Beach Workouts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barbells */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Available Barbells in {CITY.name}, {CITY.state}
          </h2>
          <p className="text-gray-400">
            {MOCK_BARBELLS.length} barbells ready for delivery across Los Angeles County
          </p>
        </div>
        <BarbellGrid barbells={MOCK_BARBELLS} columns={4} />
      </div>

      {/* Local SEO */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              🏋️ LA Fitness Culture
            </h2>
            <p className="text-gray-400 mb-8">
              Los Angeles is synonymous with fitness. From the legendary Gold's Gym in Venice Beach to celebrity-endorsed boutique studios, LA takes fitness seriously. Find the perfect barbell to fuel your training in the City of Angels.
            </p>
            <a 
              href="https://trugritfitness.pxf.io/Z6PKV1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              <span>🛒</span>
              <span>Shop Barbells at TruGrit Fitness</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `BarbellNearMe - ${CITY.name}`,
            description: `Find barbells and gym equipment in ${CITY.name}, ${CITY.state}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: CITY.name,
              addressRegion: CITY.state,
              addressCountry: CITY.country,
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
