import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Complete Guide to Barbell Steel Types | BarbellNearMe",
    description: "Not all steel is created equal. Understanding steel types helps you choose a barbell that matches your training intensity and budget....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell Steel Types & Tensile Strength Guide</h1>
                        <p className="text-xl text-slate-200 mb-8">Understanding Tensile Strength</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Not all steel is created equal. Understanding steel types helps you choose a barbell that matches your training intensity and budget.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">What is Tensile Strength</h3>
                    <p className="text-gray-600 text-lg">Tensile strength measures how much stress steel can handle before breaking. Higher PSI = stronger bar.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Steel Grades Explained</h3>
                    <p className="text-gray-600 text-lg">130-150k PSI: Budget. 150-180k PSI: Mid-range. 180-210k PSI: Premium. 210k+: Competition elite.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Stainless Steel Benefits</h3>
                    <p className="text-gray-600 text-lg">Stainless steel bars offer superior corrosion resistance and premium feel. Found in high-end Eleiko and Rogue products.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Chrome vs Zinc vs Cerakote</h3>
                    <p className="text-gray-600 text-lg">Chrome: Durable but can chip. Zinc: Good protection, affordable. Cerakote: Excellent protection, lightweight, colorful.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-slate-200 mb-8 text-lg">Shop our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-slate-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
