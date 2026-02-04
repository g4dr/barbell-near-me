import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Rogue Barbells | BarbellNearMe",
    description: "Shop rogue barbells. Best prices and reviews.",
};

export default function RoguePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Rogue Barbells</h1>
                        <p className="text-xl text-red-200 mb-6">Shop rogue barbells at the best prices.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg">Shop Rogue Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
