import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer, BarbellGrid } from '@/components';
import { getBarbellsByCategory, BARBELL_AFFILIATE_URL, BUYING_GUIDES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Powerlifting Barbell Guide 2026 - Best Bars for Squat, Bench & Deadlift',
  description: 'Complete guide to powerlifting barbells. Learn about tensile strength, knurl patterns, shaft diameter, and find the best power bars for maximal strength training.',
  keywords: 'powerlifting barbell guide, best power barbell, ipf approved barbell, 29mm barbell, aggressive knurl bar, squat bar, bench bar, deadlift bar',
};

const powerliftingBarbells = getBarbellsByCategory('powerlifting');

export default function PowerliftingBarbellGuidePage() {
  const guide = BUYING_GUIDES.powerlifting;

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-red-900/50 via-iron-900 to-iron-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💪</span>
            <span>For Serious Lifters</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Powerlifting Barbell
          </h1>
           Guide 2026<p className="text-gray-400 text-lg">
            Everything you need to know about choosing the perfect power bar for maximal strength
          </p>
        </div>
      </div>

      {/* Guide Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What Makes a Power Bar */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            What Makes a Barbell a "Powerlifting" Bar?
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-4">
              Powerlifting barbells are specifically engineered for the three main lifts: the squat, bench press, and deadlift. 
              Unlike Olympic bars, power bars prioritize grip security and stability over sleeve spin.
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Key Powerlifting Barbell Specifications:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
              <li><strong>Weight:</strong> 20kg (44 lbs) standard</li>
              <li><strong>Shaft Diameter:</strong> 29mm (thicker than Olympic bars)</li>
              <li><strong>Tensile Strength:</strong> 200,000+ PSI for heavy loads</li>
              <li><strong>Knurl Pattern:</strong> Aggressive, deep knurling for maximum grip</li>
              <li><strong>Center Knurl:</strong> Usually included for squat stability</li>
              <li><strong>Whip:</strong> Minimal - for precise control during maximal attempts</li>
              <li><strong>Sleeve Type:</strong> Bushings for stability (no bearings)</li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12 bg-iron-800 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            What Makes a Great Powerlifting Bar?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">1. Tensile Strength: 200,000+ PSI</h3>
              <p className="text-gray-400">
                Power bars must withstand extreme loads during maximal attempts. Look for 200,000 PSI minimum— 
                premium bars like the Eleiko Power Bar offer 220,000 PSI for ultimate durability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">2. 29mm Shaft Diameter</h3>
              <p className="text-gray-400">
                The thicker shaft (vs. 28mm for Olympic) provides more grip surface, which is crucial 
                during maximal deadlifts. Some lifters prefer 28.5mm or 30mm for even more grip.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">3. Aggressive Knurl Pattern</h3>
              <p className="text-gray-400">
                Power bars feature deep, aggressive knurling that bites into your hands for 
                maximum grip security. This is essential when pulling maximal deadlifts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">4. Center Knurl</h3>
              <p className="text-gray-400">
                Most power bars include center knurling to help stabilize the bar during squats. 
                If you don't squat, you may prefer bars without center knurl for comfort.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">5. Minimal Whip</h3>
              <p className="text-gray-400">
                Unlike Olympic bars, power bars have minimal flex (whip). This provides 
                precise control during maximal attempts where any bar movement can affect your lift.
              </p>
            </div>
          </div>
        </section>

        {/* Competition vs Training */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Competition vs. Training Bars
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-iron-800 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">Competition Bars</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Meet federation specifications (IPF, USAPL, etc.)</li>
                <li>• Specific knurl mark placement</li>
                <li>• Certified for competition use</li>
                <li>• Higher cost ($500-900+)</li>
                <li>• Premium materials and construction</li>
              </ul>
            </div>
            <div className="bg-iron-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Training Bars</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• More versatile for all training</li>
                <li>• Can still meet competition specs</li>
                <li>• Better value ($300-500)</li>
                <li>• Durable for daily use</li>
                <li>• Great for home gyms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Picks */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Best Powerlifting Barbells 2026
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-iron-800 rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">🥇 Best Overall: REP Fitness Power Bar</h3>
                  <p className="text-red-400 font-medium">$349</p>
                </div>
                <div className="text-right">
                  <span className="text-red-400">⭐ 4.7/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                205,000 PSI steel, 29mm shaft, center knurl, and black oxide coating. 
                Excellent value for a quality power bar with aggressive knurl.
              </p>
              <a 
                href={BARBELL_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Now →
              </a>
            </div>

            <div className="bg-iron-800 rounded-xl p-6 border border-gold-500/30">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">🥈 Best Premium: Eleiko Power Bar</h3>
                  <p className="text-gold-400 font-medium">$895</p>
                </div>
                <div className="text-right">
                  <span className="text-gold-400">⭐ 5.0/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                IPF approved with 220,000 PSI tensile strength—the strongest in the Eleiko lineup. 
                Chrome finish, aggressive knurl, and Swedish quality. For serious competitors.
              </p>
              <a 
                href={BARBELL_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gym-600 hover:bg-gym-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Now →
              </a>
            </div>

            <div className="bg-iron-800 rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">🥉 Best Value: REP Exceed Bar</h3>
                  <p className="text-gym-400 font-medium">$449</p>
                </div>
                <div className="text-right">
                  <span className="text-gym-400">⭐ 4.7/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                200,000 PSI steel with cerakote finish. Versatile power bar that works 
                for both training and competition. Excellent middle-ground option.
              </p>
              <a 
                href={BARBELL_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gym-600 hover:bg-gym-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Now →
              </a>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Shop Powerlifting Barbells
          </h2>
          <BarbellGrid barbells={powerliftingBarbells} columns={3} />
          
          <div className="text-center mt-8">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            >
              <span>🛒</span>
              <span>View All Power Bars</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-iron-800 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Powerlifting Bar FAQs
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Do I need an IPF-approved bar for training?</h3>
              <p className="text-gray-400 text-sm">
                No. You can train on any power bar and still compete. IPF-approved bars are required 
                only for IPF-sanctioned competitions. Many great training bars meet IPF specs anyway.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">What's the best shaft diameter for powerlifting?</h3>
              <p className="text-gray-400 text-sm">
                29mm is the standard and works for most lifters. If you have smaller hands or prefer 
                a thinner grip, 28.5mm can work. Some competitive lifters prefer 30mm for maximum grip.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Should I get a bar with center knurl?</h3>
              <p className="text-gray-400 text-sm">
                If you squat, yes—center knurl helps stabilize the bar. If you only bench and deadlift, 
                you can skip it. Some lifters find center knurl uncomfortable for high-rep squats.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Level Up Your Powerlifting?
          </h2>
          <p className="text-white/80 mb-8">
            Find the perfect power bar for your strength goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              🛒 Shop Power Bars
            </a>
            <Link
              href="/guide/crossfit-barbells"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              CrossFit Bar Guide →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
