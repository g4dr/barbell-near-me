import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Budget Barbell Guide | BarbellNearMe",
    description: "Complete guide to choosing the right barbell for your training.",
};

export default function BudgetbarbellsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Budget Barbell Guide</h1>
                        <p className="text-xl text-green-200 mb-6">Expert guide to finding your perfect barbell.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-4">Complete Guide</h2>
                        <p>Everything you need to know about choosing the right barbell.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg mt-4">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
