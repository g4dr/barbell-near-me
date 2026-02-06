import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Rogue vs CAP Barbell Comparison 2026 | BarbellNearMe",
    description: "Rogue vs CAP: Compare two iconic American barbell brands. We break down quality, price, and performance to help you choose the right barbell for your gym.",
    canonical: "https://barbellnearme.com/compare/rogue-vs-cap",
};

export default function ComparePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ComparisonPage",
        "name": "Rogue vs CAP Barbell Comparison",
        "description": "Compare Rogue and CAP barbells to find the best value for your home gym.",
        "mainEntity": [
            {
                "@type": "Product",
                "name": "Rogue Barbell",
                "brand": "Rogue Fitness",
                "category": "Olympic Barbell",
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": "195",
                    "highPrice": "695",
                    "availability": "https://schema.org/InStock"
                },
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Origin", "value": "Made in USA"},
                    {"@type": "PropertyValue", "name": "Tensile Strength", "value": "190K+ PSI"},
                    {"@type": "PropertyValue", "name": "Warranty", "value": "Lifetime"}
                ]
            },
            {
                "@type": "Product",
                "name": "CAP Barbell",
                "brand": "CAP Barbell",
                "category": "Olympic Barbell",
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": "70",
                    "highPrice": "200",
                    "availability": "https://schema.org/InStock"
                },
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Origin", "value": "Imported"},
                    {"@type": "PropertyValue", "name": "Tensile Strength", "value": "150-170K PSI"},
                    {"@type": "PropertyValue", "name": "Warranty", "value": "1 Year"}
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rogue vs CAP Barbell Comparison</h1>
                        <p className="text-xl text-gray-300 mb-8">American Icon vs Budget King</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">Rogue Fitness</span>
                            <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">CAP Barbell</span>
                            <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">Budget vs Premium</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Rogue and CAP represent two very different philosophies in the barbell industry. 
                                Rogue has built its reputation on American manufacturing and premium quality, while 
                                CAP has dominated the budget market with affordable options. In this comparison, 
                                we examine which brand truly delivers the best value for your home gym.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pros & Cons Comparison</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Rogue Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ American-made quality</li>
                                    <li>✓ High tensile strength (190K+ PSI)</li>
                                    <li>✓ Lifetime warranty</li>
                                    <li>✓ Excellent customer service</li>
                                    <li>✓ Consistent quality control</li>
                                    <li>✓ Strong resale value</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Rogue Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Higher upfront cost</li>
                                    <li>✗ Premium models can be expensive</li>
                                    <li>✗ Some models have wait times</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">CAP Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Extremely affordable</li>
                                    <li>✓ Widely available</li>
                                    <li>✓ Good for beginners</li>
                                    <li>✓ Lightweight options available</li>
                                    <li>✓ Great backup bar</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">CAP Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Lower tensile strength</li>
                                    <li>✗ Variable quality control</li>
                                    <li>✗ Softer knurl wears faster</li>
                                    <li>✗ Limited warranty (1 year)</li>
                                    <li>✗ Overseas customer support</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Manufacturing & Quality Control</h3>
                                <p><strong>Rogue:</strong> All barbells are made in Columbus, Ohio with rigorous quality control. Each bar undergoes multiple inspection points. Tensile strength consistently tests above 190K PSI.</p>
                                <p className="mt-3"><strong>CAP:</strong> Manufactured overseas with variable quality control. Budget bars often show cosmetic imperfections. Tensile strength typically 150-170K PSI range.</p>
                            </div>

                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Knurl Quality & Grip</h3>
                                <p><strong>Rogue:</strong> Aggressive yet well-defined knurl pattern provides excellent grip without being harsh. Olympic bars feature dual knurl marks for IPF and IWF standards.</p>
                                <p className="mt-3"><strong>CAP:</strong> Softer knurl that can wear down faster with heavy use. Adequate for beginners but may slip on max-effort lifts.</p>
                            </div>

                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Spin & Rotation</h3>
                                <p><strong>Rogue:</strong> High-quality bearings or bushings depending on model. Smooth, consistent spin on Olympic lifts.</p>
                                <p className="mt-3"><strong>CAP:</strong> Basic bushing systems that provide adequate but not exceptional spin. Can develop play over time.</p>
                            </div>

                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Price Comparison</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Rogue: $195-$695</p>
                                        <p className="text-sm text-gray-300">Echo Bar at $195 offers best entry point. Ohio Bar at $345 is excellent mid-range option. Bomber Bar at $295.</p>
                                    </div>
                                    <div className="bg-gray-900/50 p-4 rounded-xl">
                                        <p className="font-bold">CAP: $70-$200</p>
                                        <p className="text-sm text-gray-300">The CAP Olympic bar is often under $100. Premium CAP bars up to $200.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Warranty & Support</h3>
                                <p><strong>Rogue:</strong> Industry-leading lifetime warranty against manufacturing defects. Excellent customer service based in the USA.</p>
                                <p className="mt-3"><strong>CAP:</strong> Limited 1-year warranty. Customer support can be slow and based overseas.</p>
                            </div>

                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Recommendations by User Type</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Rogue If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• You want a barbell that will last decades</li>
                                            <li>• You value American manufacturing</li>
                                            <li>• Serious lifting is your goal</li>
                                            <li>• You need reliable warranty support</li>
                                            <li>• Resale value matters to you</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose CAP If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Budget is your primary concern</li>
                                            <li>• You're a beginner just starting</li>
                                            <li>• You need a backup/beater bar</li>
                                            <li>• Commercial gym with multiple users</li>
                                            <li>• Replacing bars frequently</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl mt-8 border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Our Verdict</h3>
                            <p className="text-lg text-gray-700">
                                <strong>Choose Rogue</strong> if you want a barbell that will last decades with premium performance and American manufacturing. The slightly higher investment pays off in durability and resale value.
                            </p>
                            <p className="mt-4 text-gray-700">
                                <strong>Choose CAP</strong> if you're on a tight budget, need a backup bar, or are outfitting a commercial gym where bars may get more abuse. It's a solid entry point, but plan to upgrade eventually.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop Rogue & CAP Barbells</h2>
                        <p className="text-gray-300 mb-8">Browse our curated selection of quality barbells</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">🛒 Shop All Barbells</a>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/compare/rogue-vs-eleiko" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-gray-700">Rogue vs Eleiko</span>
                                <p className="text-sm text-gray-500">Premium brand battle</p>
                            </a>
                            <a href="/compare/rep-vs-cap" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-gray-700">Rep vs CAP</span>
                                <p className="text-sm text-gray-500">Budget showdown</p>
                            </a>
                            <a href="/best/barbells-under-200" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-gray-700">Budget Barbells</span>
                                <p className="text-sm text-gray-500">Best bars under $200</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
