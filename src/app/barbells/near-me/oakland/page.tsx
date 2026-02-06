import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Oakland Barbells | BarbellNearMe",
    description: "Find the best barbells and gym equipment in Oakland. Local delivery available.",
};

export default function OaklandPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Oakland Barbells</h1>
                        <p className="text-xl text-purple-200 mb-6">Buy barbells in Oakland. Fast local delivery.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="mb-4">Shop the best barbells delivered to Oakland.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg">Shop Now</a>
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
          <h3 className="text-xl font-bold mb-4 text-white">Oakland Resources</h3>
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
