import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell vs Dumbbells | Which is Better for Strength 2026 | BarbellNearMe",
    description: "Barbell vs dumbbells comparison guide. Learn the pros and cons of each to choose the right equipment for your strength training goals.",
};

export default function BarbellVsDumbbells() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell vs Dumbbells</h1>
                        <p className="text-xl text-red-200 mb-8">Choose the Right Equipment for Your Goals</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Both barbells and dumbbells have their place in strength training. Understanding their unique benefits helps you optimize your training.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose a Barbell?</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-red-600 mb-2">Progressive Overload</h3>
                                <p className="text-gray-600">Add small increments of weight easily with barbell plates for continuous strength gains.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-red-600 mb-2">Compound Movements</h3>
                                <p className="text-gray-600">Work multiple muscle groups simultaneously for efficient, functional strength.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-red-600 mb-2">Higher Maximum Load</h3>
                                <p className="text-gray-600">Lift heavier weights safely compared to dumbbells for maximum strength development.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-red-600 mb-2">Symmetric Loading</h3>
                                <p className="text-gray-600">Equal weight distribution prevents muscle imbalances between sides.</p>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">When Dumbbells Excel</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-gray-600 mb-2">Injury Recovery</h3>
                                <p className="text-gray-600">Greater range of motion and unilateral training for rehabilitation.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-gray-600 mb-2">Unilateral Strength</h3>
                                <p className="text-gray-600">Address weak sides and correct muscle imbalances.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-gray-600 mb-2">Home Gym Setup</h3>
                                <p className="text-gray-600">More versatile for apartment gyms with space constraints.</p>
                            </li>
                        </ul>

                        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">The Verdict: Both!</h2>
                            <p className="mb-4">Smart training programs incorporate both barbell and dumbbell exercises for optimal results.</p>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Get Your Barbell</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <a href="/guide/barbell-workouts-home" className="text-red-600 hover:text-red-800 font-medium">Home Barbell Workouts</a>
                            </li>
                            <li>
                                <a href="/guide/best-barbell-exercises" className="text-red-600 hover:text-red-800 font-medium">Best Exercises</a>
                            </li>
                            <li>
                                <a href="/guide/barbell-training-beginners" className="text-red-600 hover:text-red-800 font-medium">Beginner's Guide</a>
                            </li>
                            <li>
                                <a href="/best/barbells-under-200" className="text-red-600 hover:text-red-800 font-medium">Best Budget Barbells</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
