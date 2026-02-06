import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chicago Barbells | BarbellNearMe',
  description: 'Chicago barbells and gym equipment. Windy City strong.',
};

export default function ChicagoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section 
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=1920)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">🌬️ Chicago Delivery</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Chicago Barbells</h1>
            <p className="text-xl text-gray-200 mb-8">Windy City Strong. Cold Weather Training.</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 transition transform hover:scale-105 shadow-lg">🏋️ Shop Now</a>
          </div>
        </section>

        <section className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="text-white">
                <p className="text-3xl font-bold text-blue-400">2.7M</p>
                <p className="text-sm text-gray-400">Population</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-blue-400">200+</p>
                <p className="text-sm text-gray-400">Gyms</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-blue-400">24h</p>
                <p className="text-sm text-gray-400">Delivery</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-blue-400">$0</p>
                <p className="text-sm text-gray-400">Shipping</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">❄️ Chicago Favorites</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Power Bar 20kg', price: '$275', image: 'https://images.unsplash.com/photo-1517963879466-e1b54d2b6385?w=400' },
                { name: 'Deadlift Bar', price: '$349', image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400' },
                { name: 'Barbell Set', price: '$699', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400' },
              ].map((product, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 bg-gray-200" style={{backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-bold hover:bg-gray-800 transition">Buy Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">No Excuses. Train.</h2>
            <p className="text-xl text-white/80 mb-8">Chicago doesn't stop for winter</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">🏋️ Get Gear</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
