import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell Workouts at Home | Build Strength at Home 2026 | BarbellNearMe",
    description: "Transform your home gym with effective barbell workouts. Complete guide to barbell training at home for maximum strength gains.",
};

export default function BarbellWorkoutsHome() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell Workouts at Home</h1>
                        <p className="text-xl text-blue-200 mb-8">Build Serious Strength in Your Home Gym</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Home Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">A barbell is the ultimate home gym investment. With just a barbell and weights, you can target every muscle group and build incredible strength.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Essential Home Barbell Exercises</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-blue-600 mb-2">Barbell Squats</h3>
                                <p className="text-gray-600">The king of leg exercises for building quadriceps, glutes, and overall lower body strength.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-blue-600 mb-2">Deadlifts</h3>
                                <p className="text-gray-600">Complete posterior chain development including hamstrings, back, and grip strength.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-blue-600 mb-2">Barbell Bench Press</h3>
                                <p className="text-gray-600">Build chest, shoulders, and triceps with the ultimate upper body compound movement.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-blue-600 mb-2">Overhead Press</h3>
                                <p className="text-gray-600">Develop strong shoulders and triceps for functional upper body power.</p>
                            </li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Start Your Home Transformation</h2>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Get Your Barbell</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <a href="/guide/best-barbell-for-basement-gym" className="text-blue-600 hover:text-blue-800 font-medium">Basement Gym Barbells</a>
                            </li>
                            <li>
                                <a href="/guide/how-to-choose-barbell" className="text-blue-600 hover:text-blue-800 font-medium">Choose the Right Barbell</a>
                            </li>
                            <li>
                                <a href="/compare/budget-vs-premium" className="text-blue-600 hover:text-blue-800 font-medium">Budget vs Premium</a>
                            </li>
                            <li>
                                <a href="/best/barbells-under-200" className="text-blue-600 hover:text-blue-800 font-medium">Budget Barbells</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
