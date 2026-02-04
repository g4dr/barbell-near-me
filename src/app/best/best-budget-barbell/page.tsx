import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Budget Barbell Under 200 - Affordable Quality | BarbellNearMe",
  description: "Looking for the best budget barbell under 200 dollars? We review CAP, Sunny, Titan and more. Get quality without breaking the bank.",
};

export default function BestBudgetPage() {
  const products = [
    { name: 'CAP Barbell Olympic Bar', price: '$149', rating: 4.5, reviews: 2156, feature: 'Best Overall Budget' },
    { name: 'Titan Fitness Bar', price: '$139', rating: 4.2, reviews: 876, feature: 'Cheapest Option' },
    { name: 'Sunny Health Pro Bar', price: '$129', rating: 4.3, reviews: 987, feature: 'Best for Beginners' },
    { name: 'Yosh Pro Olympic Bar', price: '$179', rating: 4.6, reviews: 456, feature: 'Best Quality Budget' },
    { name: 'Fitness Gear Pro Bar', price: '$159', rating: 4.4, reviews: 678, feature: 'Best Value' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Barbell Under $200</h1>
          <p className="text-xl text-green-200 mb-6">Quality barbells that wont drain your wallet. Our top picks for budget-conscious lifters.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/best" className="text-purple-600 hover:underline">Best Of</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Budget Under $200</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-32 h-32 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">💰</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.feature}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{product.name}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                    <span className="text-yellow-500">★ {product.rating}</span>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                </div>
                <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap">View Deal</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect Under $200</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-3">Pros</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ 28mm standard shaft</li>
                <li>✓ Bronze or bushing systems</li>
                <li>✓ Good for learning technique</li>
                <li>✓ 500-1000 lbs capacity</li>
                <li>✓ Perfect for home gyms</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Cons</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✗ Less premium steel</li>
                <li>✗ Basic knurl pattern</li>
                <li>✗ May show wear faster</li>
                <li>✗ Not competition certified</li>
                <li>✗ Heavier feel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Best Budget Barbells</h2>
          <p className="text-green-100 mb-6">Get quality without breaking the bank. Free shipping on budget bars.</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop Budget Bars</a>
        </div>
      </section>
    </div>
  );
}
