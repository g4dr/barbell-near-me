import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Powerlifting Barbell Guide | BarbellNearMe",
    description: "Powerlifting bars are engineered for the three main lifts: squat, bench press, and deadlift. They feature aggressive knurling and stiff construction....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Powerlifting Barbell Guide</h1>
                        <p className="text-xl text-red-200 mb-8">Maximum Grip & Performance</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Powerlifting bars are engineered for the three main lifts: squat, bench press, and deadlift. They feature aggressive knurling and stiff construction.</p>
                        </div>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4">What is Powerlifting Knurl</h3>
                <p className="text-gray-600">Power bars feature deep, aggressive knurl patterns that provide exceptional grip for maximal loads without chalk.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Shaft Diameter</h3>
                <p className="text-gray-600">Most power bars use 29mm shafts for stiffness and stability during heavy lifts.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Tensile Strength</h3>
                <p className="text-gray-600">Look for bars with 190k+ PSI steel for durability under extreme loads.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Top Power Bars</h3>
                <p className="text-gray-600">Rogue Ohio Power Bar, Eleiko Power Bar, and Rep Power Bar are top choices in this category.</p>
            </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-red-200 mb-8">Shop our curated selection of powerlifting barbell guide at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
