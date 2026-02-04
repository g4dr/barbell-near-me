import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Rogue vs Eleiko Barbell Comparison 2024 | BarbellNearMe",
  description: "Compare Rogue and Eleiko barbells side by side. We analyze quality, price, knurl, spin, and which is best for your training goals.",
};

export default function RogueVsEleikoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rogue vs Eleiko Barbell</h1>
          <p className="text-xl text-gray-300 mb-6">The ultimate comparison between two industry giants. Find out which barbell wins for your training.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/compare" className="text-purple-600 hover:underline">Compare</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Rogue vs Eleiko</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Rogue Fitness</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price</span>
                  <span className="font-bold text-purple-600">$199</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Steel Quality</span>
                  <span className="font-bold">Ohio Steel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Knurl</span>
                  <span className="font-bold">Aggressive to Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bearings</span>
                  <span className="font-bold">Ceramic or Bronze</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty</span>
                  <span className="font-bold">Lifetime</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Made in</span>
                  <span className="font-bold">USA</span>
                </div>
              </div>
              <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold mt-6 transition-colors">Shop Rogue Bars</a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Eleiko</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price</span>
                  <span className="font-bold text-blue-600">$445</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Steel Quality</span>
                  <span className="font-bold">Swedish Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Knurl</span>
                  <span className="font-bold">Competition Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bearings</span>
                  <span className="font-bold">Precision Swedish</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty</span>
                  <span className="font-bold">Lifetime +</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Made in</span>
                  <span className="font-bold">Sweden</span>
                </div>
              </div>
              <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold mt-6 transition-colors">Shop Eleiko Bars</a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality and Feel</h3>
                <p className="text-gray-600">Eleiko uses Swedish steel known for its consistency and feel. Rogue uses Ohio steel which offers excellent value for the price. Both are reliable for competition and training.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Price Value</h3>
                <p className="text-gray-600">Rogue offers more affordable options starting at $199 while Eleiko begins at $445. For the budget-conscious athlete, Rogue provides exceptional value.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Best For</h3>
                <p className="text-gray-600"><strong>Rogue:</strong> Home gyms, CrossFit boxes, budget-conscious athletes. <strong>Eleiko:</strong> Competition weightlifting, elite training facilities, those seeking the absolute best.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Verdict</h2>
            <p className="text-gray-600 mb-6">Both Rogue and Eleiko produce excellent barbells. Your choice depends on budget and goals:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-purple-600 hover:bg-purple-700 text-white text-center py-4 rounded-lg font-bold transition-colors">Choose Rogue If: Under $400 Budget</a>
              <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-lg font-bold transition-colors">Choose Eleiko If: Competition Ready</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
