import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "CAP Barbell Review 2026 | BarbellNearMe",
    description: "CAP Barbell offers reliable budget options that have served countless home gyms. While not competition-grade, they deliver solid performance for the p...",
};

export default function ReviewPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">CAP Barbell Review 2026</h1>
                        <p className="text-xl text-gray-200 mb-8">Budget-Friendly Quality</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">CAP Barbell offers reliable budget options that have served countless home gyms. While not competition-grade, they deliver solid performance for the price.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Ratings</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">CAP 20kg Olympic Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best entry-level bar</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-600">$149</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-gray-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">CAP Hex Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best budget trap bar</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-600">$179</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-gray-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">CAP Solid Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best ultra-budget option</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-600">$129</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-gray-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Pros</h3>
                                <ul className="space-y-2">
                                    <li className="text-green-600">✓ Very affordable</li><li className="text-green-600">✓ Widely available</li><li className="text-green-600">✓ Decent for beginners</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Cons</h3>
                                <ul className="space-y-2">
                                    <li className="text-red-600">✗ Lower tensile strength</li><li className="text-red-600">✗ Basic finish</li><li className="text-red-600">✗ Not competition legal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Gym?</h2>
                        <p className="text-gray-200 mb-8">Shop CAP bars at the best prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-gray-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
