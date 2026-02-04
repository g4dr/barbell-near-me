import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic Barbell Standards Guide | BarbellNearMe",
    description: "Competition barbells must meet specific standards. Understanding these specifications helps you choose a competition-legal bar....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olympic Barbell Standards Guide</h1>
                        <p className="text-xl text-purple-200 mb-8">IPF, IWF & Competition Specs</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Competition barbells must meet specific standards. Understanding these specifications helps you choose a competition-legal bar.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">IWF Specifications</h3>
                    <p className="text-gray-600 text-lg">International Weightlifting Federation: 28mm shaft, 220mm grip area, 20kg weight, 50mm sleeve diameter.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">IPF Specifications</h3>
                    <p className="text-gray-600 text-lg">International Powerlifting Federation: 29mm shaft, 220mm grip area, 20kg weight, 50mm sleeve diameter.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">IPF vs IWF Differences</h3>
                    <p className="text-gray-600 text-lg">IPF allows 29mm shafts for powerlifting. IWF requires 28mm for Olympic lifting. Both use 20kg weight.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Are Standards Worth It</h3>
                    <p className="text-gray-600 text-lg">Competition standards ensure quality and consistency. Worth it for competitive lifters. Recreational lifters can skip.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-purple-200 mb-8 text-lg">Shop our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
