import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell for Basement Gym 2026 | BarbellNearMe",
    description: "Basements offer climate-controlled training but may have moisture issues. Choose bars that resist rust and corrosion....",
};

export default function SEOPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-stone-900 to-stone-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell for Basement Gym</h1>
                        <p className="text-xl text-stone-200 mb-8">Climate Control Training</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-stone-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Basement Bars</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Basements offer climate-controlled training but may have moisture issues. Choose bars that resist rust and corrosion.</p>
                        </div>

                        <div className="bg-gradient-to-r from-stone-600 to-stone-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Ready to Basement Bars?</h2>
                            <p className="mb-6">Browse our curated selection at unbeatable prices.</p>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-stone-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            
                <li>
                    <a href="/guide/best-barbell-garage-gym" className="text-stone-600 hover:text-stone-800 font-medium">Garage Gym</a>
                </li>

                <li>
                    <a href="/guide/barbell-maintenance" className="text-stone-600 hover:text-stone-800 font-medium">Maintenance</a>
                </li>

                <li>
                    <a href="/guide/chrome-vs-zinc-barbell" className="text-stone-600 hover:text-stone-800 font-medium">Finish Guide</a>
                </li>

                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-stone-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
