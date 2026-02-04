import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell Knurling Guide | BarbellNearMe",
    description: "Knurl pattern affects grip, comfort, and lifting performance. Understanding knurling helps you choose the right bar for your lifting style....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Complete Guide to Barbell Knurling</h1>
                        <p className="text-xl text-amber-200 mb-8">Finding Your Perfect Grip</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Knurl pattern affects grip, comfort, and lifting performance. Understanding knurling helps you choose the right bar for your lifting style.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">Knurling Patterns Explained</h3>
                    <p className="text-gray-600 text-lg">Olympic: Even, moderate pattern for mixed lifts. Power: Aggressive center, less aggressive ends. Hybrid: Balanced approach.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">Aggressive vs Mild</h3>
                    <p className="text-gray-600 text-lg">Aggressive knurl provides maximum grip but can be uncomfortable. Mild knurl is comfortable but may slip under heavy loads.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">Center Knurl Considerations</h3>
                    <p className="text-gray-600 text-lg">Some lifters prefer center knurl for squats. Others find it uncomfortable. Consider your primary lifts.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">Knurling by Sport</h3>
                    <p className="text-gray-600 text-lg">Powerlifting: Aggressive. Olympic Lifting: Moderate. CrossFit: Hybrid. General Fitness: Mild to moderate.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-amber-200 mb-8 text-lg">Shop our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
