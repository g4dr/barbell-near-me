import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell Exercises for Maximum Muscle Growth 2026 | BarbellNearMe",
    description: "Discover the most effective barbell exercises to build muscle and strength. Expert guide to barbell training for all fitness levels.",
};

export default function BestBarbellExercises() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell Exercises</h1>
                        <p className="text-xl text-green-200 mb-8">Build Muscle and Strength Effectively</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Quality Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Barbell exercises are the foundation of strength training. These compound movements work multiple muscle groups simultaneously for maximum muscle growth.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Barbell Exercises by Muscle Group</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-green-600 mb-2">Barbell Squats</h3>
                                <p className="text-gray-600">Target your quadriceps, glutes, and hamstrings. The ultimate lower body builder.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-green-600 mb-2">Conventional Deadlifts</h3>
                                <p className="text-gray-600">Develop your entire posterior chain including back, glutes, and grip strength.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-green-600 mb-2">Barbell Bench Press</h3>
                                <p className="text-gray-600">Build chest mass, triceps strength, and shoulder stability.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-green-600 mb-2">Barbell Rows</h3>
                                <p className="text-gray-600">Develop a strong back, improved posture, and balanced physique.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-green-600 mb-2">Overhead Press</h3>
                                <p className="text-gray-600">Build powerful shoulders and triceps for functional upper body strength.</p>
                            </li>
                        </ul>

                        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Train Like the Pros</h2>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Get Your Barbell</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <a href="/guide/barbell-training-beginners" className="text-green-600 hover:text-green-800 font-medium">Beginner's Guide</a>
                            </li>
                            <li>
                                <a href="/guide/olympic-barbell-guide" className="text-green-600 hover:text-green-800 font-medium">Olympic Barbell Guide</a>
                            </li>
                            <li>
                                <a href="/best/barbells-under-150" className="text-green-600 hover:text-green-800 font-medium">Best Under $150</a>
                            </li>
                            <li>
                                <a href="/compare/budget-vs-premium" className="text-green-600 hover:text-green-800 font-medium">Value Comparison</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
