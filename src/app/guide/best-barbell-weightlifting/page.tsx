import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell for Olympic Weightlifting 2026 | BarbellNearMe",
    description: "Olympic weightlifting requires bars with excellent spin, whip, and precise specifications. Here's our complete guide....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell for Olympic Weightlifting</h1>
                        <p className="text-xl text-purple-200 mb-8">Perfect for Snatches & Clean & Jerk</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Olympic weightlifting requires bars with excellent spin, whip, and precise specifications. Here's our complete guide.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Olympic Lifting Requirements</h3>
                    <p className="text-gray-600 text-lg">28mm shaft, 20kg weight, smooth sleeve spin, moderate knurl. IWF approved bars meet these standards.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Best Olympic Bars</h3>
                    <p className="text-gray-600 text-lg">Eleiko Weightlifting Bar, Rogue Olympic Bar 2.0, and Rep Olympic Bar are top choices for Olympic lifting.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Understanding Whip</h3>
                    <p className="text-gray-600 text-lg">Mild shaft whip helps lifters during clean and jerk movements. Too much whip can be problematic.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Sleeve Quality</h3>
                    <p className="text-gray-600 text-lg">Quality bearings ensure smooth rotation. Look for sealed bearings that stay lubricated.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
