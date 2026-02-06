import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muscle Building Workout Plan | BarbellNearMe',
  description: '8-week muscle building workout plan using barbells. Progressive overload for maximum growth.',
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

      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">8-Week Muscle Building Plan</h1>
          <p className="text-xl text-red-100 mb-6">Barbell-based program for serious gains</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">💪 Shop Equipment →</a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Program</h2>
          <p className="text-gray-600 mb-6">4 days per week, upper/lower split. Focus on progressive overload with barbells.</p>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-yellow-400 mb-4">📅 Weekly Schedule</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📌 <strong>Monday:</strong> Upper Body A (Bench, Rows, Overhead Press)</li>
              <li>📌 <strong>Tuesday:</strong> Lower Body A (Squats, Deadlifts)</li>
              <li>📌 <strong>Thursday:</strong> Upper Body B (Incline, Pull-ups, Dips)</li>
              <li>📌 <strong>Friday:</strong> Lower Body B (Front Squats, Romanian Deadlifts)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Progressive Overload Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>✅ Add 2.5-5 lbs per week on main lifts</li>
            <li>✅ Add 1-2 reps per set each week</li>
            <li>✅ Reduce rest time by 10-15 seconds weekly</li>
            <li>✅ Perfect form before adding weight</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Exercises</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">🏋️ Squats</h3>
              <p className="text-gray-600">King of leg exercises. 3-5 sets of 5-8 reps.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">🔥 Deadlifts</h3>
              <p className="text-gray-600">Full body posterior chain. 3-5 sets of 3-6 reps.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">💪 Bench Press</h3>
              <p className="text-gray-600">Upper body power. 3-4 sets of 6-10 reps.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-red-600 mb-2">🎯 Overhead Press</h3>
              <p className="text-gray-600">Shoulders and triceps. 3-4 sets of 6-10 reps.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Muscle?</h3>
            <p className="text-red-100 mb-6">Start with quality equipment</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition">🛒 Get Started →</a>
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
