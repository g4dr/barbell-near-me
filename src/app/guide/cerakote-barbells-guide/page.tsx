import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Cerakote Barbell Guide 2026 | BarbellNearMe",
    description: "Cerakote finishes offer lightweight protection and vibrant colors. Learn why some lifters prefer this coating....",
};

export default function SEOPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Cerakote Barbell Guide</h1>
                        <p className="text-xl text-cyan-200 mb-8">Lightweight Protection</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Cerakote Bars</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Cerakote finishes offer lightweight protection and vibrant colors. Learn why some lifters prefer this coating.</p>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to Cerakote Bars?</h2>
                            <p className="mb-6">Browse our curated selection at unbeatable prices.</p>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            
                <li>
                    <a href="/guide/chrome-vs-zinc-barbell" className="text-cyan-600 hover:text-cyan-800 font-medium">Finish Comparison</a>
                </li>

                <li>
                    <a href="#" className="text-cyan-600 hover:text-cyan-800 font-medium">Color Options</a>
                </li>

                <li>
                    <a href="/best/barbells-under-500" className="text-cyan-600 hover:text-cyan-800 font-medium">Best Coatings</a>
                </li>

                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
