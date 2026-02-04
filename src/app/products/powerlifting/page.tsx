import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Powerlifting Barbells | BarbellNearMe",
    description: "Shop Power bars for squat bench deadlift. Features 29mm shaft and Aggressive knurl. Best prices and reviews.",
};

export default function PowerliftingPage() {
    const products = [
        { name: 'Rogue Powerlifting Barbells', brand: 'Rogue', price: '$295', rating: 4.9, features: ['29mm shaft', 'Aggressive knurl'] },
        { name: 'Eleiko Powerlifting Barbells', brand: 'Eleiko', price: '$545', rating: 5.0, features: ['Premium', 'IPF approved'] },
        { name: 'Rep Powerlifting Barbells', brand: 'Rep', price: '$279', rating: 4.7, features: ['Value', 'Quality'] }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Powerlifting Barbells</h1>
                        <p className="text-xl text-red-200 mb-6">Shop Power bars for squat bench deadlift. Best prices guaranteed.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <p className="text-red-600 font-bold mt-2">{product.price}</p>
                                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-red-600 text-white text-center py-2 rounded-lg mt-4">View Deal</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
