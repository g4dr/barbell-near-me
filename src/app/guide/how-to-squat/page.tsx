import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Squat Properly | BarbellNearMe',
  description: 'Master the barbell squat with proper form. Step-by-step guide to perfect squat technique.',
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

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Squat Properly</h1>
          <p className="text-xl text-blue-100 mb-6">Master the king of all exercises</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🏋️ Shop Squat Racks →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Setup Checklist</h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">🎯 Step-by-Step Setup</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Position bar on upper back (traps), not on neck</li>
              <li>Grip slightly wider than shoulder width</li>
              <li>Feet shoulder-width apart, toes slightly out (15-30°)</li>
              <li>Brace core, squeeze glutes</li>
              <li>Take a big breath and hold it</li>
              <li>Push knees out as you descend</li>
              <li>Keep chest up, eyes forward</li>
              <li>Descend until hips pass knees (or full depth)</li>
              <li>Drive up through mid-foot</li>
              <li>Reset breath at top</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Knees Caving In</h3>
              <p className="text-gray-600">Push knees out actively. Weak glutes? Add hip abductor exercises.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Heels Rising</h3>
              <p className="text-gray-600">Push through mid-foot. Work ankle mobility.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Rounding Lower Back</h3>
              <p className="text-gray-600">Brace harder. Chest up. Don't let ego dictate load.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Bar Forward</h3>
              <p className="text-gray-600">Center over mid-foot. Keeps balance centered.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Programming</h2>
          <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-yellow-400 mb-4">📊 Rep Ranges by Goal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Strength:</strong> 3-5 sets of 3-6 reps (85%+ 1RM)</li>
              <li>• <strong>Hypertrophy:</strong> 3-4 sets of 8-12 reps (65-80% 1RM)</li>
              <li>• <strong>Endurance:</strong> 2-3 sets of 15+ reps (&lt;65% 1RM)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Squat More, Lift More</h3>
            <p className="text-blue-100 mb-6">Quality barbell equipment makes a difference</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Now →</a>
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
