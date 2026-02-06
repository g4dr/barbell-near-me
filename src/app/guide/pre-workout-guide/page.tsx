import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import FastBurnPopup from '@/components/FastBurnPopup';

export const metadata: Metadata = {
  title: 'Pre-Workout Guide 2026 | Boost Your Training | BarbellNearMe',
  description: 'The ultimate guide to pre-workout supplements and strategies. Learn how to maximize your energy, focus, and performance before hitting the weights.',
};

export default function PreWorkoutGuide() {
  return (
    <>
      <Header />
      <FastBurnPopup />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
              💪 Performance Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pre-Workout Guide
            </h1>
            <p className="text-xl text-indigo-100 mb-6">
              Maximize your energy, focus, and strength before every training session
            </p>
            <a 
              href="https://top-deal.me/a/NkRQzIjjYnHREwo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition"
            >
              ⚡ Shop Pre-Workouts →
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Makes a Great Pre-Workout?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The best pre-workouts deliver <strong>clean energy without the crash</strong>, razor-sharp focus, and the physical readiness to crush your training. Here's what to look for:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 text-center">
                <span className="text-4xl">⚡</span>
                <h3 className="font-bold text-blue-800 mt-2">Energy</h3>
                <p className="text-gray-600 text-sm">Caffeine and stimulants for power</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-center">
                <span className="text-4xl">🎯</span>
                <h3 className="font-bold text-purple-800 mt-2">Focus</h3>
                <p className="text-gray-600 text-sm">Mental clarity and motivation</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 text-center">
                <span className="text-4xl">💪</span>
                <h3 className="font-bold text-red-800 mt-2">Pump</h3>
                <p className="text-gray-600 text-sm">Blood flow and endurance</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Key Pre-Workout Ingredients
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2">☕ Caffeine Anhydrous</h3>
                <p className="text-gray-600">
                  The gold standard for energy and focus. 150-300mg 30 minutes before training for optimal effects.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🩸 Citrulline Malate</h3>
                <p className="text-gray-600">
                  Increases nitric oxide for better blood flow, pumps, and nutrient delivery. 6-8g for best results.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🧠 Alpha GPC</h3>
                <p className="text-gray-600">
                  Choline source that crosses the blood-brain barrier for intense mental focus and mind-muscle connection.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🥩 Beta-Alanine</h3>
                <p className="text-gray-600">
                 Buffers lactic acid for more reps and longer training sessions. Creates the "tingles" — a good sign!
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🌿 Theanine</h3>
                <p className="text-gray-600">
                  Smooths out caffeine's effects, preventing jitters while maintaining energy and focus.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Pre-Workout for Barbell Training
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Heavy barbell work requires mental focus and sustained energy. Your pre-workout should support:
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-4">🎯 For Heavy Lifting, Prioritize:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ <strong>Caffeine</strong> — Power output and CNS activation</li>
                <li>✅ <strong>Alpha GPC</strong> — Focus for perfect form under heavy load</li>
                <li>✅ <strong>Citrulline</strong> — Endurance for more volume</li>
                <li>⚠️ <strong>Beta-Alanine</strong> — Great but tingles can be distracting</li>
                <li>❌ <strong>Excessive pump ingredients</strong> — May interfere with heavy Squats/Deadlifts</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Timing Your Pre-Workout
            </h2>
            <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⏰ Optimal Timing</h3>
              <div className="space-y-3 font-mono text-sm">
                <p><span className="text-green-400">-60 min:</span> Full-spectrum pre-workout</p>
                <p><span className="text-green-400">-30 min:</span> Caffeine-only or light pre-workout</p>
                <p><span className="text-green-400">-15 min:</span> Fast-acting stimulants (if needed)</p>
                <p><span className="text-red-400">-10 min:</span> Too late for most ingredients to kick in</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Stack Your Pre with Fat Burner
            </h2>
            <p className="text-gray-600 mb-4">
              For maximum fat loss while training, consider stacking your pre-workout with a quality fat burner:
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-orange-800 mb-3">🔥 The Ultimate Training Stack</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fast Burn Extreme</strong> (morning + pre-workout) — Metabolism + energy</li>
                <li><strong>Quality Pre-Workout</strong> (30 min before) — Focus + pump</li>
                <li><strong>Whey Protein</strong> (post-workout) — Recovery</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Crush Your Next Workout
              </h3>
              <a 
                href="https://top-deal.me/a/NkRQzIjjYnHREwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition"
              >
                ⚡ GET PRE-WORKOUT →
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}
