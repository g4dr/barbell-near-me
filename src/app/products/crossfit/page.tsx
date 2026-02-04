import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "CrossFit Barbells - Durable WOD Bars | BarbellNearMe",
  description: "Shop rugged CrossFit barbells from Rogue, Eleiko, and Rep. Features 28mm shaft, hybrid knurl, certified for CrossFit competitions. Built to withstand intense WODs.",
};

export default function CrossfitBarbellsPage() {
  const products = [
    {
      name: 'Rogue WOD Bar',
      brand: 'Rogue',
      price: '$275',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
      rating: 4.8,
      reviews: 892,
      features: ['28mm shaft', 'Hybrid knurl', 'Lifetime warranty', 'WOD ready'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Eleiko Sport Training Bar',
      brand: 'Eleiko',
      price: '$445',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
      rating: 4.9,
      reviews: 234,
      features: ['28mm shaft', 'Hybrid knurl', 'Bearings', 'Competition ready'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rogue Echo Bar 2.0',
      brand: 'Rogue',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80',
      rating: 4.7,
      reviews: 1234,
      features: ['28mm shaft', 'Bushing system', 'Budget friendly', 'Good spin'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rep Express Bar',
      brand: 'Rep',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80',
      rating: 4.6,
      reviews: 445,
      features: ['28mm shaft', 'Hybrid knurl', 'WOD rated', 'Great value'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rogue Bella Bar 2.0',
      brand: 'Rogue',
      price: '$275',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80',
      rating: 4.8,
      reviews: 567,
      features: ['25mm shaft', 'Womens bar', 'Hybrid knurl', 'Pink Black options'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'AB Core Fitness Bar',
      brand: 'AB Core',
      price: '$179',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80',
      rating: 4.4,
      reviews: 234,
      features: ['28mm shaft', 'Entry level', 'Basic bearings', 'Budget WOD bar'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CrossFit Barbells</h1>
          <p className="text-xl text-orange-200 mb-6">Built to survive anything. Hybrid knurl, smooth spin, and rugged durability for intense WODs. The bar of choice for CrossFit boxes worldwide.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-orange-600 px-3 py-1 rounded-full">28mm Shaft</span>
            <span className="bg-orange-600 px-3 py-1 rounded-full">Hybrid Knurl</span>
            <span className="bg-orange-600 px-3 py-1 rounded-full">WOD Rated</span>
            <span className="bg-orange-600 px-3 py-1 rounded-full">Bearings</span>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/barbells" className="text-purple-600 hover:underline">Barbells</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">CrossFit</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Best CrossFit Bars</h2>
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
                  <div className="absolute top-3 right-3 bg-orange-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</div>
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
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <a href={product.affiliate} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">View Deal</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Makes a Great CrossFit Bar</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl text-center">
              <div className="text-3xl mb-2">Smooth Spin</div>
              <p className="text-gray-600 text-sm">Quality bearings for snatches and clean and jerks</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl text-center">
              <div className="text-3xl mb-2">Hybrid Knurl</div>
              <p className="text-gray-600 text-sm">Grip without tearing up your hands</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl text-center">
              <div className="text-3xl mb-2">Durability</div>
              <p className="text-gray-600 text-sm">Built to handle dropped weights</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl text-center">
              <div className="text-3xl mb-2">28mm Shaft</div>
              <p className="text-gray-600 text-sm">Perfect balance of whip and control</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to WOD</h2>
          <p className="text-orange-100 mb-6">Get a bar that can keep up with your training. From box to competition.</p>
          <div className="flex justify-center gap-4">
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop CrossFit Bars</a>
            <Link href="/guide/crossfit-barbells" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors">Read Our Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
