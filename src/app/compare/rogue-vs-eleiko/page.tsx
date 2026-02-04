import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Rogue vs Eleiko Barbell Comparison | BarbellNearMe",
    description: "Rogue and Eleiko represent two giants in the barbell industry. In this detailed comparison, we break down the differences to help you choose....",
};

export default function ComparePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rogue vs Eleiko Barbell Comparison</h1>
                        <p className="text-xl text-purple-200 mb-8">Which Brand Wins?</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Rogue and Eleiko represent two giants in the barbell industry. In this detailed comparison, we break down the differences to help you choose.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Quality & Manufacturing</h3>
                <p className="text-gray-600">Rogue: American-made with rigorous quality control. Eleiko: Swedish precision engineering with premium materials.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Price Point</h3>
                <p className="text-gray-600">Rogue: $195-$595 (more accessible). Eleiko: $475-$695 (premium pricing).</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Competition Legitimacy</h3>
                <p className="text-gray-600">Both brands are IPF-approved for competition use. Eleiko has longer history in international competitions.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Best For</h3>
                <p className="text-gray-600">Rogue: Best overall value and availability. Eleiko: Competition elite and those seeking the absolute best.</p>
            </div>


                        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl mt-8">
                            <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Pick</h3>
                            <p className="text-lg text-purple-700">Rogue for value, Eleiko for competition elite</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
                        <p className="text-purple-200 mb-8">Browse our complete selection and find your perfect match.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
