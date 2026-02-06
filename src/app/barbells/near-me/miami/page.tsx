import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Miami Barbells | BarbellNearMe',
  description: 'Miami fitness equipment. Beach body ready.',
};

export default function MiamiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section 
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">🌴 Miami Delivery</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Miami Barbells</h1>
            <p className="text-xl text-gray-200 mb-8">Beach Body Ready. Year-Round Summer.</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-400 transition transform hover:scale-105 shadow-lg">🏋️ Shop Now</a>
          </div>
        </section>

        <section className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="text-white">
                <p className="text-3xl font-bold text-pink-400">450K</p>
                <p className="text-sm text-gray-400">Population</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-pink-400">150+</p>
                <p className="text-sm text-gray-400">Gyms</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-pink-400">24h</p>
                <p className="text-sm text-gray-400">Delivery</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-pink-400">5★</p>
                <p className="text-sm text-gray-400">Service</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🌴 Miami Hot</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Vegan Protein', price: '$49', image: 'https://images.unsplash.com/photo-1593099826092-2157af1e36a6?w=400' },
                { name: 'Pre-Workout', price: '$39', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
                { name: 'Fat Burner', price: '$44', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400' },
              ].map((product, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 bg-gray-200" style={{backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-pink-600 mb-4">{product.price}</p>
                    <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-bold hover:bg-gray-800 transition">Buy Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Beach Body Season</h2>
            <p className="text-xl text-white/80 mb-8">Train like a Miami native</p>
            <a href="https://top-deal.me/a/NkRQzIjjYnHREwo" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">🔥 Get Lean</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
