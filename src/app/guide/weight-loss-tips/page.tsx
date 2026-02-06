import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weight Loss Tips for Lifters | BarbellNearMe',
  description: 'Lose fat while building muscle. Science-backed weight loss strategies for gym-goers.',
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

      <section className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Weight Loss Tips for Lifters</h1>
          <p className="text-xl text-pink-100 mb-6">Lose fat, keep muscle, stay strong</p>
          <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🔥 Shop Fat Burners →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Golden Rules</h2>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 rounded-r-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-pink-800 mb-4">🔥 Key Principles</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Protein:</strong> 2g per kg bodyweight minimum</li>
              <li><strong>Calories:</strong> 300-500 deficit, not crash dieting</li>
              <li><strong>Resistance training:</strong> Keep lifting heavy</li>
              <li><strong>Sleep:</strong> 7-9 hours for hormone optimization</li>
              <li><strong>Patience:</strong> 0.5-1 lb per week is sustainable</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nutrition Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Too Low Protein</h3>
              <p className="text-gray-600">Muscle loss accelerates. Eat 2g+ per kg.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Cardio Over Lifting</h3>
              <p className="text-gray-600">Lifting preserves muscle. Cardio complements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Cheat Meals Weekly</h3>
              <p className="text-gray-600">One bad day can undo a week of progress.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Ignoring Sleep</h3>
              <p className="text-gray-600">Cortisol rises, muscle protein synthesis drops.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Supplements That Help</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>Creatine:</strong> Preserves muscle in deficit</li>
            <li><strong>Caffeine:</strong> Boosts metabolism 3-11%</li>
            <li><strong>Fat burners:</strong> Support metabolism</li>
            <li><strong>Whey protein:</strong> Hit protein goals easily</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Torch Fat, Keep Muscle</h3>
            <p className="text-pink-100 mb-6">Science-backed supplementation</p>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" target="_blank" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🔥 Get Started →</a>
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
