import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell Maintenance Guide | BarbellNearMe",
    description: "A well-maintained barbell lasts decades and performs consistently. Learn how to care for your investment properly....",
};

export default function GuidePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell Maintenance Guide</h1>
                        <p className="text-xl text-green-200 mb-8">Keep Your Bar in Top Condition</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">A well-maintained barbell lasts decades and performs consistently. Learn how to care for your investment properly.</p>
                        </div>

                        
                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Daily Maintenance</h3>
                    <p className="text-gray-600 text-lg">Wipe down your bar after every workout. Focus on the shaft and sleeve where sweat accumulates.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Deep Cleaning</h3>
                    <p className="text-gray-600 text-lg">Monthly, clean knurling with a stiff brush and mild soap. Remove built-up chalk and debris.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Storage Best Practices</h3>
                    <p className="text-gray-600 text-lg">Store bars in a rack or holder, not on the floor. Keep away from moisture and extreme temperatures.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">When to Replace</h3>
                    <p className="text-gray-600 text-lg">Replace your bar when knurling becomes smooth, sleeves develop excessive play, or rust appears despite cleaning.</p>
                </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-green-200 mb-8 text-lg">Shop our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
