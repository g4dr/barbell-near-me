import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Olympic Barbells - Professional Weightlifting Bars | BarbellNearMe",
  description: "Discover premium Olympic barbells from top brands. Features 20kg mens and 15kg womens bars, 28mm shaft, Olympic sleeves. Shop TruGrit Fitness for Rogue, Eleiko, Rep and CAP.",
};

export default function OlympicBarbellsPage() {
  const products = [
    {
      name: 'Rogue Olympic Bar',
      brand: 'Rogue',
      price: '$295',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
      rating: 4.9,
      reviews: 1247,
      features: ['28mm shaft', '20kg', 'Olympic sleeves', 'Dual knurl marks'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Eleiko Olympic Weightlifting Bar',
      brand: 'Eleiko',
      price: '$545',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
      rating: 5.0,
      reviews: 892,
      features: ['28mm shaft', 'IPF approved', 'Swedish steel', 'Lifetime warranty'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rogue Echo Bar 2.0',
      brand: 'Rogue',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80',
      rating: 4.7,
      reviews: 634,
      features: ['28.5mm shaft', 'Bushing system', 'Ohio steel', 'Beginner friendly'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'CAP Barbell Olympic Bar',
      brand: 'CAP',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80',
      rating: 4.5,
      reviews: 2156,
      features: ['28mm shaft', 'Bronze bushings', 'Chrome finish', 'Budget friendly'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Rep Fitness Olympic Bar',
      brand: 'Rep',
      price: '$279',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80',
      rating: 4.8,
      reviews: 445,
      features: ['28mm shaft', 'Dual knurl marks', 'Zinc finish', 'Good spin'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Texas Power Bar',
      brand: 'Texas Bar',
      price: '$325',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80',
      rating: 4.9,
      reviews: 567,
      features: ['28.5mm shaft', 'IPF power', 'Texas made', 'Hard chrome'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Olympic Barbells</h1>
          <p className="text-xl text-gray-300 mb-6">Professional Olympic bars for weightlifting, CrossFit, and serious training. Engineered for performance, built to last.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-purple-600 px-3 py-1 rounded-full">28mm Shaft</span>
            <span className="bg-purple-600 px-3 py-1 rounded-full">20kg/15kg Options</span>
            <span className="bg-purple-600 px-3 py-1 rounded-full">Olympic Sleeves</span>
            <span className="bg-purple-600 px-3 py-1 rounded-full">Dual Knurl Marks</span>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/barbells" className="text-purple-600 hover:underline">Barbells</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Olympic</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Olympic Barbells</h2>
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
                  <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</div>
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
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <a href={product.affiliate} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">View Deal</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Choosing Your Olympic Barbell</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Competition</h3>
              <p className="text-gray-600">Eleiko or Rogue Olympic bars feature IPF approval, precision bearings, and guaranteed sleeve speed. Best for serious weightlifters competing.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Training</h3>
              <p className="text-gray-600">Rogue Echo or Rep Fitness bars offer excellent value with bushing systems that provide smooth rotation without the competition price tag.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-3">Budget</h3>
              <p className="text-gray-600">CAP or similar budget bars get the job done for home gyms. Bronze bushings provide adequate spin for learning proper technique.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Training</h2>
          <p className="text-purple-100 mb-6">Browse our full collection of Olympic barbells and find the perfect bar for your goals.</p>
          <div className="flex justify-center gap-4">
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop All Olympic Bars</a>
            <Link href="/guide/olympic-barbells" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors">Read Our Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
