import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "CAP Barbells | BarbellNearMe",
    description: "Shop cap barbells. Best prices and reviews.",
};

export default function CapPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">CAP Barbells</h1>
                        <p className="text-xl text-gray-200 mb-6">Shop cap barbells at the best prices.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg">Shop CAP Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
