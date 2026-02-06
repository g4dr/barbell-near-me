import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbells Under $200 2026 | BarbellNearMe",
    description: "You don't need to spend a fortune to get a quality barbell. These budget-friendly options deliver impressive performance for home gyms....",
};

export default function BestPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbells Under $200</h1>
                        <p className="text-xl text-green-200 mb-8">Quality on a Budget</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">You don't need to spend a fortune to get a quality barbell. These budget-friendly options deliver impressive performance for home gyms.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Top Picks</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">CAP Barbell 20kg Olympic Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$149</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Overall Budget</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Trapper Strength Olympic Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$179</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Premium Budget</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Blue Sky Fitness Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$189</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Value</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Body-Solid Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$159</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Beginner Option</span>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop the Best Deals</h2>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">View All Deals</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
