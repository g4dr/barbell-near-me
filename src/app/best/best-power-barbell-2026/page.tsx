import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Power Barbell 2026 | BarbellNearMe",
    description: "Top-rated powerlifting bars for serious squatters, benchers, and deadlifters seeking maximum performance....",
};

export default function BestPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Power Barbell 2026</h1>
                        <p className="text-xl text-red-200 mb-8">Maximum Grip Performance</p>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Top-rated powerlifting bars for serious squatters, benchers, and deadlifters seeking maximum performance.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Rogue Ohio Power Bar</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">$345</p>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Best Overall</span>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Eleiko Power Bar</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">$595</p>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Best Premium</span>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Rep Power Bar</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">$299</p>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Best Budget</span>
                </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
