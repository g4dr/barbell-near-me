import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post-Workout Nutrition | BarbellNearMe',
  description: 'Optimize recovery with proper post-workout nutrition. Protein, carbs, and timing explained.',
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
        </div>
      </header>

      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Post-Workout Nutrition</h1>
          <p className="text-xl text-teal-100 mb-6">Fuel recovery and maximize gains</p>
          <a href="https://www.jdoqocy.com/click-101430101-15734183" target="_blank" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">💪 Shop Protein →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Anabolic Window</h2>
          <p className="text-gray-600 mb-6">Within 30-60 minutes post-training is optimal for nutrient delivery to muscles.</p>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 rounded-r-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-teal-800 mb-4">🎯 What to Eat</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Protein:</strong> 20-40g (whey ideal post-workout)</li>
              <li><strong>Carbs:</strong> 0.5-1g per kg bodyweight</li>
              <li><strong>Fluids:</strong> Replace sweat losses (500ml+)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Post-Workout Foods</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-teal-600 mb-2">💪 Whey Protein Shake</h3>
              <p className="text-gray-600">Fastest absorption. 20-30g protein instantly available.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-teal-600 mb-2">🍳 Eggs + Toast</h3>
              <p className="text-gray-600">Complete protein + fast carbs. Simple and effective.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-teal-600 mb-2">🍚 Chicken + Rice</h3>
              <p className="text-gray-600">Classic bodybuilding meal. Complete amino profile.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-teal-600 mb-2">🥛 Greek Yogurt + Fruit</h3>
              <p className="text-gray-600">Protein + carbs + antioxidants. Quick and easy.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Timing Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>Immediately after:</strong> Whey protein shake</li>
            <li><strong>Within 2 hours:</strong> Complete meal with protein + carbs</li>
            <li><strong>Pre-bed:</strong> Casein or slow-digesting protein</li>
          </ul>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Recovery Starts Here</h3>
            <p className="text-teal-100 mb-6">Premium supplements for optimal recovery</p>
            <a href="https://www.jdoqocy.com/click-101430101-15734183" target="_blank" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Now →</a>
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
