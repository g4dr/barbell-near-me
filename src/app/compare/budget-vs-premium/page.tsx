import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Budget vs Premium Barbell Comparison | BarbellNearMe",
    description: "Should you spend $600 on a barbell or get one for $150? We break down the real differences to help you decide....",
};

export default function ComparePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Budget vs Premium Barbell Comparison</h1>
                        <p className="text-xl text-green-200 mb-8">Is Premium Worth It?</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Should you spend $600 on a barbell or get one for $150? We break down the real differences to help you decide.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Steel Quality</h3>
                <p className="text-gray-600">Premium bars use higher tensile strength steel (190k+ PSI). Budget bars typically use 150-170k PSI steel.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Knurl Quality</h3>
                <p className="text-gray-600">Premium bars have precise, aggressive knurl patterns. Budget bars have less refined, shallower knurl.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Finish & Coating</h3>
                <p className="text-gray-600">Premium: Cerakote, chrome, zinc options. Budget: Basic chrome or paint that may wear faster.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Longevity</h3>
                <p className="text-gray-600">Premium bars last decades with proper care. Budget bars may need replacement after 5-10 years of heavy use.</p>
            </div>


                        <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl mt-8">
                            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Pick</h3>
                            <p className="text-lg text-green-700">Premium worth it for serious lifters, budget OK for beginners</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
                        <p className="text-green-200 mb-8">Browse our complete selection and find your perfect match.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
