import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "How to Choose the Right Barbell in 2026 | BarbellNearMe",
    description: "Choosing the right barbell is one of the most important decisions you'll make for your home gym. With so many options available, it can be overwhelmin...",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">How to Choose the Right Barbell</h1>
                        <p className="text-xl text-blue-200 mb-8">Complete Buyer's Guide</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Choosing the right barbell is one of the most important decisions you'll make for your home gym. With so many options available, it can be overwhelming. This comprehensive guide will walk you through everything you need to know to make an informed decision.</p>
                        </div>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Understand Your Goals</h3>
                <p className="text-gray-600">Are you primarily lifting for powerlifting, Olympic weightlifting, CrossFit, or general fitness? Your goals will determine the type of bar you need.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Know the Differences</h3>
                <p className="text-gray-600">Olympic bars have 28mm shafts and 20kg weight, while power bars feature 29mm shafts and aggressive knurling for heavier lifting.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Consider Your Budget</h3>
                <p className="text-gray-600">Quality barbells range from $100 to $600+. Determine your budget and find the best value within your price range.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Check the Knurling</h3>
                <p className="text-gray-600">The knurling pattern affects grip. Aggressive knurl is great for heavy lifts, while hybrid works for mixed training.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Look at Sleeve Quality</h3>
                <p className="text-gray-600">Quality sleeves with smooth bearings or bushings ensure proper spin and longevity of your bar.</p>
            </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-blue-200 mb-8">Shop our curated selection of how to choose the right barbell at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
