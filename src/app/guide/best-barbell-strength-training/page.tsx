import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell for Strength Training 2026 | BarbellNearMe",
    description: "Strength training requires specific barbell characteristics. Learn which features matter most for building maximum strength....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell for Strength Training</h1>
                        <p className="text-xl text-red-200 mb-8">Maximize Your Gains</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Strength training requires specific barbell characteristics. Learn which features matter most for building maximum strength.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">What Strength Training Needs</h3>
                    <p className="text-gray-600 text-lg">Stiff shafts, aggressive knurl, and durable construction are essential for heavy strength work.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Best Bars for Strength</h3>
                    <p className="text-gray-600 text-lg">Rogue Ohio Power Bar, Eleiko Power Bar, and Rep Power Bar lead our strength training recommendations.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Shaft Considerations</h3>
                    <p className="text-gray-600 text-lg">29mm shafts provide stiffness for maximal loads. Some strength athletes prefer 28mm for comfort.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Knurl Pattern</h3>
                    <p className="text-gray-600 text-lg">Aggressive center knurl is preferred for squats and deadlifts. Look for deep, consistent pattern.</p>
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
