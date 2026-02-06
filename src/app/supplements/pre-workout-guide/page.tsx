import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Workout Supplements Guide | BarbellNearMe',
  description: 'Maximize your training with the best pre-workout supplements. Energy, focus, and pump.',
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
            <a href="/supplements" className="text-purple-400 hover:text-purple-300">Supplements</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pre-Workout Guide</h1>
          <p className="text-xl text-orange-100 mb-6">Unlock your full training potential</p>
          <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">⚡ Shop Pre-Workout →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Pre-Workout Ingredients</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-orange-600 mb-2">☕ Caffeine</h3>
              <p className="text-gray-600">150-300mg for energy and focus. Take 30-60 min before training.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-orange-600 mb-2">🩸 Citrulline</h3>
              <p className="text-gray-600">6-8g for incredible pumps and blood flow.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-orange-600 mb-2">🧠 Alpha GPC</h3>
              <p className="text-gray-600">300-600mg for laser focus and mind-muscle connection.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-orange-600 mb-2">🥤 Beta-Alanine</h3>
              <p className="text-gray-600">2-5g for endurance and more reps. Expect the tingles!</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pre-Workout for Barbell Training</h2>
          <p className="text-gray-600 mb-6">Heavy lifting requires mental focus and sustained energy. Your pre-workout should support:</p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>CNS activation</strong> — Lift heavier</li>
            <li><strong>Mental focus</strong> — Perfect form under load</li>
            <li><strong>Endurance</strong> — More volume = more growth</li>
            <li><strong>Pump</strong> — Nutrient delivery to muscles</li>
          </ul>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🔥 Maximum Performance Formula</h3>
            <p className="text-orange-100 mb-6">Energy • Focus • Pump • Endurance</p>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">⚡ GET YOURS →</a>
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
