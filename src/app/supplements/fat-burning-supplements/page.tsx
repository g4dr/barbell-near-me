import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import FastBurnPopup from '@/components/FastBurnPopup';

export const metadata: Metadata = {
  title: 'Best Fat Burning Supplements for Athletes 2026 | BarbellNearMe',
  description: 'Discover the most effective fat burning supplements for barbell athletes. Expert guide to thermogenics, metabolism boosters, and cutting supplements that actually work.',
};

export default function FatBurningSupplements() {
  return (
    <>
      <Header />
      <FastBurnPopup />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Fat Burning Supplements for Athletes
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Science-backed supplements to加速 your fat loss while maintaining muscle
            </p>
            <a 
              href="https://top-deal.me/a/NkRQzIjjYnHREwo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition"
            >
              🔥 Top Rated Fat Burner →
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Athletes Need Specialized Fat Burners
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Regular weight loss supplements don't cut it for serious lifters. When you're pushing heavy barbells, you need products that <strong>preserve muscle mass</strong> while torching body fat.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🔥 Thermogenics</h3>
                <p className="text-gray-600 mb-4">Increase your body's heat production to burn more calories throughout the day.</p>
                <p className="text-sm text-gray-500">Best for: 24/7 fat oxidation</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">⚡ Metabolism Boosters</h3>
                <p className="text-gray-600 mb-4">Natural compounds that rev up your metabolic engine for faster results.</p>
                <p className="text-sm text-gray-500">Best for: Sustained energy expenditure</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Top 5 Fat Burning Supplements for 2026
            </h2>

            {/* #1 */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🥇</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Burn Extreme</h3>
                  <p className="text-orange-600 font-bold mb-2">Editor's Choice for Athletes</p>
                  <p className="text-gray-600 mb-4">
                    The gold standard for serious lifters. This premium thermogenic combines powerful fat-burning ingredients with muscle-preserving properties. Perfect for anyone doing barbell training while cutting.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">🔥 Thermogenic</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">💪 Muscle Sparing</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">⚡ Energy</span>
                  </div>
                  <a 
                    href="https://top-deal.me/a/NkRQzIjjYnHREwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition"
                  >
                    Check Price →
                  </a>
                </div>
              </div>
            </div>

            {/* #2 */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🥈</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Transparent Labs Fat Burner</h3>
                  <p className="text-gray-600 mb-4">
                    Clean formula with no proprietary blends. Contains evidence-based dosages of green tea, caffeine, and acetyl-L-carnitine.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">📋 Transparent</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">🌿 Natural</span>
                  </div>
                </div>
              </div>
            </div>

            {/* #3 */}
            <div className="bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🥉</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">JYM Shred</h3>
                  <p className="text-gray-600 mb-4">
                    Formulated by Dr. Jim Stoppani. Features 12 science-backed ingredients at effective dosages.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">🔬 Research</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">💊 Dosage</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Natural Fat Burning Stack
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-4">💊 Budget-Friendly Combination</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Green Tea Extract (500mg)</strong> — Metabolism support</li>
                <li><strong>Caffeine (200mg)</strong> — Energy and thermogenesis</li>
                <li><strong>L-Carnitine (2g)</strong> — Fat oxidation</li>
                <li><strong>Fish Oil (2g)</strong> — Hormonal support</li>
              </ul>
              <p className="text-gray-500 text-sm mt-4">
                Note: Stack costs ~$30-40/month vs $50-80 for premium fat burners
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How to Maximize Fat Burner Effectiveness
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-orange-600 mb-2">🏋️ Training</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Take 30 min before workout</li>
                  <li>• Use for HIIT and heavy lifting</li>
                  <li>• Stay hydrated</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-orange-600 mb-2">🥗 Nutrition</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• High protein intake</li>
                  <li>• Moderate calorie deficit</li>
                  <li>• Complex carbs only</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Torch Some Fat?
              </h3>
              <a 
                href="https://top-deal.me/a/NkRQzIjjYnHREwo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition"
              >
                🔥 Get Your Fat Burner →
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}
