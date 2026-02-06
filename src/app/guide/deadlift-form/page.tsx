import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deadlift Form Guide | BarbellNearMe',
  description: 'Master the deadlift with proper form. Complete guide to conventional and sumo deadlifts.',
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

      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deadlift Form Guide</h1>
          <p className="text-xl text-amber-100 mb-6">The ultimate test of total body strength</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🏋️ Shop Barbells →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Conventional Deadlift</h2>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-800 mb-4">🎯 Step-by-Step</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Stand with mid-foot under bar</li>
              <li>Hip hinge, grip bar just outside legs</li>
              <li>Shins to bar (don't move bar)</li>
              <li>Chest up, squeeze chest (bar won't move)</li>
              <li>Take slack out of bar (you'll hear/feel it)</li>
              <li>Drive floor away with legs</li>
              <li>Lock hips and knees simultaneously</li>
              <li>Control the descent</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sumo Deadlift</h2>
          <p className="text-gray-600 mb-6">Wider stance, inside grip. Easier on lower back, harder on hips.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Hips Rising First</h3>
              <p className="text-gray-600">Push floor, don't pull. Legs initiate.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Bar Away from Body</h3>
              <p className="text-gray-600">Bar stays in contact with legs throughout.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Rounding Back</h3>
              <p className="text-gray-600">Chest up BEFORE pulling. Maintain neutral spine.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">❌ Hyperextending Lockout</h3>
              <p className="text-gray-600">Stand tall, squeeze glutes. Don't lean back.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Pull Heavy, Stay Safe</h3>
            <p className="text-amber-100 mb-6">Form beats ego every time</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Shop Now →</a>
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
