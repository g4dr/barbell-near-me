import { Metadata } from 'next';
import { MOCK_BARBELLS } from '@/lib/data';
import { Header, Footer, BarbellGrid } from '@/components';

export const metadata: Metadata = {
  title: 'Best Barbells Under $200 | Affordable Quality | BarbellNearMe',
  description: 'Find the best barbells under $200. Budget-friendly options that don\'t compromise on quality. Perfect for beginners and home gyms.',
  keywords: 'barbells under 200, budget barbell, affordable gym equipment, cheap barbell, beginner barbell',
  openGraph: {
    title: 'Best Barbells Under $200',
    description: 'Quality barbells that won\'t break the bank. Under $200.',
  },
};

export default function Under200Page() {
  const barbells = MOCK_BARBELLS.filter(b => b.price <= 200);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💰</span>
            <span>Best Value</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Best Barbells Under $200
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            You don't need to spend a fortune to get a quality barbell. These budget-friendly options deliver solid performance for home gyms.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4">
            <span className="text-gray-400 text-sm flex items-center">Price range:</span>
            <a href="/best/barbells-under-200" className="bg-gym-600 text-white px-4 py-2 rounded-lg text-sm">
              Under $200
            </a>
            <a href="/best/barbells-under-300" className="bg-iron-700 hover:bg-iron-600 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
              Under $300
            </a>
            <a href="/best/barbells-under-500" className="bg-iron-700 hover:bg-iron-600 text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
              Under $500
            </a>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-400 mb-6">
          {barbells.length} barbells under $200
        </p>
        <BarbellGrid barbells={barbells} columns={4} />
      </div>

      {/* Tips */}
      <div className="bg-iron-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            💡 Tips for Buying a Budget Barhell
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-white font-semibold mb-2">Check Tensile Strength</h3>
              <p className="text-gray-400 text-sm">Look for at least 150,000 PSI for home gyms. Lower PSI may bend over time with heavy use.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-white font-semibold mb-2">Consider Weight</h3>
              <p className="text-gray-400 text-sm">20kg (45lbs) is standard for Olympic lifting. Women's bars are 15kg (33lbs) with smaller diameter.</p>
            </div>
            <div className="bg-iron-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-white font-semibold mb-2">Sleeve Rotation</h3>
              <p className="text-gray-400 text-sm">Ensure sleeves rotate smoothly for Olympic lifts to protect your wrists and plates.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
