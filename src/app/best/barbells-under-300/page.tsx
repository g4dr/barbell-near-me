import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbells Under $300 2026 | BarbellNearMe",
    description: "The $200-$300 range offers the best balance of quality and value. These bars compete with premium options at lower prices....",
};

export default function BestPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbells Under $300</h1>
                        <p className="text-xl text-blue-200 mb-8">Sweet Spot Value</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">The $200-$300 range offers the best balance of quality and value. These bars compete with premium options at lower prices.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Top Picks</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rep Olympic Bar</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">$279</p>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Best Value Mid-Range</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-blue-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rogue Echo Bar</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">$195</p>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Best CrossFit Budget</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-blue-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rep Exposed Bar</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">$259</p>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Best All-Arounder</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-blue-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Fringe Sport Wonder Bar</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">$229</p>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Best Durable Budget</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-blue-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop the Best Deals</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">View All Deals</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
