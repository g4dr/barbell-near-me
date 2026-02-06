import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creatine Benefits Guide | BarbellNearMe',
  description: 'Complete guide to creatine monohydrate. Benefits, dosage, timing, and how it boosts strength.',
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

      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Creatine Benefits</h1>
          <p className="text-xl text-green-100 mb-6">The most researched and effective supplement for strength</p>
          <a href="https://www.jdoqocy.com/click-101430101-15734183" target="_blank" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">💪 Shop Creatine →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Creatine Works</h2>
          <p className="text-gray-600 mb-6">Creatine increases phosphocreatine stores in your muscles, providing rapid ATP regeneration for high-intensity efforts.</p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">🔥 Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>+10-15% strength increase</strong> — More power in every rep</li>
              <li>✅ <strong>+2-5 lbs muscle water</strong> — Fuller, denser muscles</li>
              <li>✅ <strong>Faster recovery</strong> — Train more frequently</li>
              <li>✅ <strong>Improved brain function</strong> — Bonus benefits</li>
 cognitive              <li>✅ <strong>5000+ studies</strong> — Proven safe and effective</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Dosage Protocol</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-green-600 mb-2">📋 Loading Phase (Optional)</h3>
              <p className="text-gray-600">20g/day (4g x 4 doses) for 5-7 days. Saturates muscles faster.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-green-600 mb-2">📈 Maintenance</h3>
              <p className="text-gray-600">3-5g/day. Take post-workout or with a meal for best absorption.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Creatine Sources</h2>
          <p className="text-gray-600 mb-6">Choose monohydrate — it's the most studied, cheapest, and most effective form.</p>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Pure Creatine Monohydrate</h3>
            <p className="text-green-100 mb-6">5g daily = incredible gains</p>
            <a href="https://www.jdoqocy.com/click-101430101-15734183" target="_blank" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Now →</a>
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
