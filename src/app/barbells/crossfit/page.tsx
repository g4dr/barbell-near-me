import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "CrossFit Barbells | BarbellNearMe",
    description: "Built to withstand high-rep CrossFit workouts with durable finishes and hybrid knurl patterns....",
};

export default function CategoryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">CrossFit Barbells</h1>
                        <p className="text-xl text-orange-200 mb-8">WOD-Ready Durability</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">Durable coating</span>
                                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">Hybrid knurl</span>
                                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">Bushing system</span>
                                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">WOD ready</span>
                                    
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">Built to withstand high-rep CrossFit workouts with durable finishes and hybrid knurl patterns.</p>
                        </div>
                        <div className="text-center">
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg">Shop Now</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
