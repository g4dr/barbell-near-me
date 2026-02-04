import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Powerlifting Barbells - Competition Grade Squat Deadlift Bars | BarbellNearMe",
  description: "Shop premium powerlifting barbells from Rogue, Texas Bar, Eleiko, and Rep. Features 29mm shaft, aggressive knurl, IPF specs for squat, bench, and deadlift.",
};

export default function PowerliftingBarbellsPage() {
  const products = [
    {
      name: 'Rogue Ohio Power Bar',
      brand: 'Rogue',
      price: '$345',
      image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500&q=80',
      rating: 4.9,
      reviews: 1567,
      features: ['29mm shaft', 'IPF spec', 'Dual knurl marks', 'Aggressive knurl'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Eleiko Powerlifting Bar',
      brand: 'Eleiko',
      price: '$595',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80',
      rating: 5.0,
      reviews: 423,
      features: ['29mm shaft', 'IPF approved', 'Swedish steel', 'Center knurl'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Texas Power Bar - Stainless',
      brand: 'Texas Bar',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
      rating: 4.9,
      reviews: 789,
      features: ['29mm shaft', 'IPF power', 'Stainless steel', 'No center knurl'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rep PR-4000 Bar',
      brand: 'Rep',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80',
      rating: 4.7,
      reviews: 334,
      features: ['29mm shaft', 'Cerakote options', 'Budget friendly', 'Good knurl'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rogue C-70 Bar',
      brand: 'Rogue',
      price: '$445',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80',
      rating: 4.8,
      reviews: 234,
      features: ['29mm shaft', 'Cerakote finish', 'Dual marks', 'Competition grade'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'CAP Barbell Power Bar',
      brand: 'CAP',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80',
      rating: 4.5,
      reviews: 1876,
      features: ['29mm shaft', 'Budget option', 'Black oxide', 'Basic knurl'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Powerlifting Barbells</h1>
          <p className="text-xl text-red-200 mb-6">Competition-grade bars designed for maximum performance in squat, bench, and deadlift. Aggressive knurl, 29mm shaft, IPF specs.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-red-600 px-3 py-1 rounded-full">29mm Shaft</span>
            <span className="bg-red-600 px-3 py-1 rounded-full">IPF Spec</span>
            <span className="bg-red-600 px-3 py-1 rounded-full">Aggressive Knurl</span>
            <span className="bg-red-600 px-3 py-1 rounded-full">Squat Bench DL</span>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/barbells" className="text-purple-600 hover:underline">Barbells</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Powerlifting</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Power Bars</h2>
            <select className="border rounded-lg px-4 py-2">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{feature}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <a href={product.affiliate} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">View Deal</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Power Bar vs Olympic Bar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-3">Power Bar 29mm</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Thicker 29mm shaft for stiffness</li>
                <li>More aggressive knurl for grip</li>
                <li>Usually no center knurl for squats</li>
                <li>IPF specs for competition</li>
                <li>Best for Squat, Bench, Deadlift</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Olympic Bar 28mm</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Thinner 28mm shaft for whip</li>
                <li>Lighter knurl for clean catches</li>
                <li>Dual knurl marks IPF and IWF</li>
                <li>Higher sleeve speed for snatches</li>
                <li>Best for Snatch, Clean and Jerk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to PR</h2>
          <p className="text-red-100 mb-6">Find the perfect power bar for your lifting journey. From competition grade to budget options.</p>
          <div className="flex justify-center gap-4">
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop Power Bars</a>
            <Link href="/guide/powerlifting-barbells" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">Read Our Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
