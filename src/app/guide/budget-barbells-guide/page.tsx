import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Budget Barbells Guide | BarbellNearMe",
    description: "You don't need to spend a fortune to get a quality barbell. Many budget options offer excellent value for home gyms....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Budget Barbells Under $200</h1>
                        <p className="text-xl text-green-200 mb-8">Quality Under $200</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">You don't need to spend a fortune to get a quality barbell. Many budget options offer excellent value for home gyms.</p>
                        </div>
                        
            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">What to Expect Under $200</h3>
                <p className="text-gray-600">Budget bars from CAP, Trapper, and Blue Sky offer solid performance for beginners and intermediate lifters.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Best Value Picks</h3>
                <p className="text-gray-600">CAP Barbell 20kg, Trapper Strength Bar, and Blue Sky Fitness Bar lead our budget recommendations.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Trade-offs to Consider</h3>
                <p className="text-gray-600">Budget bars may use lower-grade steel, basic finishes, and less refined knurling patterns.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl mb-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Long-term Value</h3>
                <p className="text-gray-600">A quality budget bar can last years with proper care. Consider it an investment in your fitness journey.</p>
            </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-green-200 mb-8">Shop our curated selection of best budget barbells under $200 at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
