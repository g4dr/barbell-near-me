import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { cityContent } from '@/lib/city-content';

export const metadata: Metadata = {
  title: 'New York Barbells | BarbellNearMe',
  description: 'Buy premium barbells in New York. Fast local delivery across NYC. Quality barbells for Manhattan, Brooklyn, Queens and all boroughs.',
};

export default function NewYorkPage() {
  const city = cityContent['new-york'];
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero with Image */}
        <section 
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">NYC Delivery Available</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">New York Barbells</h1>
            <p className="text-xl text-gray-200 mb-8">Empire State Strong. Delivery across all 5 boroughs.</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg">Shop Now</a>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">8.4M</p>
                <p className="text-sm text-gray-400">Population</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">350+</p>
                <p className="text-sm text-gray-400">Gyms</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">24h</p>
                <p className="text-sm text-gray-400">Delivery</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold text-yellow-400">100%</p>
                <p className="text-sm text-gray-400">Secure</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Barbell Training in {city.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{city.description}</p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Popular Neighborhoods for Gyms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {city.neighborhoods.map((hood) => (
                <span key={hood} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 text-center">{hood}</span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notable Gyms & CrossFit Boxes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {city.gyms.map((gym) => (
                <div key={gym} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                  <span className="font-semibold text-gray-800">{gym}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Trending in New York</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Rogue Ohio Bar', price: '$295', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400' },
                { name: 'Eleiko Bar', price: '$545', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400' },
                { name: 'REP PR-4000', price: '$399', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400' },
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">New York Needs Strong</h2>
            <p className="text-xl text-black/80 mb-8">Premium equipment delivered to your door</p>
            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition">Browse All Barbells</a>
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
          <h3 className="text-xl font-bold mb-4 text-white">New York Resources</h3>
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
