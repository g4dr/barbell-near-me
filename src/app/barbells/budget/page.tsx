import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Budget Barbells | BarbellNearMe",
    description: "Quality doesn't have to break the bank. These barbells deliver solid performance for home gyms on a budget....",
};

export default function CategoryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Budget Barbells Under $200</h1>
                        <p className="text-xl text-green-200 mb-8">Quality Under $200</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Under $200</span>
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Entry-level</span>
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Home gym</span>
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Beginner friendly</span>
                                    
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Quality doesn't have to break the bank. These barbells deliver solid performance for home gyms on a budget.</p>
                        </div>
                        <div className="text-center">
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg">Shop Now</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
