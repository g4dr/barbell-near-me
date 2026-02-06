import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell Training for Beginners | Start Strong 2026 | BarbellNearMe",
    description: "Complete beginner's guide to barbell training. Learn proper form, essential exercises, and how to start building strength safely.",
};

export default function BarbellTrainingBeginners() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell Training for Beginners</h1>
                        <p className="text-xl text-purple-200 mb-8">Start Your Strength Journey the Right Way</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Beginner Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Starting barbell training can seem intimidating, but with the right guidance, anyone can build strength safely and effectively.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Essential Tips for Beginners</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-purple-600 mb-2">Start Light</h3>
                                <p className="text-gray-600">Focus on learning proper form with lighter weights before increasing load.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-purple-600 mb-2">Master the Big Lifts</h3>
                                <p className="text-gray-600">Squat, deadlift, and bench press form should be perfected first.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-purple-600 mb-2">Progressive Overload</h3>
                                <p className="text-gray-600">Gradually increase weight as you get stronger for continuous gains.</p>
                            </li>
                            <li className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl text-purple-600 mb-2">Rest and Recover</h3>
                                <p className="text-gray-600">Allow muscles to recover with proper rest days between sessions.</p>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Beginner Barbell Exercises</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-purple-600 mb-2">Goblet Squats</h3>
                                <p className="text-gray-600">Learn squat mechanics with lighter weight.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-purple-600 mb-2">Romanian Deadlifts</h3>
                                <p className="text-gray-600">Develop hamstring and glute flexibility.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-purple-600 mb-2">Push Press</h3>
                                <p className="text-gray-600">Learn overhead pressing with momentum control.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-purple-600 mb-2">Barbell Rows</h3>
                                <p className="text-gray-600">Build back strength with controlled movement.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Begin Your Journey</h2>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Get Started Today</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Reviews</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <a href="/guide/barbell-workouts-home" className="text-purple-600 hover:text-purple-800 font-medium">Home Workouts</a>
                            </li>
                            <li>
                                <a href="/guide/best-barbell-exercises" className="text-purple-600 hover:text-purple-800 font-medium">Best Exercises</a>
                            </li>
                            <li>
                                <a href="/guide/barbell-buying-mistakes" className="text-purple-600 hover:text-purple-800 font-medium">Avoid Mistakes</a>
                            </li>
                            <li>
                                <a href="/best/barbells-under-200" className="text-purple-600 hover:text-purple-800 font-medium">Budget Options</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews, comparisons, and buying guides for every lifting style.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
