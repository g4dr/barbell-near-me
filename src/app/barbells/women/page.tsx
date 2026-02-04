import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Women's Barbells | BarbellNearMe",
    description: "15kg bars with 25mm shafts designed specifically for female lifters with smaller hands and lighter training loads....",
};

export default function CategoryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-pink-900 to-pink-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Women's Barbells</h1>
                        <p className="text-xl text-pink-200 mb-8">15kg Bars for Female Lifters</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">15kg weight</span>
                                    <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">25mm shaft</span>
                                    <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">Smaller grip</span>
                                    <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">IWF approved</span>
                                    
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700">15kg bars with 25mm shafts designed specifically for female lifters with smaller hands and lighter training loads.</p>
                        </div>
                        <div className="text-center">
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg">Shop Now</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
