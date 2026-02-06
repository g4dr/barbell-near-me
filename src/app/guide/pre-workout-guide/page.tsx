import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Workout Guide 2026 | Boost Your Training | BarbellNearMe',
  description: 'The ultimate guide to pre-workout supplements and strategies. Maximize your energy, focus, and performance.',
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

      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4">💪 Performance Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pre-Workout Guide</h1>
          <p className="text-xl text-indigo-100 mb-6">Maximize your energy, focus, and strength before training</p>
          <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">⚡ Shop Pre-Workouts →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Makes a Great Pre-Workout?</h2>
          <p className="text-gray-600 mb-6">The best pre-workouts deliver <strong>clean energy without the crash</strong>, razor-sharp focus, and physical readiness.</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 text-center">
              <span className="text-4xl">⚡</span>
              <h3 className="font-bold text-blue-800 mt-2">Energy</h3>
              <p className="text-gray-600 text-sm">Caffeine and stimulants</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-center">
              <span className="text-4xl">🎯</span>
              <h3 className="font-bold text-purple-800 mt-2">Focus</h3>
              <p className="text-gray-600 text-sm">Mental clarity</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 text-center">
              <span className="text-4xl">💪</span>
              <h3 className="font-bold text-red-800 mt-2">Pump</h3>
              <p className="text-gray-600 text-sm">Blood flow and endurance</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Ingredients</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">☕ Caffeine Anhydrous</h3>
              <p className="text-gray-600">150-300mg 30 minutes before training.</p>
            </div>
            <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🩸 Citrulline Malate</h3>
              <p className="text-gray-600">6-8g for better blood flow and pumps.</p>
            </div>
            <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🧠 Alpha GPC</h3>
              <p className="text-gray-600">Intense mental focus and mind-muscle connection.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Stack with Fat Burner</h2>
          <p className="text-gray-600 mb-4">For maximum results, stack with a quality fat burner:</p>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-orange-800 mb-3">🔥 The Ultimate Training Stack</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Fast Burn Extreme</strong> (morning + pre-workout) — Metabolism + energy</li>
              <li><strong>Quality Pre-Workout</strong> (30 min before) — Focus + pump</li>
              <li><strong>Whey Protein</strong> (post-workout) — Recovery</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Crush Your Next Workout</h3>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">⚡ GET PRE-WORKOUT →</a>
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
