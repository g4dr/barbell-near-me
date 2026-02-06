import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import FastBurnPopup from '@/components/FastBurnPopup';

export const metadata: Metadata = {
  title: 'Fast Burn Extreme Review 2026 | Ultimate Fat Burner for Athletes | BarbellNearMe',
  description: 'In-depth review of Fast Burn Extreme fat burner supplement. Learn how this premium thermogenic can加速 your fat loss while preserving muscle mass during barbell training.',
};

export default function FastBurnExtremeReview() {
  return (
    <>
      <Header />
      <FastBurnPopup />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block bg-yellow-400 text-orange-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  ⭐ Premium Fat Burner Review
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Fast Burn Extreme Review
                </h1>
                <p className="text-xl text-orange-100 mb-6">
                  The Complete Guide to This Powerful Thermogenic Supplement for Serious Athletes
                </p>
                <a 
                  href="https://top-deal.me/a/NkRQzIjjYnHREwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition transform hover:scale-105 shadow-lg"
                >
                  🔥 Get Fast Burn Extreme →
                </a>
              </div>
              <div className="w-48 h-48 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-7xl">💪</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Rating Box */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Verdict</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-orange-600">4.5</span>
                    <span className="text-xl text-gray-500">/5</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-2xl">⭐</span>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-gray-600 font-medium">Best For</p>
                  <p className="text-orange-600 font-bold">Barbell Athletes</p>
                </div>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">✓ Pros</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Powerful thermogenic effect</li>
                  <li>• Preserves muscle mass</li>
                  <li>• Clean energy without crash</li>
                  <li>• Science-backed ingredients</li>
                  <li>• Great for cutting phases</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">✗ Cons</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• May cause jitters for beginners</li>
                  <li>• Not recommended for evening use</li>
                  <li>• Requires cycle breaks</li>
                </ul>
              </div>
            </div>

            {/* Main Review */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Fast Burn Extreme?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fast Burn Extreme is a premium thermogenic fat burner designed specifically for athletes and serious fitness enthusiasts. Unlike generic weight loss supplements, this formulation focuses on <strong>preserving lean muscle mass</strong> while accelerating fat oxidation — crucial for anyone following a barbell training program.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Ingredients Breakdown</h2>
              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🔥 Premium Thermogenic Blend</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Caffeine Anhydrous</strong> — Boosts metabolism and mental focus for intense workouts</li>
                  <li><strong>Green Tea Extract (EGCG)</strong> — Natural fat oxidation and antioxidant support</li>
                  <li><strong>L-Carnitine</strong> — Enhances fat transport to mitochondria for energy</li>
                  <li><strong>Green Coffee Bean</strong> — Metabolism support and blood sugar regulation</li>
                  <li><strong>Synephrine (Bitter Orange)</strong> — Targeted fat mobilization</li>
                  <li><strong>Acetyl-L-Carnitine</strong> — Cognitive support during calorie deficit</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works for Barbell Athletes</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you're training with barbells and lifting heavy, your body needs fuel. Fast Burn Extreme works by:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6">
                <li><strong>Increasing metabolic rate</strong> — Burn more calories at rest</li>
                <li><strong>Enhancing lipolysis</strong> — Release stored body fat for energy</li>
                <li><strong>Suppressing appetite</strong> — Stay on track with your nutrition</li>
                <li><strong>Providing clean energy</strong> — Power through intense training sessions</li>
                <li><strong>Preserving muscle tissue</strong> — The #1 concern for strength athletes</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Dosage & Timing</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">📋 Recommended Usage</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Dosage:</strong> 2 capsules per day (morning and pre-workout)</li>
                  <li>• <strong>Timing:</strong> Take 30 minutes before meals or workouts</li>
                  <li>• <strong>Cycle:</strong> 8 weeks on, 4 weeks off</li>
                  <li>• <strong>Warning:</strong> Don't take within 6 hours of bedtime</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Results You Can Expect</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Based on user reports and clinical studies on the ingredients, here's what you can realistically expect:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-600">2-4 lbs</p>
                  <p className="text-gray-500 text-sm">Fat loss per week</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-600">↑ 15-20%</p>
                  <p className="text-gray-500 text-sm">Metabolic rate increase</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-600">↑ Focus</p>
                  <p className="text-gray-500 text-sm">Workout intensity</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Should Use Fast Burn Extreme?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This supplement is ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Bodybuilders preparing for competition</li>
                <li>Powerlifters in a cutting phase</li>
                <li>CrossFit athletes seeking leanness</li>
                <li>Anyone doing barbell training while dieting</li>
                <li>Fitness enthusiasts who need appetite control</li>
              </ul>

              {/* CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-8 text-center my-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Accelerate Your Results?
                </h3>
                <p className="text-orange-100 mb-6">
                  Get Fast Burn Extreme at the best price with our exclusive link
                </p>
                <a 
                  href="https://top-deal.me/a/NkRQzIjjYnHREwo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-100 transition transform hover:scale-105 shadow-lg"
                >
                  🔥 SHOP NOW →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/supplements/fat-burning-supplements" className="bg-orange-50 p-4 rounded-xl hover:bg-orange-100 transition">
                <span className="text-orange-600 font-bold">🔥</span>
                <p className="text-gray-800 font-medium">Best Fat Burning Supplements for Athletes</p>
              </Link>
              <Link href="/guide/pre-workout-guide" className="bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition">
                <span className="text-blue-600 font-bold">⚡</span>
                <p className="text-gray-800 font-medium">Pre-Workout Guide for Maximum Gains</p>
              </Link>
              <Link href="/guide/metabolism-boost-workouts" className="bg-green-50 p-4 rounded-xl hover:bg-green-100 transition">
                <span className="text-green-600 font-bold">💪</span>
                <p className="text-gray-800 font-medium">Workouts That Boost Your Metabolism</p>
              </Link>
              <Link href="/guide/best-supplements-weight-loss" className="bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition">
                <span className="text-purple-600 font-bold">🏆</span>
                <p className="text-gray-800 font-medium">Top Supplements for Weight Loss</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
