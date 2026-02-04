import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Rogue Bars Comparison 2026 | BarbellNearMe",
    description: "Rogue offers barbells for every lifting style. Compare their top models to find your perfect match....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Rogue Bars Comparison</h1>
                        <p className="text-xl text-red-200 mb-8">Which Rogue Bar is Right for You?</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Rogue offers barbells for every lifting style. Compare their top models to find your perfect match.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Rogue Olympic Bar 2.0</h3>
                    <p className="text-gray-600 text-lg">Best for Olympic lifting and general training. 28mm shaft, hybrid knurl, excellent value.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Rogue Ohio Power Bar</h3>
                    <p className="text-gray-600 text-lg">Best for powerlifting. 29mm shaft, aggressive knurl, IPF approved. The gold standard.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Rogue Echo Bar</h3>
                    <p className="text-gray-600 text-lg">Best budget CrossFit option. Durable, affordable, WOD-ready. Great for garage gyms.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Rogue Bella Bar 2.0</h3>
                    <p className="text-gray-600 text-lg">Best women's bar. 15kg, 25mm shaft, hybrid knurl. Perfect for female lifters.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
