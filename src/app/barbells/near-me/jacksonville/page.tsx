import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Jacksonville Barbells | BarbellNearMe",
    description: "Find the best barbells and gym equipment in Jacksonville. Local delivery available.",
};

export default function JacksonvillePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Jacksonville Barbells</h1>
                        <p className="text-xl text-purple-200 mb-6">Buy barbells in Jacksonville. Fast local delivery.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="mb-4">Shop the best barbells delivered to Jacksonville.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
