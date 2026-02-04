import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell for Home Gym 2026 | BarbellNearMe",
    description: "Setting up a home gym? Your barbell is the most important investment. This guide covers everything you need to know to choose the perfect bar for your...",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell for Home Gym</h1>
                        <p className="text-xl text-blue-200 mb-8">Complete Buyer's Guide</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Setting up a home gym? Your barbell is the most important investment. This guide covers everything you need to know to choose the perfect bar for your home gym.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Why Your Barbell Choice Matters</h3>
                    <p className="text-gray-600 text-lg">A quality barbell is the heart of any home gym. It affects every lift, from squats to deadlifts. Choose wisely.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Home Gym Considerations</h3>
                    <p className="text-gray-600 text-lg">Space, budget, and training goals all factor into your barbell choice. We'll help you find the perfect match.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Best Bars Under $300</h3>
                    <p className="text-gray-600 text-lg">These barbells offer excellent value for home gyms without breaking the bank. Perfect for most home gym setups.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Best Bars $300-$500</h3>
                    <p className="text-gray-600 text-lg">Premium options with better steel, finishes, and quality control. Worth the investment for serious home gym enthusiasts.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Garage Gym Special</h3>
                    <p className="text-gray-600 text-lg">Garage gyms face humidity and temperature changes. Choose bars with corrosion-resistant coatings.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-blue-200 mb-8 text-lg">Shop our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
