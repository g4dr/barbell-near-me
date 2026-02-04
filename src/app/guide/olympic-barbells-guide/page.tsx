import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic Barbell Guide | BarbellNearMe",
    description: "Olympic barbells are designed for competitive weightlifting and feature standardized specifications that make them ideal for serious lifters....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Complete Guide to Olympic Barbells</h1>
                        <p className="text-xl text-purple-200 mb-8">Competition-Grade Lifting</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Olympic barbells are designed for competitive weightlifting and feature standardized specifications that make them ideal for serious lifters.</p>
                        </div>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">What Makes an Olympic Bar</h3>
                <p className="text-gray-600">Olympic bars must meet IWF or IPF specifications with 28mm shafts, 20kg weight, and 50mm sleeve diameter.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Best Olympic Bars 2026</h3>
                <p className="text-gray-600">Our top picks include Rogue Olympic Bar 2.0, Eleiko Weightlifting Bar, and Rep Olympic Bar for various budgets.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Why Quality Matters</h3>
                <p className="text-gray-600">A good Olympic bar has consistent spin, durable chrome or finish coating, and precise manufacturing for competition use.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Investment vs Budget</h3>
                <p className="text-gray-600">Competition-grade bars range from $200 to $600+. The difference lies in steel quality, finish, and manufacturing precision.</p>
            </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-purple-200 mb-8">Shop our curated selection of complete guide to olympic barbells at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
