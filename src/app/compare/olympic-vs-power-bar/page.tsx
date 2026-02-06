import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic vs Powerlifting Bar Comparison | BarbellNearMe",
    description: "Olympic vs powerlifting bars: Compare shaft diameter, knurl pattern, and sleeve design to find the right bar for your training style.",
    alternates: {
        canonical: "https://barbellnearme.com/compare/olympic-vs-power-bar",
    },
};

export default function ComparePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ComparisonPage",
        "name": "Olympic vs Powerlifting Bar Comparison",
        "description": "Compare Olympic and powerlifting barbells to find the best choice for your training style.",
        "mainEntity": [
            {
                "@type": "Product",
                "name": "Olympic Barbell",
                "category": "Olympic Weightlifting Barbell",
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Shaft Diameter", "value": "28mm (men), 25mm (women)"},
                    {"@type": "PropertyValue", "name": "Knurl", "value": "Moderate, even pattern"},
                    {"@type": "PropertyValue", "name": "Whip", "value": "High flexibility"},
                    {"@type": "PropertyValue", "name": "Sleeve", "value": "Bearings for smooth spin"},
                    {"@type": "PropertyValue", "name": "Best For", "value": "Snatch, Clean & Jerk"}
                ]
            },
            {
                "@type": "Product",
                "name": "Powerlifting Barbell",
                "category": "Powerlifting Barbell",
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Shaft Diameter", "value": "29mm (men), 27mm (women)"},
                    {"@type": "PropertyValue", "name": "Knurl", "value": "Aggressive center knurl"},
                    {"@type": "PropertyValue", "name": "Whip", "value": "Minimal stiffness"},
                    {"@type": "PropertyValue", "name": "Sleeve", "value": "Bushings for stability"},
                    {"@type": "PropertyValue", "name": "Best For", "value": "Squat, Bench Press, Deadlift"}
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
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olympic vs Powerlifting Bar Comparison</h1>
                        <p className="text-xl text-red-200 mb-8">Know the Difference</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-red-700 text-white px-4 py-2 rounded-full text-sm">Olympic Bars</span>
                            <span className="bg-red-700 text-white px-4 py-2 rounded-full text-sm">Power Bars</span>
                            <span className="bg-red-700 text-white px-4 py-2 rounded-full text-sm">Bar Types</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                These aren't just marketing terms. Olympic and powerlifting bars have distinct designs optimized for different lifting styles. 
                                Choosing the right type can significantly impact your training performance and safety. Let's break down the key differences.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pros & Cons Comparison</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Olympic Bar Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Essential for Olympic lifts</li>
                                    <li>✓ Built-in knurl marks for technique</li>
                                    <li>✓ Whip helps explosive movements</li>
                                    <li>✓ Smooth spinning sleeves</li>
                                    <li>✓ IPF and IWF competition approved</li>
                                    <li>✓ Versatile for general training</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Olympic Bar Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Less stable for heavy bench</li>
                                    <li>✗ Softer knurl may slip on heavy pulls</li>
                                    <li>✗ More expensive</li>
                                    <li>✗ Whip can be distracting for squats</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Power Bar Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Maximum stability</li>
                                    <li>✓ Aggressive center knurl</li>
                                    <li>✓ Stiff for consistent lifting</li>
                                    <li>✓ Durable for heavy training</li>
                                    <li>✓ Better for bench press</li>
                                    <li>✓ Often more affordable</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Power Bar Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Not suitable for Olympic lifts</li>
                                    <li>✗ Can be too stiff for some</li>
                                    <li>✗ Aggressive knurl may be uncomfortable</li>
                                    <li>✗ Limited versatility</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Shaft Diameter</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Olympic Bar: 28mm (men) / 25mm (women)</p>
                                        <p className="text-sm text-red-200 mt-2">Thinner shaft provides more whip and is easier to grip for dynamic movements. The flexibility helps with catching Olympic lifts.</p>
                                    </div>
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Power Bar: 29mm (men) / 27mm (women)</p>
                                        <p className="text-sm text-red-200 mt-2">Thicker shaft provides maximum stiffness and stability. Better for controlling heavy loads on the squat and bench press.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Knurl Pattern</h3>
                                <p><strong>Olympic Bar:</strong> Moderate, even knurl pattern throughout the shaft. Often includes dual marks for both IPF and IWF standards. Less aggressive to protect hands during dynamic movements.</p>
                                <p className="mt-3"><strong>Power Bar:</strong> Aggressive center knurl specifically designed to grip during heavy squats and bench presses. The center knurl provides extra grip without interfering with clean & jerks.</p>
                            </div>

                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Sleeve Design</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Olympic Bar: Bearings</p>
                                        <p className="text-sm text-red-200 mt-2">Multi-bearing system provides frictionless spin essential for Olympic lifts. Allows quick plate changes and protects wrists.</p>
                                    </div>
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Power Bar: Bushings</p>
                                        <p className="text-sm text-red-200 mt-2">Brass or bronze bushings provide controlled rotation. More stable for slow, heavy movements and requires less maintenance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Whip & Flexibility</h3>
                                <p><strong>Olympic Bar:</strong> Designed with intentional flex (whip) that helps athletes catch and stabilize heavy clean & jerks and snatches. The bar "bounces" slightly during the catch phase.</p>
                                <p className="mt-3"><strong>Power Bar:</strong> Minimal whip for consistent bar path on heavy lifts. The stiffness ensures the bar behaves predictably during maximal attempts.</p>
                            </div>

                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Price Comparison</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Olympic Bars: $250-$700</p>
                                        <p className="text-sm text-red-200">Entry-level around $250. Competition-grade Olympic bars with IWF certification start around $500.</p>
                                    </div>
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Power Bars: $200-$500</p>
                                        <p className="text-sm text-red-200">Quality power bars available around $200. Premium IPF-approved power bars typically $350-$500.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Recommendations by User Type</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Olympic Bar If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• You compete in Olympic weightlifting</li>
                                            <li>• CrossFit is your training style</li>
                                            <li>• You want one versatile barbell</li>
                                            <li>• Snatch and clean & jerk are priorities</li>
                                            <li>• Dynamic lifts are your focus</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Power Bar If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Powerlifting is your sport</li>
                                            <li>• Bench press is a primary lift</li>
                                            <li>• You prefer stiff, predictable bars</li>
                                            <li>• Maximum grip security matters</li>
                                            <li>• Raw lifting without dynamic elements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl mt-8 border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Our Verdict</h3>
                            <p className="text-lg text-gray-700">
                                <strong>Most home gym owners should start with an Olympic bar</strong> because it offers the versatility to train all lifts. If you primarily do CrossFit or Olympic lifting, this is the clear choice.
                            </p>
                            <p className="mt-4 text-gray-700">
                                <strong>Get a power bar</strong> if you're serious about powerlifting competition or want the absolute best bench press and squat experience. Many serious lifters eventually own both.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Find the Right Barbell Type</h2>
                        <p className="text-red-200 mb-8">Browse our complete selection by bar type</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">🛒 Shop Barbells</a>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/compare/rogue-vs-eleiko" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-red-700">Rogue vs Eleiko</span>
                                <p className="text-sm text-gray-500">Premium brand comparison</p>
                            </a>
                            <a href="/compare/bearing-vs-bushing" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-red-700">Bearing vs Bushing</span>
                                <p className="text-sm text-gray-500">Sleeve system comparison</p>
                            </a>
                            <a href="/compare/rogue-vs-cap" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-red-700">Rogue vs CAP</span>
                                <p className="text-sm text-gray-500">Budget vs premium</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
