import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Olympic Barbell Guide | Competition Barbells 2026 | BarbellNearMe",
    description: "Complete guide to Olympic barbells for serious lifters. Learn about competition standards, knurling patterns, and finding the right Olympic barbell.",
};

export default function OlympicBarbellGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-yellow-900 to-yellow-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olympic Barbell Guide</h1>
                        <p className="text-xl text-yellow-200 mb-8">The Standard for Competitive Lifting</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Olympic Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Olympic barbells are specifically designed for competitive lifting, featuring precise specifications for IWF and IPF competitions.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Olympic Barbell Specifications</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-yellow-600 mb-2">Barbell Length</h3>
                                <p className="text-gray-600">Standard Olympic barbell is 2.2 meters (7.2 feet) with 50mm sleeve length.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-yellow-600 mb-2">Barbell Weight</h3>
                                <p className="text-gray-600">Competition barbells weigh 20kg (44 lbs) for men and 15kg (33 lbs) for women.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-yellow-600 mb-2">Knurling Pattern</h3>
                                <p className="text-gray-600">Medium aggressive knurling provides secure grip without being too harsh on hands.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-yellow-600 mb-2">Shaft Diameter</h3>
                                <p className="text-gray-600">28mm for men, 25mm for women - optimized for grip and whip balance.</p>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Olympic Barbell Uses</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-yellow-600 mb-2">Weightlifting</h3>
                                <p className="text-gray-600">Snatch and clean & jerk movements require Olympic barbell specifications.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-yellow-600 mb-2">Powerlifting</h3>
                                <p className="text-gray-600">Deadlifts, squats, and bench press with heavy loads.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-yellow-600 mb-2">CrossFit</h3>
                                <p className="text-gray-600">Versatile barbell for varied, high-intensity workouts.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-yellow-600 mb-2">General Strength</h3>
                                <p className="text-gray-600">Build explosive strength with quality Olympic barbell training.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Lift Like a Champion</h2>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Get Your Olympic Bar</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <a href="/guide/crossfit-barbells-guide" className="text-yellow-600 hover:text-yellow-800 font-medium">CrossFit Barbell Guide</a>
                            </li>
                            <li>
                                <a href="/guide/best-barbell-exercises" className="text-yellow-600 hover:text-yellow-800 font-medium">Best Exercises</a>
                            </li>
                            <li>
                                <a href="/reviews/eleiko-barbell" className="text-yellow-600 hover:text-yellow-800 font-medium">Eleiko Review</a>
                            </li>
                            <li>
                                <a href="/compare/budget-vs-premium" className="text-yellow-600 hover:text-yellow-800 font-medium">Premium Comparison</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
