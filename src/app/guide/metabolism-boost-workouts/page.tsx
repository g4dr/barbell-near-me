import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import FastBurnPopup from '@/components/FastBurnPopup';

export const metadata: Metadata = {
  title: 'Metabolism Boosting Workouts | Accelerate Fat Loss | BarbellNearMe',
  description: 'Discover the best workouts to boost your metabolism and accelerate fat loss. Science-backed training methods that keep burning calories hours after your session.',
};

export default function MetabolismBoostWorkouts() {
  return (
    <>
      <Header />
      <FastBurnPopup />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Metabolism Boosting Workouts
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Train smarter, not just harder. These workouts maximize calorie burn and keep your metabolism elevated for hours
            </p>
            <a 
              href="https://top-deal.me/a/NkRQzIjjYnHREwo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition"
            >
              🔥 Support Your Metabolism →
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What Makes a Workout "Metabolism-Boosting"?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Not all workouts are created equal when it comes to fat loss. The best metabolism-boosting workouts create something called <strong>EPOC (Excess Post-Exercise Oxygen Consumption)</strong> — keeping your body burning extra calories for up to 24-48 hours after training.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">🔥 Key Factors</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-700">High Intensity</h4>
                  <p className="text-gray-600 text-sm">Elevates heart rate and creates EPOC</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700">Compound Movements</h4>
                  <p className="text-gray-600 text-sm">Multiple muscle groups = more energy burn</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700">Short Rest Periods</h4>
                  <p className="text-gray-600 text-sm">Keeps heart rate elevated</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700">Progressive Overload</h4>
                  <p className="text-gray-600 text-sm">Builds muscle, increases resting metabolism</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Top 5 Metabolism-Boosting Workouts
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🥇 Barbell Complexes</h3>
                <p className="text-gray-600 mb-3">
                  Perform 5-6 barbell exercises back-to-back without putting the bar down. Example: Deadlift → Bent Over Row → Power Clean → Front Squat → Overhead Press.
                </p>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">🔥 EPOC: 24hrs</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">💪 Full Body</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🥈 HIIT with Barbells</h3>
                <p className="text-gray-600 mb-3">
                  30 seconds max effort barbell exercise, 30 seconds rest, repeat for 15-20 minutes. Mix Squats, Presses, and Rows.
                </p>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">🔥 EPOC: 12hrs</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">⏱️ 20 min</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-pink-100 border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🥉 Density Training</h3>
                <p className="text-gray-600 mb-3">
                  Same exercises, same rest, but MORE volume in the same time. Decrease rest by 10-15 seconds each workout.
                </p>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">📈 Progressive</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">⏱️ 30 min</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Sample Barbell Complex Routine
            </h2>
            <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">💪 The Fat-Melting Bar Complex</h3>
              <div className="space-y-2 font-mono text-sm">
                <p>Use light weight (40-60% 1RM) — you're going for reps, not strength</p>
                <p>Perform each move for 8 reps, no rest between moves:</p>
                <p>1. <span className="text-green-400">Deadlift x8</span></p>
                <p>2. <span className="text-green-400">Bent Over Row x8</span></p>
                <p>3. <span className="text-green-400">Hang Clean x8</span></p>
                <p>4. <span className="text-green-400">Front Squat x8</span></p>
                <p>5. <span className="text-green-400">Push Press x8</span></p>
                <p className="mt-4 text-yellow-400">Rest 2-3 minutes, repeat 4-5 rounds</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Supplements Matter
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Metabolism-boosting workouts are demanding. Supporting your body with the right supplements can maximize results and recovery:
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-orange-800 mb-3">🔥 Recommended Stack</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fast Burn Extreme</strong> — Accelerates metabolism and fat oxidation</li>
                <li><strong>L-Carnitine</strong> — Enhances fat utilization for energy</li>
                <li><strong>Caffeine</strong> — Pre-workout energy and thermogenesis</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Maximize Your Metabolism
              </h3>
              <a 
                href="https://top-deal.me/a/NkRQzIjjYnHREwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition"
              >
                🔥 GET SUPPLEMENTS →
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}
