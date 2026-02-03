import { Metadata } from 'next';
import { MOCK_BARBELLS, MOCK_CITIES } from '@/lib/data';
import { Header, Footer, BarbellGrid } from '@/components';

export const metadata: Metadata = {
  title: 'Buy Barbells in New York | Barbell Shops NYC | BarbellNearMe',
  description: 'Find barbells for sale in New York City. Browse our selection of Olympic bars, power bars, and more available in NYC. Free shipping on qualified orders.',
  keywords: 'buy barbells New York, NYC barbell shop, New York gym equipment, barbells NYC, fitness equipment Manhattan',
  openGraph: {
    title: 'Find Barbells in New York City',
    description: 'Browse quality barbells available in NYC. Fast delivery and great prices.',
  },
};

const CITY = {
  name: 'New York',
  state: 'NY',
  country: 'USA',
  slug: 'new-york',
};

export default function NewYorkPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gym-600/20 text-gym-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🗽</span>
            <span>The Big Apple</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Barbells in {CITY.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find premium barbells available in {CITY.name}, {CITY.state}. From Manhattan to Brooklyn, get your perfect barbell delivered or pick up locally.
          </p>
        </div>
      </div>

      {/* City Info */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">8.4M</p>
              <p className="text-gray-400 text-sm">Population</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">5</p>
              <p className="text-gray-400 text-sm">Boroughs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-400 text-sm">Fitness Culture</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">⭐ Top</p>
              <p className="text-gray-400 text-sm">Gym Scene</p>
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
            {MOCK_BARBELLS.length} barbells ready for delivery or pickup in New York
          </p>
        </div>
        <BarbellGrid barbells={MOCK_BARBELLS} columns={4} />
      </div>

      {/* Local SEO */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              🏋️ {CITY.name}'s Fitness Community
            </h2>
            <p className="text-gray-400 mb-8">
              From the iconic Gold's Gym in Venice Beach to boutique studios downtown, {CITY.name} has an incredible fitness scene. Whether you're training for competition or building your dream home gym, we have the barbells you need.
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

      {/* Structured Data */}
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
