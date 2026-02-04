import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Budget Barbells | BarbellNearMe",
    description: "Shop Budget Barbells. Best prices and reviews.",
};

export default function Page() {
    const products = [
        {
            name: "CAP Barbell 20kg",
            brand: "CAP",
            price: "$149",
            rating: 4.9,
            reviews: 2800,
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
            features: ["28mm shaft", "Beginner friendly", "Solid value"],
            affiliate: "https://trugritfitness.pxf.io/Z6PKV1"
        },
        {
            name: "Trapper Strength Bar",
            brand: "Trapper",
            price: "$179",
            rating: 5.0,
            reviews: 1200,
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
            features: ["28mm shaft", "Chrome sleeves", "Good reviews"],
            affiliate: "https://trugritfitness.pxf.io/Z6PKV1"
        },
        {
            name: "Blue Sky Fitness Bar",
            brand: "Blue Sky",
            price: "$189",
            rating: 4.7,
            reviews: 890,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
            features: ["28mm shaft", "Lifetime warranty", "Budget pick"],
            affiliate: "https://trugritfitness.pxf.io/Z6PKV1"
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Budget Barbells</h1>
                        <p className="text-xl md:text-2xl text-green-200 mb-8">SUBBudget Barbells</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Rated Products</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                                    <div className="relative h-64">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">{product.brand}</div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                                        <div className="flex items-center mb-4">
                                            <span className="text-yellow-400">★★★★★</span>
                                            <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {product.features.map((f, i) => <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{f}</span>)}
                                        </div>
                                        <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                            <span className="text-2xl font-bold text-green-600">{product.price}</span>
                                            <a href={product.affiliate} target="_blank" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold">View Deal</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Budget Barbells?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
                                <div className="text-4xl mb-4">🏋️</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Performance</h3>
                                <p className="text-gray-600">Premium materials and precision manufacturing.</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
                                <div className="text-4xl mb-4">💪</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Durability</h3>
                                <p className="text-gray-600">Built to last with quality steel.</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
                                <div className="text-4xl mb-4">⭐</div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Value</h3>
                                <p className="text-gray-600">Competitive pricing guaranteed.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
