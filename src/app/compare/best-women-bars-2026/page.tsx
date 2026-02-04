import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Women's Bars Comparison 2026 | BarbellNearMe",
    description: "Women's bars are designed for female lifters with 15kg weight and 25mm shafts. Compare top options....",
};

export default function SEOPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-pink-900 to-pink-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Women's Bars Comparison 2026</h1>
                        <p className="text-xl text-pink-200 mb-8">15kg Options</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Women's Bars</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Women's bars are designed for female lifters with 15kg weight and 25mm shafts. Compare top options.</p>
                        </div>

                        <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to Women's Bars?</h2>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            
                <li>
                    <a href="/guide/womens-barbells-guide" className="text-pink-600 hover:text-pink-800 font-medium">Women's Guide</a>
                </li>

                <li>
                    <a href="/compare/best-womens-barbells" className="text-pink-600 hover:text-pink-800 font-medium">Best Women's</a>
                </li>

                <li>
                    <a href="/guide/rogue-ohio-bar-complete-guide" className="text-pink-600 hover:text-pink-800 font-medium">Bella Bar</a>
                </li>

                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
