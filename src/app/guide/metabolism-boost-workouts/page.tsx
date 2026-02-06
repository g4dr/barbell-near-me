import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metabolism Boosting Workouts | Accelerate Fat Loss | BarbellNearMe',
  description: 'Discover the best workouts to boost your metabolism and accelerate fat loss. Science-backed training methods.',
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

      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Metabolism Boosting Workouts</h1>
          <p className="text-xl text-green-100 mb-6">Train smarter. Burn more. Keep burning for hours after.</p>
          <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🔥 Support Your Metabolism →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Makes a Workout "Metabolism-Boosting"?</h2>
          <p className="text-gray-600 mb-6">The best workouts create <strong>EPOC</strong> (Excess Post-Exercise Oxygen Consumption) — keeping your body burning extra calories for up to 24-48 hours.</p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">🔥 Key Factors</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div><h4 className="font-bold text-green-700">High Intensity</h4><p className="text-gray-600 text-sm">Elevates heart rate and creates EPOC</p></div>
              <div><h4 className="font-bold text-green-700">Compound Movements</h4><p className="text-gray-600 text-sm">Multiple muscle groups = more energy</p></div>
              <div><h4 className="font-bold text-green-700">Short Rest Periods</h4><p className="text-gray-600 text-sm">Keeps heart rate elevated</p></div>
              <div><h4 className="font-bold text-green-700">Progressive Overload</h4><p className="text-gray-600 text-sm">Builds muscle, increases metabolism</p></div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Top 3 Metabolism-Boosting Workouts</h2>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 rounded-r-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🥇 Barbell Complexes</h3>
            <p className="text-gray-600 mb-3">5-6 exercises back-to-back without rest. Deadlift → Row → Clean → Squat → Press.</p>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">🔥 EPOC: 24hrs</span>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 rounded-r-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🥈 HIIT with Barbells</h3>
            <p className="text-gray-600 mb-3">30 sec max effort, 30 sec rest, 15-20 minutes total.</p>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">🔥 EPOC: 12hrs</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Supplements Matter</h2>
          <p className="text-gray-600 mb-6">Support your metabolism-boosting training with the right supplements:</p>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-orange-800 mb-3">🔥 Recommended Stack</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Fast Burn Extreme</strong> — Accelerates metabolism and fat oxidation</li>
              <li><strong>L-Carnitine</strong> — Enhances fat utilization for energy</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Maximize Your Metabolism</h3>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🔥 GET SUPPLEMENTS →</a>
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
