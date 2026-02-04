import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbells Under $500 2026 | BarbellNearMe",
    description: "Just under the premium tier, these bars offer competition-grade quality at accessible prices. Perfect for serious lifters....",
};

export default function BestPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbells Under $500</h1>
                        <p className="text-xl text-purple-200 mb-8">Premium Performance</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Just under the premium tier, these bars offer competition-grade quality at accessible prices. Perfect for serious lifters.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Top Picks</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rogue Olympic Bar 2.0</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$295</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Value Premium</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-purple-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rep Power Bar</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$299</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Power Bar Under $500</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-purple-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Fringe Sport Bomba Bar</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$399</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Premium Budget</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-purple-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rogue Bella Bar 2.0</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$275</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Women's Bar Premium</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-purple-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop the Best Deals</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">View All Deals</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
