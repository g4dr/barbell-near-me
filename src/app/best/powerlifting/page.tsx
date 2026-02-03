import { Header, Footer } from '@/components';

export default function BestPowerliftingPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gym-600/20 text-gym-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💪</span>
            <span>Maximum Performance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Best Powerlifting Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bars designed for heavy squats, deadlifts, and bench press. High tensile strength and durability.
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-iron-800 rounded-2xl p-12 text-center border border-iron-700">
          <div className="text-6xl mb-4">🏗️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Powerlifting Page Coming Soon!</h2>
          <p className="text-gray-400 mb-6">
            We're researching the best powerlifting barbells for serious lifters.
          </p>
          <p className="text-gray-500 text-sm">
            Subscribe to get notified when we launch.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
