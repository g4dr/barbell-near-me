import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Women's Barbell Guide | BarbellNearMe",
    description: "Women's barbells are specifically designed with lighter weights and smaller diameters to accommodate female lifters....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-pink-900 to-pink-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Women's Barbell Guide</h1>
                        <p className="text-xl text-pink-200 mb-8">15kg Bars for Female Lifters</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Women's barbells are specifically designed with lighter weights and smaller diameters to accommodate female lifters.</p>
                        </div>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">15kg Standard</h3>
                <p className="text-gray-600">Women's bars weigh 15kg (33lbs) compared to 20kg for men's bars, making them easier to handle.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">25mm Shaft</h3>
                <p className="text-gray-600">Thinner 25mm diameter provides better grip for smaller hands without sacrificing control.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Top Women's Bars</h3>
                <p className="text-gray-600">Rogue Bella Bar 2.0, Eleiko XF Women's Bar, and Rep Women's Bar are top-rated options.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Who Should Use Women's Bars</h3>
                <p className="text-gray-600">Designed for female lifters, but also great for beginners, youth athletes, and anyone preferring lighter weights.</p>
            </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-pink-200 mb-8">Shop our curated selection of women's barbell guide at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
