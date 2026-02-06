import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Bearing vs Bushing Barbell Comparison | BarbellNearMe",
    description: "Compare bearing vs bushings barbells. We break down pros/cons, best use cases, and help you choose the right sleeve system for your lifting style.",
    alternates: {
        canonical: "https://barbellnearme.com/compare/bearing-vs-bushing",
    },
};

export default function ComparePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ComparisonPage",
        "name": "Bearing vs Bushing Barbell Comparison",
        "description": "Compare bearing and bushing barbell sleeve systems to find the best choice for your lifting style.",
        "mainEntity": [
            {
                "@type": "Product",
                "name": "Bearing Barbell",
                "category": "Olympic Barbell",
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Sleeve Type", "value": "Ball Bearings"},
                    {"@type": "PropertyValue", "name": "Spin", "value": "High/Frictionless"},
                    {"@type": "PropertyValue", "name": "Best For", "value": "Olympic Lifting, CrossFit"},
                    {"@type": "PropertyValue", "name": "Durability", "value": "Moderate"},
                    {"@type": "PropertyValue", "name": "Price Range", "value": "$200-$600"}
                ]
            },
            {
                "@type": "Product",
                "name": "Bushing Barbell",
                "category": "Powerlifting Barbell",
                "additionalProperty": [
                    {"@type": "PropertyValue", "name": "Sleeve Type", "value": "Brass/Bronze Bushings"},
                    {"@type": "PropertyValue", "name": "Spin", "value": "Moderate/Friction-Based"},
                    {"@type": "PropertyValue", "name": "Best For", "value": "Powerlifting, General Strength"},
                    {"@type": "PropertyValue", "name": "Durability", "value": "High"},
                    {"@type": "PropertyValue", "name": "Price Range", "value": "$100-$400"}
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
                <section className="bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bearing vs Bushing Barbell Comparison</h1>
                        <p className="text-xl text-cyan-200 mb-8">Find Your Perfect Sleeve System</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-cyan-700 text-white px-4 py-2 rounded-full text-sm">Bearings</span>
                            <span className="bg-cyan-700 text-white px-4 py-2 rounded-full text-sm">Bushings</span>
                            <span className="bg-cyan-700 text-white px-4 py-2 rounded-full text-sm">Sleeve Systems</span>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The sleeve system is one of the most important factors in choosing a barbell. It determines how the sleeves rotate 
                                and directly impacts your lifting experience. Understanding the differences between bearings and bushings will help 
                                you select the right bar for your training style.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pros & Cons Comparison</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Bearing Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Near-frictionless spin</li>
                                    <li>✓ Essential for Olympic lifts</li>
                                    <li>✓ Smooth plate loading</li>
                                    <li>✓ Better for dynamic movements</li>
                                    <li>✓ Reduced stress on wrists</li>
                                    <li>✓ Preferred in competition</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Bearing Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ More expensive</li>
                                    <li>✗ Requires more maintenance</li>
                                    <li>✗ Bearings can wear out</li>
                                    <li>✗ Not ideal for slow movements</li>
                                    <li>✗ Can develop play over time</li>
                                    <li>✗ More complex internals</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Bushing Pros</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Extremely durable</li>
                                    <li>✓ Lower maintenance</li>
                                    <li>✓ More affordable</li>
                                    <li>✓ Stable during heavy lifts</li>
                                    <li>✓ Long lifespan</li>
                                    <li>✓ Simple internals</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Bushing Cons</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✗ Limited spin</li>
                                    <li>✗ Not ideal for Olympic lifts</li>
                                    <li>✗ Can cause wrist stress</li>
                                    <li>✗ Plates may wobble slightly</li>
                                    <li>✗ Less smooth rotation</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Comparison</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">How They Work</h3>
                                <p><strong>Bearings:</strong> Use multiple ball bearings that roll against the shaft and inner sleeve wall. This creates a near-frictionless spin that's essential for Olympic lifts where the bar needs to rotate freely during snatches and clean & jerks.</p>
                                <p className="mt-3"><strong>Bushings:</strong> Use brass or bronze bushings that slide against the shaft. The friction-based design provides controlled, limited rotation that's stable for heavy powerlifting movements.</p>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Price Comparison</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-cyan-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Bearing Bars: $200-$600</p>
                                        <p className="text-sm text-cyan-200">Entry-level bearing bars start around $200. Premium Olympic bars with ceramic or coated bearings can reach $600+.</p>
                                    </div>
                                    <div className="bg-cyan-900/50 p-4 rounded-xl">
                                        <p className="font-bold">Bushing Bars: $100-$400</p>
                                        <p className="text-sm text-cyan-200">Basic bushing bars start around $100. Premium power bars with quality bushings typically max out around $400.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Best Use Cases</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-cyan-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Bearings For:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Olympic weightlifting (snatch, clean & jerk)</li>
                                            <li>• CrossFit and functional fitness</li>
                                            <li>• Dynamic barbell movements</li>
                                            <li>• Competitive lifting in Olympic disciplines</li>
                                            <li>• Lifters with wrist mobility issues</li>
                                        </ul>
                                    </div>
                                    <div className="bg-cyan-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Bushings For:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Powerlifting (squat, bench, deadlift)</li>
                                            <li>• Heavy deadlifting and squating</li>
                                            <li>• Slow, controlled movements</li>
                                            <li>• Budget-conscious buyers</li>
                                            <li>• Low-maintenance needs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Maintenance Requirements</h3>
                                <p><strong>Bearings:</strong> Require regular cleaning and lubrication. The more bearings (4-8 per sleeve), the more maintenance is needed. Ceramic bearings generally require less maintenance than steel.</p>
                                <p className="mt-3"><strong>Bushings:</strong> Virtually maintenance-free. Occasional light oil is sufficient. The simple design means less can go wrong over time.</p>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-700 to-cyan-800 text-white p-8 rounded-2xl">
                                <h3 className="text-xl font-bold mb-3">Recommendations by User Type</h3>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-cyan-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Bearing Bar If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Olympic lifting is your primary focus</li>
                                            <li>• You do CrossFit or HIIT workouts</li>
                                            <li>• You want smooth, fast plate changes</li>
                                            <li>• Wrist comfort is a priority</li>
                                            <li>• You're willing to maintain your bar</li>
                                        </ul>
                                    </div>
                                    <div className="bg-cyan-900/50 p-4 rounded-xl">
                                        <p className="font-bold">🏆 Choose Bushing Bar If:</p>
                                        <ul className="text-sm mt-2 space-y-1">
                                            <li>• Powerlifting is your main sport</li>
                                            <li>• You prefer "set it and forget it"</li>
                                            <li>• Budget is a primary concern</li>
                                            <li>• You want maximum durability</li>
                                            <li>• You rarely do Olympic lifts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-2xl mt-8 border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Our Verdict</h3>
                            <p className="text-lg text-gray-700">
                                <strong>Choose a bearing bar</strong> if you perform Olympic lifts, CrossFit, or any dynamic barbell movement. The smooth spin protects your wrists and allows for proper technique execution.
                            </p>
                            <p className="mt-4 text-gray-700">
                                <strong>Choose a bushing bar</strong> if powerlifting is your focus or you want a durable, low-maintenance barbell. Bushings provide the stability needed for heavy max-effort lifts.
                            </p>
                            <p className="mt-4 text-gray-700">
                                <strong>Consider a hybrid</strong> if you do both! Many CrossFit-style bars combine bearings in the center with bushings at the ends for the best of both worlds.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-cyan-200 mb-8">Browse our curated selection by sleeve type</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">🛒 Shop Barbells</a>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Comparisons</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="/compare/olympic-vs-power-bar" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-cyan-700">Olympic vs Power Bar</span>
                                <p className="text-sm text-gray-500">Know the difference</p>
                            </a>
                            <a href="/compare/rogue-vs-eleiko" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-cyan-700">Rogue vs Eleiko</span>
                                <p className="text-sm text-gray-500">Premium brand battle</p>
                            </a>
                            <a href="/guide/bearing-vs-bushing" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <span className="text-lg font-semibold text-cyan-700">Bushing Guide</span>
                                <p className="text-sm text-gray-500">Learn more about sleeve systems</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
