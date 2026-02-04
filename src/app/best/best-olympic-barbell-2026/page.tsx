import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Olympic Barbell 2026 | BarbellNearMe",
    description: "Our expert picks for the best Olympic barbells this year, ranked by value, quality, and performance....",
};

export default function BestPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Olympic Barbell 2026</h1>
                        <p className="text-xl text-purple-200 mb-8">Top Picks Ranked</p>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Our expert picks for the best Olympic barbells this year, ranked by value, quality, and performance.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Rogue Olympic Bar 2.0</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$295</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Overall</span>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Eleiko Weightlifting Bar</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$545</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Premium</span>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Rep Olympic Bar</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-2">$279</p>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Best Value</span>
                </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
