import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbells Under $200 2026 | Budget-Friendly Lifting Gear",
    description: "Discover the best barbells under $200 for your home gym. Quality doesn't have to break the bank - our expert picks deliver real performance at budget prices.",
    canonical: "https://barbellnearme.com/barbells/under-200",
    keywords: "barbells under $200, budget barbell, affordable barbell, home gym barbell, cheap barbell, entry level barbell",
};

export default function Under200Page() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbells Under $200</h1>
                        <p className="text-xl text-green-200 mb-8">Quality Lifting Without Breaking the Bank</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">Under $200</span>
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">Budget Pick</span>
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">Home Gym</span>
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">Beginner Friendly</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                You don't need to spend a fortune to get a quality barbell. The under $200 category 
                                has matured significantly, with several options that rival bars costing twice as much. 
                                Whether you're outfitting your first home gym or need a reliable backup bar, these 
                                budget-friendly options deliver solid performance.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Top Picks Under $200</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center mb-4">
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        🥇 Best Overall
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Rogue Echo Bar</h3>
                                <p className="text-2xl font-bold text-green-600 mb-3">$195</p>
                                <p className="text-gray-600 mb-4">
                                    The gold standard in budget barbells. American-made quality at an unbeatable price. 
                                    28.5mm shaft, dual knurl marks, and Rogue's legendary warranty.
                                </p>
                                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                    <li>✓ 190K PSI tensile strength</li>
                                    <li>✓ Bushing spin system</li>
                                    <li>✓ Made in USA</li>
                                    <li>✓ Lifetime warranty</li>
                                </ul>
                                <a 
                                    href="https://trugritfitness.pxf.io/Z6PKV1" 
                                    className="block bg-green-600 text-white text-center py-3 rounded-lg font-bold hover:bg-green-700 transition"
                                >
                                    View Deal
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        🥈 Best Value
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">CAP Olympic Bar</h3>
                                <p className="text-2xl font-bold text-blue-600 mb-3">$79-99</p>
                                <p className="text-gray-600 mb-4">
                                    The budget king that has equipped countless home gyms. Not the highest quality, 
                                    but nearly unbeatable at the price point.
                                </p>
                                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                    <li>✓ Extremely affordable</li>
                                    <li>✓ 150K+ PSI steel</li>
                                    <li>✓ Basic bushing system</li>
                                    <li>✓ Good for beginners</li>
                                </ul>
                                <a 
                                    href="https://trugritfitness.pxf.io/Z6PKV1" 
                                    className="block bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                                >
                                    View Deal
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center mb-4">
                                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        🥉 Best CrossFit
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Fringe Sport Wonder Bar</h3>
                                <p className="text-2xl font-bold text-purple-600 mb-3">$179</p>
                                <p className="text-gray-600 mb-4">
                                    Excellent option for CrossFit and functional fitness. Durable enough for metcons 
                                    while still handling heavy lifts well.
                                </p>
                                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                    <li>✓ Versatile design</li>
                                    <li>✓ Good knurl pattern</li>
                                    <li>✓ Zinc-coated sleeves</li>
                                    <li>✓ 5-year warranty</li>
                                </ul>
                                <a 
                                    href="https://trugritfitness.pxf.io/Z6PKV1" 
                                    className="block bg-purple-600 text-white text-center py-3 rounded-lg font-bold hover:bg-purple-700 transition"
                                >
                                    View Deal
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center mb-4">
                                    <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        ⭐ Budget Option
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Fitness Gear 20kg Bar</h3>
                                <p className="text-2xl font-bold text-orange-600 mb-3">$99-129</p>
                                <p className="text-gray-600 mb-4">
                                    Solid performer often available at big box stores. Good middle ground between 
                                    CAP and Rogue Echo.
                                </p>
                                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                                    <li>✓ Widely available</li>
                                    <li>✓ 28mm shaft</li>
                                    <li>✓ Bronze bushings</li>
                                    <li>✓ Good value</li>
                                </ul>
                                <a 
                                    href="https://trugritfitness.pxf.io/Z6PKV1" 
                                    className="block bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition"
                                >
                                    View Deal
                                </a>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect Under $200</h2>
                        <div className="bg-gray-100 p-6 rounded-xl mb-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl mb-2">⚠️</div>
                                    <h4 className="font-bold text-gray-800 mb-1">Knurl Quality</h4>
                                    <p className="text-sm text-gray-600">Less aggressive than premium bars. May require chalk for heavy lifts.</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-2">🔄</div>
                                    <h4 className="font-bold text-gray-800 mb-1">Spin System</h4>
                                    <p className="text-sm text-gray-600">Basic bushings. Smooth enough for Olympic lifts but not competition-level.</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl mb-2">🔧</div>
                                    <h4 className="font-bold text-gray-800 mb-1">Durability</h4>
                                    <p className="text-sm text-gray-600">May show wear faster than premium bars. Still years of use if maintained.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Recommendations</h2>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Pro Tips</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>First barbell?</strong> Go with the Rogue Echo Bar - it's the closest you'll get to premium quality at this price.</li>
                                <li><strong>On an extremely tight budget?</strong> CAP will serve you well as a starter bar while you save for better.</li>
                                <li><strong>CrossFit or gym with multiple users?</strong> Consider going slightly over budget for better durability.</li>
                                <li><strong>Competition training?</strong> Save up for a dedicated competition bar - budget bars aren't ideal for meets.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop Budget Barbells</h2>
                        <p className="text-green-200 mb-8">Find the perfect barbell for your budget</p>
                        <a 
                            href="https://trugritfitness.pxf.io/Z6PKV1" 
                            className="inline-block bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
                        >
                            🛒 View All Budget Barbells
                        </a>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/barbells/under-300" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-green-700">Under $300</span>
                                <p className="text-sm text-gray-500">Best bars in the $200-300 range</p>
                            </a>
                            <a href="/compare/rogue-vs-cap" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-green-700">Rogue vs CAP</span>
                                <p className="text-sm text-gray-500">Detailed brand comparison</p>
                            </a>
                            <a href="/best/budget-barbell" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-green-700">Best Budget Bars</span>
                                <p className="text-sm text-gray-500">Expert recommendations</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
