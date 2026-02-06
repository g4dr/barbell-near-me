import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell Brands 2026 | Top Manufacturers Compared",
    description: "Discover the best barbell brands for every budget and lifting style. We compare Rogue, Eleiko, Rep, CAP, and more to help you find your perfect barbell.",
    canonical: "https://barbellnearme.com/best-barbell-brand",
    keywords: "best barbell brands, barbell manufacturer, barbell company, Rogue Fitness, Eleiko, Rep Fitness, CAP Barbell, barbell brands comparison",
};

export default function BestBrandPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell Brands</h1>
                        <p className="text-xl text-purple-200 mb-8">A Comprehensive Guide to Top Manufacturers</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">Brand Rankings</span>
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">Expert Reviews</span>
                            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">Buying Guide</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Choosing the right barbell brand is one of the most important decisions you'll make 
                                for your home gym. The brand you select affects quality, warranty, resale value, 
                                and your overall lifting experience. In this guide, we break down the top barbell 
                                manufacturers to help you make an informed decision.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Tier: Premium Manufacturers</h2>
                        
                        <div className="space-y-6 mb-12">
                            <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-8 rounded-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">🥇 Rogue Fitness</h3>
                                    <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full font-bold">#1 Overall</span>
                                </div>
                                <p className="text-purple-100 mb-4">
                                    Based in Columbus, Ohio, Rogue has built an empire on American-made quality. 
                                    From their iconic Ohio Bar to competition-grade equipment, Rogue sets the 
                                    standard for what a barbell should be.
                                </p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-purple-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Price Range</div>
                                        <div>$195 - $695</div>
                                    </div>
                                    <div className="bg-purple-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Made In</div>
                                        <div>USA</div>
                                    </div>
                                    <div className="bg-purple-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Warranty</div>
                                        <div>Lifetime</div>
                                    </div>
                                    <div className="bg-purple-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Best For</div>
                                        <div>All-around</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white p-8 rounded-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">🥈 Eleiko</h3>
                                    <span className="bg-yellow-400 text-red-900 px-4 py-1 rounded-full font-bold">Best Competition</span>
                                </div>
                                <p className="text-red-100 mb-4">
                                    The Swedish giant has been crafting Olympic bars since 1957. Eleiko bars 
                                    are the gold standard in international competition and preferred by 
                                    elite weightlifting programs worldwide.
                                </p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-red-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Price Range</div>
                                        <div>$475 - $895</div>
                                    </div>
                                    <div className="bg-red-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Made In</div>
                                        <div>Sweden</div>
                                    </div>
                                    <div className="bg-red-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Warranty</div>
                                        <div>2-5 Years</div>
                                    </div>
                                    <div className="bg-red-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Best For</div>
                                        <div>Olympic Lifting</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mid-Tier: Excellent Value</h2>
                        
                        <div className="space-y-6 mb-12">
                            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-2xl">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold">Rep Fitness</h3>
                                    <span className="bg-green-400 text-blue-900 px-4 py-1 rounded-full font-bold">Best Value</span>
                                </div>
                                <p className="text-blue-100 mb-4">
                                    A relative newcomer that has disrupted the market with American-made quality 
                                    at competitive prices. Rep barbells consistently outperform expectations 
                                    and come with excellent warranties.
                                </p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-blue-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Price Range</div>
                                        <div>$179 - $399</div>
                                    </div>
                                    <div className="bg-blue-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Made In</div>
                                        <div>USA / Taiwan</div>
                                    </div>
                                    <div className="bg-blue-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Warranty</div>
                                        <div>Lifetime</div>
                                    </div>
                                    <div className="bg-blue-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Best For</div>
                                        <div>All-around</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">Fringe Sport</h3>
                                <p className="text-gray-300 mb-4">
                                    Known for exceptional customer service and thoughtfully designed products. 
                                    Fringe Sport offers versatile barbells that excel in CrossFit and functional 
                                    fitness environments.
                                </p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Price Range</div>
                                        <div>$149 - $349</div>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Made In</div>
                                        <div>Taiwan</div>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Warranty</div>
                                        <div>5 Years</div>
                                    </div>
                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Best For</div>
                                        <div>CrossFit</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Budget Tier: Entry-Level Options</h2>
                        
                        <div className="space-y-6 mb-12">
                            <div className="bg-gradient-to-r from-yellow-700 to-yellow-900 text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">CAP Barbell</h3>
                                <p className="text-yellow-100 mb-4">
                                    The most recognizable name in budget barbells. CAP dominates the 
                                    entry-level market with affordable options available at major retailers. 
                                    Not premium quality, but hard to beat on price.
                                </p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="bg-yellow-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Price Range</div>
                                        <div>$50 - $199</div>
                                    </div>
                                    <div className="bg-yellow-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Made In</div>
                                        <div>China</div>
                                    </div>
                                    <div className="bg-yellow-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Warranty</div>
                                        <div>1 Year</div>
                                    </div>
                                    <div className="bg-yellow-800 p-3 rounded-lg">
                                        <div className="font-bold mb-1">Best For</div>
                                        <div>Beginners</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Brand Comparison Chart</h2>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="p-4 text-left font-bold">Brand</th>
                                            <th className="p-4 text-left font-bold">Price</th>
                                            <th className="p-4 text-left font-bold">Origin</th>
                                            <th className="p-4 text-left font-bold">Warranty</th>
                                            <th className="p-4 text-left font-bold">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-semibold">Rogue Fitness</td>
                                            <td className="p-4">$195 - $695</td>
                                            <td className="p-4">🇺🇸 USA</td>
                                            <td className="p-4">Lifetime</td>
                                            <td className="p-4">All-around</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-semibold">Eleiko</td>
                                            <td className="p-4">$475 - $895</td>
                                            <td className="p-4">🇸🇪 Sweden</td>
                                            <td className="p-4">2-5 Years</td>
                                            <td className="p-4">Olympic Lifting</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-semibold">Rep Fitness</td>
                                            <td className="p-4">$179 - $399</td>
                                            <td className="p-4">🇺🇸/🇹🇼 USA/Taiwan</td>
                                            <td className="p-4">Lifetime</td>
                                            <td className="p-4">Value Seekers</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-semibold">Fringe Sport</td>
                                            <td className="p-4">$149 - $349</td>
                                            <td className="p-4">🇹🇼 Taiwan</td>
                                            <td className="p-4">5 Years</td>
                                            <td className="p-4">CrossFit</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-semibold">CAP Barbell</td>
                                            <td className="p-4">$50 - $199</td>
                                            <td className="p-4">🇨🇳 China</td>
                                            <td className="p-4">1 Year</td>
                                            <td className="p-4">Budget</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl border-l-4 border-purple-600">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">🛒 How to Choose</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>Premium performance:</strong> Choose Rogue or Eleiko for the best quality available.</li>
                                <li><strong>Best value:</strong> Rep Fitness offers Rogue-like quality at lower prices.</li>
                                <li><strong>CrossFit/functional:</strong> Fringe Sport or Rep's functional bars are ideal.</li>
                                <li><strong>Strict budget:</strong> CAP will get you lifting while you save for better.</li>
                                <li><strong>Competition training:</strong> Eleiko or Rogue's competition bars are IPF-approved.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop by Brand</h2>
                        <p className="text-purple-200 mb-8">Find the perfect barbell from your preferred manufacturer</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a 
                                href="https://trugritfitness.pxf.io/Z6PKV1" 
                                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                            >
                                Rogue
                            </a>
                            <a 
                                href="https://trugritfitness.pxf.io/Z6PKV1" 
                                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                            >
                                Eleiko
                            </a>
                            <a 
                                href="https://trugritfitness.pxf.io/Z6PKV1" 
                                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                            >
                                Rep
                            </a>
                            <a 
                                href="https://trugritfitness.pxf.io/Z6PKV1" 
                                className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                            >
                                All Brands
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/compare/rogue-vs-eleiko" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-purple-700">Rogue vs Eleiko</span>
                                <p className="text-sm text-gray-500">Premium brand comparison</p>
                            </a>
                            <a href="/compare/rogue-vs-cap" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-purple-700">Rogue vs CAP</span>
                                <p className="text-sm text-gray-500">Icon vs budget king</p>
                            </a>
                            <a href="/barbells/under-200" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-purple-700">Best Under $200</span>
                                <p className="text-sm text-gray-500">Budget-friendly options</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
