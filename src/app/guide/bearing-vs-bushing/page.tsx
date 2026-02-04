import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Bearing vs Bushing Barbells | BarbellNearMe",
    description: "The sleeve system affects how your barbell spins. Understanding the differences helps you choose the right bar for your lifting style....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bearing vs Bushing Barbells Guide</h1>
                        <p className="text-xl text-cyan-200 mb-8">Understanding Sleeve Systems</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">The sleeve system affects how your barbell spins. Understanding the differences helps you choose the right bar for your lifting style.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-cyan-800 mb-4">What are Bushings</h3>
                    <p className="text-gray-600 text-lg">Brass or bronze bushings provide friction-based rotation. Durable, affordable, and ideal for powerlifting.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-cyan-800 mb-4">What are Bearings</h3>
                    <p className="text-gray-600 text-lg">Ball bearings provide near-frictionless spin. Essential for Olympic lifting but less durable.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-cyan-800 mb-4">Hybrid Systems</h3>
                    <p className="text-gray-600 text-lg">Combining bushings and bearings offers balance of spin and durability. Popular in CrossFit bars.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-cyan-800 mb-4">Which to Choose</h3>
                    <p className="text-gray-600 text-lg">Powerlifting: Bushings. Olympic Lifting: Bearings. CrossFit/General: Hybrid.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-cyan-200 mb-8 text-lg">Shop our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
