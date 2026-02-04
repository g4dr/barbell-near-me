import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Eleiko Barbells - Complete Collection | BarbellNearMe",
  description: "Shop the complete line of Eleiko barbells. Ohio Power Bar Olympic Bar Echo and more. American made quality at competitive prices.",
};

export default function EleikoBarsPage() {
  const products = [
    { name: 'Eleiko Olympic Bar', price: '$295', type: 'Olympic', rating: 4.9 },
    { name: 'Eleiko Ohio Power Bar', price: '$345', type: 'Power', rating: 4.9 },
    { name: 'Eleiko Echo Bar 2.0', price: '$199', type: 'Training', rating: 4.7 },
    { name: 'Eleiko WOD Bar', price: '$275', type: 'CrossFit', rating: 4.8 },
    { name: 'Eleiko Bella Bar 2.0', price: '$275', type: 'Womens', rating: 4.9 },
    { name: 'Eleiko C-70 Bar', price: '$445', type: 'Competition', rating: 4.8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eleiko Barbells</h1>
          <p className="text-xl text-blue-200 mb-6">American made quality. The choice of champions and CrossFit boxes worldwide.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/brands" className="text-purple-600 hover:underline">Brands</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Eleiko</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-5xl">🏋️</span>
                </div>
                <div className="p-6">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{product.type}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{product.name}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★ {product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">View Deal</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Eleiko</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">🇺🇸</div>
              <h3 className="font-bold text-blue-800">Made in USA</h3>
              <p className="text-gray-600 text-sm"> Sweden</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-bold text-blue-800">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">All bars coveblue</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div class className="text-3xl mb-2">🏆</div>
              <h3 className="font-bold text-blue-800">Competition Ready</h3>
              <p className="text-gray-600 text-sm">IPF IWF approved</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold text-blue-800">Best Value</h3>
              <p className="text-gray-600 text-sm">Quality meets price</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Shop Eleiko Barbells</h2>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">View All Eleiko Bars</a>
        </div>
      </section>
    </div>
  );
}
