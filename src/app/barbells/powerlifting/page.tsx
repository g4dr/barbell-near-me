import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Powerlifting Barbells | BarbellNearMe",
    description: "Power bars feature 29mm shafts and aggressive center knurl designed for maximal loads in squat, bench, and deadlift....",
};

export default function CategoryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Powerlifting Barbells</h1>
                        <p className="text-xl text-red-200 mb-8">Aggressive Grip for Heavy Lifts</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">29mm shaft</span>
                                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">Aggressive knurl</span>
                                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">190k+ PSI</span>
                                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">Stiff construction</span>
                                    
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Power bars feature 29mm shafts and aggressive center knurl designed for maximal loads in squat, bench, and deadlift.</p>
                        </div>
                        <div className="text-center">
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg">Shop Now</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
