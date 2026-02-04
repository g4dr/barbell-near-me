import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbells 2026 Comparison | BarbellNearMe",
    description: "We've tested and compared the top barbells on the market. Here are our definitive rankings for 2026....",
};

export default function ComparePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbells 2026 - Complete Comparison</h1>
                        <p className="text-xl text-blue-200 mb-8">Top Picks Ranked</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">We've tested and compared the top barbells on the market. Here are our definitive rankings for 2026.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">#1 Overall: Rogue Olympic Bar 2.0</h3>
                <p className="text-gray-600">Best balance of quality, price, and availability.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">#2 Premium: Eleiko Weightlifting Bar</h3>
                <p className="text-gray-600">Best for competition and those seeking the absolute best.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">#3 Value: Rep Olympic Bar</h3>
                <p className="text-gray-600">American-made quality at unbeatable price point.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">#4 Budget: CAP Barbell 20kg</h3>
                <p className="text-gray-600">Solid entry-level option for home gyms.</p>
            </div>


                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl mt-8">
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Pick</h3>
                            <p className="text-lg text-blue-700">Rogue Olympic Bar 2.0</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
                        <p className="text-blue-200 mb-8">Browse our complete selection and find your perfect match.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
