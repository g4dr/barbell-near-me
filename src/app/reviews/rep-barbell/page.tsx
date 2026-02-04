import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Rep Fitness Barbell Review 2026 | BarbellNearMe",
    description: "Rep Fitness has disrupted the barbell market with quality bars at competitive prices. American-made quality without the premium price tag....",
};

export default function ReviewPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rep Fitness Barbell Review 2026</h1>
                        <p className="text-xl text-green-200 mb-8">Best Value American Brand</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Rep Fitness has disrupted the barbell market with quality bars at competitive prices. American-made quality without the premium price tag.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Ratings</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Rep Olympic Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best value Olympic bar</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">$279</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-green-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Rep Power Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best budget power bar</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">$299</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-green-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Rep Exposed Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best entry-level bar</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">$259</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-green-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Rep Women's Bar</h3>
                    <span className="text-yellow-500">★★★★</span>
                </div>
                <p className="text-gray-600 mb-4">Best value women's bar</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">$259</span>
                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-green-600 text-white px-4 py-2 rounded-lg">View Deal</a>
                </div>
            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Pros</h3>
                                <ul className="space-y-2">
                                    <li className="text-green-600">✓ Great value</li><li className="text-green-600">✓ American-made</li><li className="text-green-600">✓ Solid warranty</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Cons</h3>
                                <ul className="space-y-2">
                                    <li className="text-red-600">✗ Less refined knurl</li><li className="text-red-600">✗ Quality can vary</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Gym?</h2>
                        <p className="text-green-200 mb-8">Shop Rep bars at the best prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
