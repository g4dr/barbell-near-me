import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Eleiko Barbells | BarbellNearMe",
    description: "Shop eleiko barbells. Best prices and reviews.",
};

export default function EleikoPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Eleiko Barbells</h1>
                        <p className="text-xl text-blue-200 mb-6">Shop eleiko barbells at the best prices.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">Shop Eleiko Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
