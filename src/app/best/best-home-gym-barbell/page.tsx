import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "TITLEKEYWORD | BarbellNearMe",
  description: "DESCMETA",
};

export default function HomeGymBarbellPage() {
  const products = [
    { name: 'Rogue Home Gym Bar', brand: 'Rogue', price: '$XXX', rating: 4.9, reviews: 1000, features: ['Feature1', 'Feature2'] },
    { name: 'Eleiko Home Gym Bar', brand: 'Eleiko', price: '$XXX', rating: 5.0, reviews: 500, features: ['Premium', 'Competition'] },
    { name: 'Rep Home Gym Bar', brand: 'Rep', price: '$XXX', rating: 4.7, reviews: 300, features: ['Value', 'Quality'] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Home Gym Barbell - Complete Guide</h1>
          <p className="text-xl text-purple-200 mb-6">Top barbells for home gym owners. Multi-purpose bars for all lifting. Rogue Eleiko Rep options.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Best Home Gym Barbell - Complete Guide</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3">{product.name}</h3>
                <div className="text-yellow-500 mt-1">★ {product.rating} ({product.reviews})</div>
                <p className="text-gray-600 mt-2">{product.features.join(' • ')}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">View Deal</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Best Home Gym Barbell - Complete Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-2">BENEFIT1</h3>
              <p className="text-gray-600">Description about benefit 1 for this type of barbell.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-2">BENEFIT2</h3>
              <p className="text-gray-600">Description about benefit 2 for this type of barbell.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-2">BENEFIT3</h3>
              <p className="text-gray-600">Description about benefit 3 for this type of barbell.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Shop Best Home Gym Barbell - Complete Guide</h2>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">View All Options</a>
        </div>
      </section>
    </div>
  );
}
