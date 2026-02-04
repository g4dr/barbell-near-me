import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Women's Barbells Comparison 2026 | BarbellNearMe",
    description: "Women's barbells are designed with lighter weight and smaller diameter. Compare top options for the perfect fit....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-pink-900 to-pink-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Women's Barbells Comparison</h1>
                        <p className="text-xl text-pink-200 mb-8">Top 15kg Bars Reviewed</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Women's barbells are designed with lighter weight and smaller diameter. Compare top options for the perfect fit.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-pink-800 mb-4">Rogue Bella Bar 2.0</h3>
                    <p className="text-gray-600 text-lg">Best overall. Hybrid knurl, excellent spin, durable finish. Our top pick.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-pink-800 mb-4">Eleiko XF Women's Bar</h3>
                    <p className="text-gray-600 text-lg">Best premium. Swedish steel, competition quality. Worth the investment.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-pink-800 mb-4">Rep Women's Bar</h3>
                    <p className="text-gray-600 text-lg">Best value. Solid performance at affordable price. Great for home gyms.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-pink-800 mb-4">Fringe Sport Bella Bar</h3>
                    <p className="text-gray-600 text-lg">Budget-friendly option. Good quality for the price. Solid starter bar.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
