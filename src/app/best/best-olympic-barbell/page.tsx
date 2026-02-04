import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Best Olympic Barbell 2024 - Top Picks for Weightlifting | BarbellNearMe",
  description: "Discover the best Olympic barbells of 2024. Our expert reviews cover Rogue, Eleiko, Rep, CAP and more. Find your perfect bar for competition or training.",
};

export default function BestOlympicPage() {
  const products = [
    { name: 'Eleiko Olympic Weightlifting Bar', brand: 'Eleiko', price: '$545', rating: 5.0, reason: 'Best Overall - Competition Grade' },
    { name: 'Rogue Olympic Bar', brand: 'Rogue', price: '$295', rating: 4.9, reason: 'Best Value - Training Excellence' },
    { name: 'Rogue Echo Bar 2.0', brand: 'Rogue', price: '$199', rating: 4.7, reason: 'Best Budget Entry Level' },
    { name: 'Rep Fitness Olympic Bar', brand: 'Rep', price: '$279', rating: 4.8, reason: 'Best Mid-Range Option' },
    { name: 'CAP Barbell Olympic Bar', brand: 'CAP', price: '$149', rating: 4.5, reason: 'Best Cheap Beginner Bar' },
    { name: 'Texas Power Bar', brand: 'Texas', price: '$325', rating: 4.9, reason: 'Best for Texas Powerlifting' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Olympic Barbell 2024</h1>
          <p className="text-xl text-green-200 mb-6">Expert reviews and comparisons of the top Olympic barbells. Find the perfect bar for your weightlifting journey.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/best" className="text-purple-600 hover:underline">Best Of</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Olympic Barbell</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🏋️</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</span>
                    <span className="text-yellow-500">★ {product.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-green-600 font-bold text-lg">{product.price}</p>
                  <p className="text-gray-600 mt-2">{product.reason}</p>
                </div>
                <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap">View Deal</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Test Olympic Barbells</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-2">Spin Quality</h3>
              <p className="text-gray-600">We test bearing quality and sleeve spin for smooth Olympic movements.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-2">Knurl Grip</h3>
              <p className="text-gray-600">We evaluate knurl aggressiveness and placement for different lifting styles.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-2">Durability</h3>
              <p className="text-gray-600">Long-term testing for rust resistance and structural integrity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Buy Your Olympic Bar</h2>
          <p className="text-green-100 mb-6">Shop our top-rated Olympic barbells with free shipping on orders over $200.</p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop Olympic Bars</a>
        </div>
      </section>
    </div>
  );
}
