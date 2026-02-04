import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic Barbells | BarbellNearMe",
    description: "Olympic barbells meet international weightlifting standards with 28mm shafts and 20kg weight. Perfect for serious lifters and competition training....",
};

export default function CategoryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olympic Barbells</h1>
                        <p className="text-xl text-purple-200 mb-8">Competition-Grade Lifting Bars</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">28mm shaft</span>
                                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">20kg weight</span>
                                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">50mm sleeves</span>
                                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">IPF approved</span>
                                    
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Olympic barbells meet international weightlifting standards with 28mm shafts and 20kg weight. Perfect for serious lifters and competition training.</p>
                        </div>
                        <div className="text-center">
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg">Shop Now</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
