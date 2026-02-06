import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bench Press Technique | BarbellNearMe',
  description: 'Master the bench press with proper technique. Complete guide to chest, shoulders, and triceps development.',
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

      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bench Press Technique</h1>
          <p className="text-xl text-green-100 mb-6">Build a strong upper body with proper form</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🏋️ Shop Benches →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Setup Checklist</h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">🎯 Perfect Setup</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Eyes directly under bar</li>
              <li>Feet planted firmly on floor</li>
              <li>Glutes on bench, upper back squeezed into bench</li>
              <li>Shoulders retracted (squeeze oranges in armpits)</li>
              <li>Grip: slightly wider than shoulder width</li>
              <li>Wrists stacked over elbows</li>
              <li>Unrack with straight arms</li>
              <li>Lower to mid-chest</li>
              <li>Press up and slightly back toward face</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Elbows Flaring</h3>
              <p className="text-gray-600">45° angle from torso. Protects shoulders.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Wrists Bent Back</h3>
              <p className="text-gray-600">Stack wrists over elbows. Press straight up.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Lifting Hips</h3>
              <p className="text-gray-600">Glutes stay down.Arch from upper back only.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Bouncing Off Chest</h3>
              <p className="text-gray-600">Touch lightly, don't bounce. Controlled descent.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Grip Widths</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>Narrow (shoulder width):</strong> Triceps emphasis</li>
            <li><strong>Standard (2x shoulder):</strong> Balanced chest/shoulders/triceps</li>
            <li><strong>Wide (24"+):</strong> Chest emphasis (risky for shoulders)</li>
          </ul>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Press More, Press Safe</h3>
            <p className="text-green-100 mb-6">Quality bench = better training</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Now →</a>
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
