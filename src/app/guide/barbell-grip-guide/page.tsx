import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell Grip Guide 2026 | BarbellNearMe",
    description: "Grip is the foundation of every lift. Learn techniques and bar features that maximize your grip strength and control....",
};

export default function SEOPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell Grip Guide</h1>
                        <p className="text-xl text-amber-200 mb-8">Master Your Grip</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Improve Your Grip</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Grip is the foundation of every lift. Learn techniques and bar features that maximize your grip strength and control.</p>
                        </div>

                        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to Your Grip?</h2>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            
                <li>
                    <a href="/guide/knurling-guide" className="text-amber-600 hover:text-amber-800 font-medium">Knurling Guide</a>
                </li>

                <li>
                    <a href="/guide/barbell-whip-guide" className="text-amber-600 hover:text-amber-800 font-medium">Technique</a>
                </li>

                <li>
                    <a href="/guide/best-barbell-strength-training" className="text-amber-600 hover:text-amber-800 font-medium">Strength</a>
                </li>

                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
