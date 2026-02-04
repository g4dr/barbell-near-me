import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Womens Barbells - 15kg Womens Bars | BarbellNearMe",
  description: "Shop premium women barbells from Rogue, Eleiko, and Rep. Features 15kg weight, 25mm shaft, smaller diameter grips designed for female lifters.",
};

export default function WomensBarbellsPage() {
  const products = [
    {
      name: 'Rogue Bella Bar 2.0',
      brand: 'Rogue',
      price: '$275',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80',
      rating: 4.9,
      reviews: 678,
      features: ['15kg', '25mm shaft', 'Hybrid knurl', 'Pink Black options'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Eleiko XF Weightlifting Bar',
      brand: 'Eleiko',
      price: '$545',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
      rating: 5.0,
      reviews: 189,
      features: ['15kg', '25mm shaft', 'IPF approved', 'Women specific'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rep Exposed Bar',
      brand: 'Rep',
      price: '$259',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80',
      rating: 4.7,
      reviews: 234,
      features: ['15kg', '25mm shaft', 'Budget friendly', 'Good spin'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rogue Bella Bar 2.0 Cerakote',
      brand: 'Rogue',
      price: '$345',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80',
      rating: 4.9,
      reviews: 312,
      features: ['15kg', '25mm shaft', 'Cerakote finish', 'Multiple colors'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Fringe Sport Wonder Bar',
      brand: 'Fringe',
      price: '$229',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
      rating: 4.6,
      reviews: 445,
      features: ['15kg', '25mm shaft', 'Budget option', 'Beginner friendly'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'American Barbell Olympic Bar',
      brand: 'American Barbell',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80',
      rating: 4.8,
      reviews: 156,
      features: ['15kg', '25mm shaft', 'Chrome sleeves', 'Premium quality'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-pink-900 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Womens Barbells</h1>
          <p className="text-xl text-pink-200 mb-6">Designed for female lifters. 15kg weight, 25mm shaft, and smaller grip diameter for better control and comfort.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-pink-600 px-3 py-1 rounded-full">15kg Weight</span>
            <span className="bg-pink-600 px-3 py-1 rounded-full">25mm Shaft</span>
            <span className="bg-pink-600 px-3 py-1 rounded-full">Smaller Grips</span>
            <span className="bg-pink-600 px-3 py-1 rounded-full">IWF Spec</span>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/barbells" className="text-purple-600 hover:underline">Barbells</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Womens</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Top Womens Bars</h2>
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
                  <div className="absolute top-3 right-3 bg-pink-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</div>
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
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    <a href={product.affiliate} target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">View Deal</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose a Womens Barbell</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-pink-800 mb-3">Key Differences</h3>
              <ul className="text-gray-600 space-y-2">
                <li>15kg vs 20kg for men</li>
                <li>25mm shaft vs 28mm thinner grip</li>
                <li>Shorter overall length</li>
                <li>Smaller sleeve diameter</li>
                <li>Better for smaller hands</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Who Should Use It</h3>
              <ul className="text-gray-600 space-y-2">
                <li>All female lifters</li>
                <li>Beginners learning technique</li>
                <li>Anyone with smaller hands</li>
                <li>Youth athletes</li>
                <li>Rehabilitation movements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Bar</h2>
          <p className="text-pink-100 mb-6">From competition grade to budget friendly options, find the right womens bar for your training.</p>
          <div className="flex justify-center gap-4">
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop Womens Bars</a>
            <Link href="/guide/womens-barbells" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-pink-600 transition-colors">Read Our Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
