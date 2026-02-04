import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic Barbells | BarbellNearMe",
    description: "Shop Olympic bars for weightlifting. Features 28mm shaft and 20kg. Best prices and reviews.",
};

export default function OlympicPage() {
    const products = [
        { name: 'Rogue Olympic Barbells', brand: 'Rogue', price: '$295', rating: 4.9, features: ['28mm shaft', '20kg'] },
        { name: 'Eleiko Olympic Barbells', brand: 'Eleiko', price: '$545', rating: 5.0, features: ['Premium', 'IPF approved'] },
        { name: 'Rep Olympic Barbells', brand: 'Rep', price: '$279', rating: 4.7, features: ['Value', 'Quality'] }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Olympic Barbells</h1>
                        <p className="text-xl text-purple-200 mb-6">Shop Olympic bars for weightlifting. Best prices guaranteed.</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                    <p className="text-purple-600 font-bold mt-2">{product.price}</p>
                                    <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-purple-600 text-white text-center py-2 rounded-lg mt-4">View Deal</a>
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
