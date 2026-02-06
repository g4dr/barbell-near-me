import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Rogue vs Eleiko Barbell Comparison | BarbellNearMe",
    description: "Rogue and Eleiko represent two giants in the barbell industry. In this detailed comparison, we break down quality, price, and performance to help you choose.",
    canonical: "https://barbellnearme.com/compare/rogue-vs-eleiko",
};

export default function ComparePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ComparisonPage",
        "name": "Rogue vs Eleiko Barbell Comparison",
        "description": "Compare Rogue and Eleiko barbells to find the best choice for your training needs.",
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
                    "highPrice": "595",
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
                "name": "Eleiko Barbell",
                "brand": "Eleiko",
                "category": "Olympic Barbell",
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": "475",
                    "highPrice": "695",
                    "availability": "https://schema.org/InStock"
                },
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Origin", "value": "Made in Sweden"},
                    {"@type": "PropertyValue", "name": "Tensile Strength", "value": "215K PSI"},
                    {"@type": "PropertyValue", "name": "Warranty", "value": "Lifetime"}
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
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rogue vs Eleiko Barbell Comparison</h1>
                        <p className="text-xl text-purple-200 mb-8">Which Brand Wins?</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm">Rogue Fitness</span>
                            <span className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm">Eleiko</span>
                            <span className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm">Premium Bars</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed">Rogue and Eleiko represent two giants in the barbell industry. In this detailed comparison, we break down quality, price, and performance to help you choose the perfect barbell for your training.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pros & Cons Comparison</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Rogue Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ American-made quality</li>
                                    <li>✓ More affordable pricing</li>
                                    <li>✓ Excellent customer service</li>
                                    <li>✓ Lifetime warranty</li>
                                    <li>✓ Wide model selection</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Rogue Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Premium models can be pricey</li>
                                    <li>✗ Some models have longer wait times</li>
                                    <li>✗ Knurl may be too aggressive for some</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Eleiko Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Swedish precision engineering</li>
                                    <li>✓ Superior tensile strength (215K PSI)</li>
                                    <li>✓ Premium feel and finish</li>
                                    <li>✓ Trusted in international competitions</li>
                                    <li>✓ Excellent knurl pattern</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Eleiko Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Higher price point</li>
                                    <li>✗ Limited availability in some regions</li>
                                    <li>✗ Longer shipping times</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Quality & Manufacturing</h3>
                                <p><strong>Rogue:</strong> American-made in Columbus, Ohio with rigorous quality control. Each bar undergoes multiple inspection points. Tensile strength consistently tests above 190K PSI.</p>
                                <p className="mt-3"><strong>Eleiko:</strong> Swedish precision engineering with premium materials. Higher tensile strength at 215K PSI. Longer history in international competition use.</p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Price Comparison</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-purple-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Rogue: $195-$595</p>
                                        <p className="text-sm text-purple-200">Echo Bar at $195 offers best entry point. Ohio Bar at $345 is excellent mid-range option.</p>
                                    </div>
                                    <div className="bg-purple-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Eleiko: $475-$695</p>
                                        <p className="text-sm text-purple-200">Olympic Training Bar at $475. Prestige Olympic at $695 for competition-level quality.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Best Use Cases</h3>
                                <p><strong>Rogue:</strong> Best for home gyms seeking American quality at reasonable prices. Ideal for powerlifting, general strength training, and CrossFit.</p>
                                <p className="mt-3"><strong>Eleiko:</strong> Best for serious competitors, commercial gyms, and those who want the absolute best. Preferred in international competition settings.</p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Recommendations by User Type</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-purple-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Rogue If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• You want American-made quality</li>
                                            <li>• Budget is a primary concern</li>
                                            <li>• You need reliable warranty support</li>
                                            <li>• Versatility is important</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Eleiko If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Money is no object</li>
                                            <li>• Competition at highest levels</li>
                                            <li>• You want Swedish precision</li>
                                            <li>• Only the best will do</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl mt-8 border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Our Verdict</h3>
                            <p className="text-lg text-gray-700">
                                <strong>Rogue offers the best overall value</strong> for most home gym owners, combining American manufacturing quality with accessible pricing. The Echo Bar and Ohio Bar represent excellent choices at their price points.
                            </p>
                            <p className="mt-4 text-gray-700">
                                <strong>Eleiko is worth the premium</strong> for serious competitors and those who demand the absolute best. The superior tensile strength and competition pedigree make it a worthwhile investment for elite lifters.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop Rogue & Eleiko Barbells</h2>
                        <p className="text-purple-200 mb-8">Browse our curated selection of premium barbells</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">🛒 Shop All Barbells</a>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/compare/rogue-vs-cap" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-purple-700">Rogue vs CAP</span>
                                <p className="text-sm text-gray-500">American icon vs budget king</p>
                            </a>
                            <a href="/compare/olympic-vs-power-bar" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-purple-700">Olympic vs Power Bar</span>
                                <p className="text-sm text-gray-500">Know the difference</p>
                            </a>
                            <a href="/best/barbells-under-200" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-purple-700">Budget Barbells</span>
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
