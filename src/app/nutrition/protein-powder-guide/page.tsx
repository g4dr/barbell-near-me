import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protein Powder Guide 2026 | BarbellNearMe',
  description: 'Complete guide to protein powders for muscle building. Whey, isolate, mass gainer, and more.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-iron-900 border-b border-iron-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🏋️</span>
            <span className="font-display text-2xl font-bold text-white">Barbell<span className="text-gym-500">NearMe</span></span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/barbells" className="text-gray-300 hover:text-white">Barbells</a>
            <a href="/supplements" className="text-purple-400 hover:text-purple-300">Supplements</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Protein Powder Guide</h1>
          <p className="text-xl text-purple-100 mb-6">Find the perfect protein for your goals</p>
          <a href="https://www.jdoqocy.com/click-101430101-15734183" target="_blank" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">💪 Shop Protein →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Protein Powder</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🥇 Whey Protein Concentrate</h3>
              <p className="text-gray-600">70-80% protein. Best value, great taste, fast absorption. Perfect for most people.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🥈 Whey Isolate</h3>
              <p className="text-gray-600">90%+ protein, lactose-free. Best for those with dairy sensitivities or cutting phases.</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🥉 Casein Protein</h3>
              <p className="text-gray-600">Slow-digesting protein. Best before bed to support overnight muscle recovery.</p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">💪 Mass Gainer</h3>
              <p className="text-gray-600">High calories + protein + carbs. For hardgainers struggling to eat enough.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">How Much Protein Do You Need?</h2>
          <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-yellow-400 mb-4">📊 Daily Protein Recommendations</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Sedentary:</strong> 0.8g per kg bodyweight</li>
              <li>• <strong> strength training:</strong> 1.6-2.2g per kg bodyweight</li>
              <li>• <strong>Cutting:</strong> 2.0-2.5g per kg bodyweight to preserve muscle</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Times to Take Protein</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>Post-workout (within 30-60 min)</strong> — Recovery window</li>
            <li><strong>Morning</strong> — Break overnight fast</li>
            <li><strong>Before bed</strong> — Casein for overnight recovery</li>
            <li><strong>Between meals</strong> — Maintain protein intake</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Premium Protein Selection</h3>
            <p className="text-purple-100 mb-6">Whey, isolate, casein — all in one place</p>
            <a href="https://www.jdoqocy.com/click-101430101-15734183" target="_blank" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Protein →</a>
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
