import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "CrossFit Barbell Guide | BarbellNearMe",
    description: "CrossFit barbells are built to withstand high-rep workouts and varied movements typical in CrossFit programming....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">CrossFit Barbell Guide</h1>
                        <p className="text-xl text-orange-200 mb-8">WOD-Ready Bars</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">CrossFit barbells are built to withstand high-rep workouts and varied movements typical in CrossFit programming.</p>
                        </div>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Durability First</h3>
                <p className="text-gray-600">CrossFit bars need to handle thousands of reps per week with minimal wear.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Bushing vs Bearing</h3>
                <p className="text-gray-600">Most CrossFit bars use bushing systems that balance durability with adequate spin.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Knurling Considerations</h3>
                <p className="text-gray-600">Hybrid knurl provides grip without being too aggressive for high-rep work.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Top CrossFit Bars</h3>
                <p className="text-gray-600">Rogue Echo Bar, Eleiko XF Bar, and Rep Fracture Bar are excellent CrossFit-ready options.</p>
            </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-orange-200 mb-8">Shop our curated selection of crossfit barbell guide at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
