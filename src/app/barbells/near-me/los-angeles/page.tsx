import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Los Angeles Barbells | BarbellNearMe',
  description: 'Premium barbells delivered in LA. Hollywood fitness equipment.',
};

export default function LosAngelesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section 
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1552674605-5d226f5bf74c?w=1920)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">🌴 LA Delivery Available</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Los Angeles Barbells</h1>
            <p className="text-xl text-gray-200 mb-8">Hollywood Fit. Beach Body Ready.</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg">🏋️ Shop Now</a>
          </div>
        </section>

        <section className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">4M</p>
                <p className="text-sm text-gray-400">Population</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">500+</p>
                <p className="text-sm text-gray-400">Gyms</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">24h</p>
                <p className="text-sm text-gray-400">Delivery</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">5★</p>
                <p className="text-sm text-gray-400">Reviews</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🔥 Trending in LA</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Rogue Bella Bar', price: '$349', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
                { name: 'Olympic Barbell Set', price: '$599', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400' },
                { name: 'Weight Plate Set', price: '$299', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400' },
              ].map((product, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 bg-gray-200" style={{backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-yellow-600 mb-4">{product.price}</p>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block w-full bg-gray-900 text-white text-center py-3 rounded-xl font-bold hover:bg-gray-800 transition">Buy Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">LA's Best Kept Secret</h2>
            <p className="text-xl text-white/80 mb-8">Gym-quality equipment for home</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">🏋️ Browse All</a>
          </div>
        </section>
      
      {/* Related Articles */}
      <section className="py-8 bg-iron-800">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-white">Related Articles</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/guide/how-to-choose-barbell" className="text-gym-400 hover:underline">
              How to Choose the Right Barbell
            </Link>
            <Link href="/best/best-olympic-barbell" className="text-gym-400 hover:underline">
              Best Olympic Barbells 2026
            </Link>
          </div>
        </div>
      </section>


      <section className="py-8 bg-iron-900">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-white">Los Angeles Resources</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/guide/barbell-buying-guide" className="text-gym-400 hover:underline">
              Complete Barbell Buying Guide
            </Link>
            <Link href="/barbells/best" className="text-gym-400 hover:underline">
              Best Barbells 2026
            </Link>
          </div>
        </div>
      </section>
</main>
      <Footer />
    </>
  );
}
