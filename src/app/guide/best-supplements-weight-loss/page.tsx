import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Supplements for Weight Loss 2026 | BarbellNearMe',
  description: 'The complete guide to weight loss supplements that actually work. From fat burners to appetite suppressants.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-iron-900 border-b border-iron-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🏋️</span>
            <span className="font-display text-2xl font-bold text-white">Barbell<span className="text-gym-500">NearMe</span></span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/barbells" className="text-gray-300 hover:text-white">Barbells</a>
            <a href="/products/olympic" className="text-gray-300 hover:text-white">Olympic</a>
            <a href="/supplements" className="text-purple-400 hover:text-purple-300">Supplements</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold mb-4">📊 Expert Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Supplements for Weight Loss</h1>
          <p className="text-xl text-purple-100 mb-6">Science-backed supplements that support sustainable fat loss</p>
          <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🔥 Top Rated Option →</a>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Weight Loss Supplements</h2>
          <p className="text-gray-600 mb-6">Not all weight loss supplements are created equal. This guide covers only <strong>science-backed options</strong> that can genuinely accelerate your results.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Must-Have Supplements</h2>
          
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">🥇 Fast Burn Extreme</h3>
            <p className="text-gray-600 mb-4">Premium thermogenic specifically designed for athletes. Combines fat-burning power with muscle preservation.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">✅ Research Backed</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">💪 Muscle Safe</span>
            </div>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition">Check Price →</a>
          </div>

          <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🥈 Whey Protein</h3>
            <p className="text-gray-600">Essential for maintaining muscle mass during caloric deficit.</p>
          </div>

          <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🥉 Omega-3 Fish Oil</h3>
            <p className="text-gray-600">Supports hormone production, reduces inflammation, and aids fat metabolism.</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Transformation Today</h3>
            <p className="text-purple-100 mb-6">Get premium supplements at the best prices</p>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🔥 SHOP SUPPLEMENTS →</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 BarbellNearMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
