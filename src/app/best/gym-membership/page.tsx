import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Gym Membership 2026 | BarbellNearMe',
  description: 'Compare gym memberships and find the best value for your fitness goals. Full guide to gym options.',
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
            <a href="/guide" className="text-gray-300 hover:text-white">Guides</a>
            <a href="/supplements" className="text-purple-400 hover:text-purple-300">Supplements</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Gym Membership 2026</h1>
          <p className="text-xl text-blue-100 mb-6">Find the perfect gym for your goals and budget</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🏋️ Shop Equipment →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Types of Gym Memberships</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-blue-600 mb-3">💪 Commercial Gyms</h3>
              <p className="text-gray-600">Planet Fitness, LA Fitness, Gold's Gym. Good for beginners with budget options.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-blue-600 mb-3">🏋️ Boutique Studios</h3>
              <p className="text-gray-600">Specialized training with personal attention. Higher cost, better results.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-blue-600 mb-3">🏠 Home Gym</h3>
              <p className="text-gray-600">Most cost-effective long-term. Buy quality equipment once.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-blue-600 mb-3">🤝 CrossFit Boxes</h3>
              <p className="text-gray-600">Community-focused with guided workouts. Great for motivation.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Build Your Home Gym</h2>
          <p className="text-gray-600 mb-6">Save money long-term with a quality home gym setup. Start with the essentials:</p>
          
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✅ <strong>Olympic Barbell</strong> — The foundation of any serious gym</li>
            <li>✅ <strong>Weight Plates</strong> — Start with 300-400 lbs total</li>
            <li>✅ <strong>Squat Rack</strong> — Safety and convenience</li>
            <li>✅ <strong>Adjustable Bench</strong> — Versatility for all exercises</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Build Your Dream Home Gym</h3>
            <p className="text-blue-100 mb-6">Quality equipment that lasts a lifetime</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🏋️ Shop Now →</a>
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
