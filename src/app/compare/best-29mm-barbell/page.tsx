import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best 29mm Barbells 2026 | BarbellNearMe",
    description: "29mm shafts provide stiffness and stability for heavy lifting. Compare the best options in this category....",
};

export default function SEOPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best 29mm Barbells</h1>
                        <p className="text-xl text-gray-200 mb-8">Power & Stiffness</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-gray-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop 29mm Bars</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">29mm shafts provide stiffness and stability for heavy lifting. Compare the best options in this category.</p>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to 29mm Bars?</h2>
                            <p className="mb-6">Browse our curated selection at unbeatable prices.</p>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-gray-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            
                <li>
                    <a href="/barbells/powerlifting" className="text-gray-600 hover:text-gray-800 font-medium">Power Bars</a>
                </li>

                <li>
                    <a href="/best/best-power-barbell-2026" className="text-gray-600 hover:text-gray-800 font-medium">Best Power Bar</a>
                </li>

                <li>
                    <a href="/guide/steel-types-barbells" className="text-gray-600 hover:text-gray-800 font-medium">Steel Guide</a>
                </li>

                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
