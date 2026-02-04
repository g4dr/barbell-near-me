import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best CrossFit Bar | BarbellNearMe",
    description: "WOD ready bars. Expert reviews and comparisons.",
};

export default function BestcrossfitbarPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Best CrossFit Bar</h1>
                        <p className="text-xl text-orange-200 mb-6">WOD ready bars.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p>Expert reviews and comparisons coming soon.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg mt-4">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
