import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Gym Setup Guide 2026 | BarbellNearMe',
  description: 'Complete guide to building the perfect home gym. Equipment, budget, and layout.',
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
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Gym Setup Guide</h1>
          <p className="text-xl text-indigo-100 mb-6">Build your dream gym at home</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🏋️ Shop Equipment →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Equipment List</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🥇 Must-Haves (Budget: $500-1000)</h3>
              <ul className="text-gray-600 space-y-1">
                <li>✅ Olympic barbell (7ft, 20kg)</li>
                <li>✅ Weight plates (200-300 lbs)</li>
                <li>✅ Squat rack or stands</li>
                <li>✅ Adjustable bench</li>
                <li>✅ Floor protection mats</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🥈 Intermediate (Budget: $1500-2500)</h3>
              <ul className="text-gray-600 space-y-1">
                <li>✅ All essentials PLUS:</li>
                <li>✅ Cable machine or functional trainer</li>
                <li>✅ Dumbbells (adjustable or full set)</li>
                <li>✅ Pull-up bar</li>
                <li>✅ Cardio equipment (rower, bike)</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">🥉 Pro Setup (Budget: $3000+)</h3>
              <ul className="text-gray-600 space-y-1">
                <li>✅ Full commercial gear</li>
                <li>✅ Specialty bars (deadlift, squat)</li>
                <li>✅ Plates (calibrated or bumper)</li>
                <li>✅ Leg press, hack squat</li>
                <li>✅ Dedicated cardio zone</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Space Planning</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>Minimum:</strong> 8x8 feet (64 sq ft) — barbell + rack</li>
            <li><strong>Ideal:</strong> 10x10 to 12x12 feet for full functionality</li>
            <li><strong>Ceiling height:</strong> At least 8 feet, 9+ preferred for overhead</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Your Home Gym Today</h3>
            <p className="text-indigo-100 mb-6">Quality equipment that lasts</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Now →</a>
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
