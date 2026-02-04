import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, getBarbellsByCategory, BARBELL_AFFILIATE_URL, BUYING_GUIDES } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Olympic Barbell Guide 2026 - How to Choose the Best Olympic Bar',
  description: 'Complete guide to choosing an Olympic barbell. We cover tensile strength, knurl patterns, shaft diameter, coatings, and recommend the best Olympic bars for every budget.',
  keywords: 'olympic barbell guide, how to choose olympic barbell, olympic bar review, best olympic barbell 2026, tensile strength barbell, barbell coating guide',
};

const olympicBarbells = getBarbellsByCategory('olympic');

export default function OlympicBarbellGuidePage() {
  const guide = BUYING_GUIDES.olympic;

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gym-600/20 text-gym-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>📚</span>
            <span>Expert Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Olympic Barbell Guide 2026
          </h1>
          <p className="text-gray-400 text-lg">
            Everything you need to know to choose the perfect Olympic barbell for your training
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-iron-800 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-white font-semibold mb-4 text-center">Table of Contents</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <a href="#what-is" className="text-gym-400 hover:text-gym-300 text-sm">What is an Olympic Barbell?</a>
            <a href="#key-factors" className="text-gym-400 hover:text-gym-300 text-sm">Key Factors to Consider</a>
            <a href="#coatings" className="text-gym-400 hover:text-gym-300 text-sm">Coating Options</a>
            <a href="#recommendations" className="text-gym-400 hover:text-gym-300 text-sm">Our Top Picks</a>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What is an Olympic Barbell */}
        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            What Makes a Barbell an "Olympic" Bar?
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-4">
              An Olympic barbell is specifically designed for Olympic weightlifting movements—the snatch and the clean & jerk. 
              These bars have standardized specifications that make them distinct from general purpose or powerlifting bars.
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Key Olympic Barbell Standards:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
              <li><strong>Weight:</strong> 20kg (44 lbs) for men, 15kg (33 lbs) for women</li>
              <li><strong>Shaft Diameter:</strong> 28mm (men's), 25mm (women's)</li>
              <li><strong>Sleeve Diameter:</strong> 50mm (2 inches)</li>
              <li><strong>Sleeve Length:</strong> 415mm (16.4 inches) of loadable sleeve space</li>
              <li><strong>Tensile Strength:</strong> Typically 190,000+ PSI for quality bars</li>
              <li><strong>Knurl Marks:</strong> Dual marks (Olympic and Powerlifting positions)</li>
            </ul>
            <p className="text-gray-400">
              These specifications ensure consistency across competitions and allow lifters to train on any Olympic bar 
              and feel comfortable competing on any approved bar worldwide.
            </p>
          </div>
        </section>

        {/* Key Factors */}
        <section id="key-factors" className="mb-12 bg-iron-800 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Key Factors to Consider When Choosing an Olympic Barbell
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gym-400 mb-3">1. Tensile Strength (PSI)</h3>
              <p className="text-gray-400 mb-3">
                Tensile strength measures how much stress a bar can handle before bending. 
                Higher PSI = more durable bar that won't bend under heavy loads.
              </p>
              <div className="bg-iron-700 rounded-lg p-4">
                <p className="text-white font-medium mb-2">What to look for:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• <strong>Entry level:</strong> 140,000-160,000 PSI</li>
                  <li>• <strong>Mid-range:</strong> 180,000-195,000 PSI</li>
                  <li>• <strong>Premium:</strong> 200,000+ PSI</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gym-400 mb-3">2. Knurl Pattern</h3>
              <p className="text-gray-400 mb-3">
                The knurling (textured grip pattern) affects how well you can hold the bar. 
                Olympic bars typically have moderate knurling—aggressive enough for heavy lifts, 
                but not so sharp that it tears your hands during high-rep work.
              </p>
              <p className="text-gray-400">
                Look for consistent, even knurling across the entire shaft. Some bars have 
                center knurling (for squats), but many Olympic bars omit this feature.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gym-400 mb-3">3. Shaft Diameter</h3>
              <p className="text-gray-400 mb-3">
                Standard Olympic bars have a 28mm shaft diameter for men's bars. 
                Some manufacturers offer 28.5mm or 29mm options for lifters who prefer a thicker grip.
              </p>
              <p className="text-gray-400">
                Thicker shafts (29mm) provide more grip surface but can fatigue your hands faster 
                during high-rep work. Thinner shafts (28mm) are more common and work well for most lifters.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gym-400 mb-3">4. Sleeve Rotation System</h3>
              <p className="text-gray-400 mb-3">
                Olympic bars need smooth sleeve rotation for clean & jerk and snatch movements. 
                Two main options:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-iron-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">Bushings</p>
                  <p className="text-gray-400 text-sm">
                    More stable, less spin. Good for powerlifting. 
                    Used on most Olympic bars. Cost-effective option.
                  </p>
                </div>
                <div className="bg-iron-700 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">Bearings</p>
                  <p className="text-gray-400 text-sm">
                    Smoother, faster rotation. Preferred by competitive 
                    Olympic lifters. Higher cost but superior spin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coatings */}
        <section id="coatings" className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Olympic Barbell Coating Options
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-iron-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Black Zinc</h3>
              <p className="text-gray-400 text-sm">
                Popular choice offering excellent corrosion resistance and a sleek look. 
                Provides good grip when chalked. Used on the Rogue Ohio Bar.
              </p>
            </div>
            <div className="bg-iron-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Chrome</h3>
              <p className="text-gray-400 text-sm">
                Classic finish with good durability. Can be slippery when wet 
                but excellent when chalked. More affordable option.
              </p>
            </div>
            <div className="bg-iron-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Stainless Steel</h3>
              <p className="text-gray-400 text-sm">
                Premium option with the best grip characteristics. Naturally 
                corrosion resistant. Higher price point but superior feel.
              </p>
            </div>
            <div className="bg-iron-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Cerakote</h3>
              <p className="text-gray-400 text-sm">
                Polymer ceramic coating available in various colors. Excellent 
                corrosion resistance and durability. Unique aesthetic appeal.
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section id="recommendations" className="mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Our Top Olympic Barbell Recommendations
          </h2>
          <p className="text-gray-400 mb-8">
            Based on our extensive research and testing, here are our top picks for Olympic barbells in 2026:
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-iron-800 rounded-xl p-6 border border-gym-500/30">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">🥇 Best Overall: Rogue Ohio Bar</h3>
                  <p className="text-gym-400 font-medium">$295</p>
                </div>
                <div className="text-right">
                  <span className="text-gym-400">⭐ 4.8/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                The gold standard for a reason. Made in USA with 190,000 PSI steel, 
                dual knurl marks, and smooth bushings. Perfect balance of quality and value.
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
                  <h3 className="text-xl font-semibold text-white">🥈 Best Premium: Eleiko Olympic Bar</h3>
                  <p className="text-gym-400 font-medium">$795</p>
                </div>
                <div className="text-right">
                  <span className="text-gym-400">⭐ 4.9/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Swedish engineering at its finest. 215,000 PSI tensile strength, 
                premium bearings, and exceptional quality. Used by competitive weightlifters worldwide.
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
                  <h3 className="text-xl font-semibold text-white">🥉 Best Budget: CAP Olympic Bar</h3>
                  <p className="text-gym-400 font-medium">$129</p>
                </div>
                <div className="text-right">
                  <span className="text-gym-400">⭐ 4.2/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Solid entry-level option at an affordable price. 150,000 PSI steel, 
                chrome finish, and reliable bushings. Perfect for beginners or garage gyms.
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
            Shop All Olympic Barbells
          </h2>
          <BarbellGrid barbells={olympicBarbells} columns={3} />
          
          <div className="text-center mt-8">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            >
              <span>🛒</span>
              <span>View All Olympic Barbells</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-iron-800 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-2">What's the difference between Olympic and powerlifting bars?</h3>
              <p className="text-gray-400 text-sm">
                Olympic bars have a 28mm shaft diameter, moderate knurling, and smooth rotation. 
                Powerlifting bars typically have a 29mm shaft, aggressive knurl, and less whip. 
                Olympic bars are designed for dynamic lifts while power bars maximize grip for maximal loads.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">How often should I maintain my Olympic bar?</h3>
              <p className="text-gray-400 text-sm">
                Wipe down your bar after each use to remove chalk and sweat. 
                Deep clean monthly, checking for any rust or damage. 
                Store in a dry location away from moisture.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">What tensile strength do I need?</h3>
              <p className="text-gray-400 text-sm">
                For most recreational and competitive lifters, 190,000 PSI is sufficient. 
                Elite lifters or those training with very heavy loads may prefer 200,000+ PSI bars.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gym-700 via-gym-600 to-gym-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Find Your Perfect Olympic Bar?
          </h2>
          <p className="text-white/80 mb-8">
            Browse our complete selection of Olympic barbells from top brands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={BARBELL_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gym-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              🛒 Shop Olympic Barbells
            </a>
            <Link
              href="/guide/powerlifting-barbells"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Powerlifting Bar Guide →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
