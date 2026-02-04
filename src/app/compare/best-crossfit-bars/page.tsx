import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best CrossFit Barbells Comparison 2026 | BarbellNearMe",
    description: "CrossFit bars need to handle high-rep WODs, varied movements, and constant abuse. Compare the best options....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best CrossFit Barbells Comparison</h1>
                        <p className="text-xl text-orange-200 mb-8">WOD-Ready Durability</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">CrossFit bars need to handle high-rep WODs, varied movements, and constant abuse. Compare the best options.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">Rogue Echo Bar</h3>
                    <p className="text-gray-600 text-lg">Best overall CrossFit bar. Durable, affordable, excellent knurl. The gold standard.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">Eleiko XF Bar</h3>
                    <p className="text-gray-600 text-lg">Best premium option. Ceramic coating, hybrid knurl. Built for serious CrossFit affiliates.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">Rep Fracture Bar</h3>
                    <p className="text-gray-600 text-lg">Best value. Durable bushing system, affordable price. Great for garage CrossFit.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">WOD Bar Comparison</h3>
                    <p className="text-gray-600 text-lg">All three offer different price points and features. Choose based on budget and needs.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
