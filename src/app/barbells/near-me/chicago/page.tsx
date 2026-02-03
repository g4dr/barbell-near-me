import { Metadata } from 'next';
import { MOCK_BARBELLS } from '@/lib/data';
import { Header, Footer, BarbellGrid } from '@/components';

export const metadata: Metadata = {
  title: 'Buy Barbells in Chicago | Windy City Gym Equipment | BarbellNearMe',
  description: 'Find barbells for sale in Chicago. Browse Olympic bars, power bars, and more available in the Windy City. Free shipping in Illinois.',
  keywords: 'buy barbells Chicago, Chicago gym equipment, Windy City barbell, Illinois fitness equipment, Chicago home gym',
  openGraph: {
    title: 'Find Barbells in Chicago',
    description: 'Quality barbells available in Chicago. Fast delivery across the Midwest.',
  },
};

const CITY = {
  name: 'Chicago',
  state: 'IL',
  country: 'USA',
  slug: 'chicago',
};

export default function ChicagoPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🌬️</span>
            <span>The Windy City</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Barbells in {CITY.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From the Loop to Wrigleyville, find quality barbells available in Chicago. Build your home gym in the heart of the Midwest.
          </p>
        </div>
      </div>

      {/* City Info */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">2.7M</p>
              <p className="text-gray-400 text-sm">Population</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">77</p>
              <p className="text-gray-400 text-sm">Neighborhoods</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Strong</p>
              <p className="text-gray-400 text-sm">Lifting Culture</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">❄️</p>
              <p className="text-gray-400 text-sm">Indoor Training</p>
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
            {MOCK_BARBELLS.length} barbells ready for delivery across Chicago
          </p>
        </div>
        <BarbellGrid barbells={MOCK_BARBELLS} columns={4} />
      </div>

      {/* Local SEO */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              🏋️ Chicago's Fitness Scene
            </h2>
            <p className="text-gray-400 mb-8">
              Chicago has a thriving fitness community, from Logan Square's boutique gyms to the historic commercial facilities downtown. Whether you're training through a Chicago winter or enjoying summer at the lakefront, having quality home gym equipment is essential.
            </p>
            <a 
              href="https://trugritfitness.pxf.io/Z6PKV1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
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
