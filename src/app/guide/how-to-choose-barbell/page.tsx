import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Choose a Barbell - Complete Buying Guide | BarbellNearMe",
  description: "Learn how to choose the right barbell for your training. We cover shaft diameter knurl type bearings and more. Expert advice inside.",
};

export default function HowToChoosePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Choose a Barbell</h1>
          <p className="text-xl text-blue-200 mb-6">Complete buying guide covering shaft diameter knurl bearings and more. Find your perfect barbell.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/guide" className="text-purple-600 hover:underline">Guides</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">How to Choose</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Shaft Diameter</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-bold text-purple-800">28mm - Olympic</h3>
                  <p className="text-gray-600">Best for dynamic lifts snatches and clean and jerk. Provides whip for explosive movements.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-red-800">29mm - Powerlifting</h3>
                  <p className="text-gray-600">Stiffer shaft ideal for squat bench and deadlift. More control for maximal loads.</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <h3 className="font-bold text-pink-800">25mm - Womens</h3>
                  <p className="text-gray-600">Thinner grip for smaller hands. 15kg weight makes it easier to handle.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Knurl Type</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-bold text-purple-800">Dual Marks</h3>
                  <p className="text-gray-600">IPF and IWF marks for competition flexibility. Works for powerlifting and Olympic lifting.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-red-800">Aggressive Knurl</h3>
                  <p className="text-gray-600">Deep pattern for maximal grip. Ideal for heavy lifting without straps.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-bold text-orange-800">Hybrid Knurl</h3>
                  <p className="text-gray-600">Balanced grip for CrossFit and general training. Gentle on hands.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-3">3. Bearing Type</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong> bearings:</strong> Smoothest spin</li>
                <li><strong>Bronze Bushings:</strong> Durable affordable</li>
                <li><strong>Hybrid:</strong> Best of both worlds</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">4. Steel Quality</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Swedish:</strong> Premium Eleiko</li>
                <li><strong>Ohio Steel:</strong> Rogue quality</li>
                <li><strong>Chrome:</strong> Rust resistant</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-3">5. Budget</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Under $200:</strong> Entry level</li>
                <li><strong>$200-400:</strong> Training grade</li>
                <li><strong>$400+:</strong> Competition</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Recommendation Guide</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="/best/best-olympic-barbell" className="bg-purple-100 hover:bg-purple-200 p-4 rounded-lg text-center transition-colors">
                <div className="font-bold text-purple-800">Olympic Lifting</div>
                <div className="text-sm text-gray-600">28mm dual marks</div>
              </a>
              <a href="/best/best-power-bar" className="bg-red-100 hover:bg-red-200 p-4 rounded-lg text-center transition-colors">
                <div className="font-bold text-red-800">Powerlifting</div>
                <div className="text-sm text-gray-600">29mm aggressive</div>
              </a>
              <a href="/best/best-crossfit-bar" className="bg-orange-100 hover:bg-orange-200 p-4 rounded-lg text-center transition-colors">
                <div className="font-bold text-orange-800">CrossFit</div>
                <div className="text-sm text-gray-600">28mm hybrid</div>
              </a>
              <a href="/best/best-womens-barbell" className="bg-pink-100 hover:bg-pink-200 p-4 rounded-lg text-center transition-colors">
                <div className="font-bold text-pink-800">Women</div>
                <div className="text-sm text-gray-600">15kg 25mm</div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Choose</h2>
            <p className="text-gray-600 mb-6">Browse our complete collection of barbells and find your perfect match.</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">Shop All Barbells</a>
          </div>
        </div>
      </section>
    </div>
  );
}
