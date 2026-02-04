import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic vs Powerlifting Bar Comparison | BarbellNearMe",
    description: "These aren't just marketing terms. Olympic and powerlifting bars have distinct designs optimized for different lifting styles....",
};

export default function ComparePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olympic vs Powerlifting Bar Comparison</h1>
                        <p className="text-xl text-red-200 mb-8">Know the Difference</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">These aren't just marketing terms. Olympic and powerlifting bars have distinct designs optimized for different lifting styles.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Shaft Diameter</h3>
                <p className="text-gray-600">Olympic: 28mm standard for Whip. Power: 29mm for stiffness.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Knurl Pattern</h3>
                <p className="text-gray-600">Olympic: Moderate, even knurl. Power: Aggressive center knurl.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Sleeve Design</h3>
                <p className="text-gray-600">Olympic: Smooth spin for Olympic lifts. Power: Friction retention for heavy work.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Weight</h3>
                <p className="text-gray-600">Olympic: 20kg standard (15kg women). Power: Also 20kg but often feels stiffer.</p>
            </div>


                        <div className="bg-gradient-to-br from-red-100 to-red-200 p-8 rounded-2xl mt-8">
                            <h3 className="text-2xl font-bold text-red-800 mb-4">Our Pick</h3>
                            <p className="text-lg text-red-700">Choose based on your primary lifts</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
                        <p className="text-red-200 mb-8">Browse our complete selection and find your perfect match.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
