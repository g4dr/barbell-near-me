import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbell Workouts at Home | 2026 Home Gym Guide | BarbellNearMe",
    description: "Transform your home gym with these effective barbell workouts. From compound lifts to targeted exercises, build serious strength at home with minimal equipment...",
};

export default function HomeBarbellWorkouts() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbell Workouts at Home</h1>
                        <p className="text-xl text-green-200 mb-8">Build Serious Strength in Your Home Gym</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Home Gym Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">A barbell is the ultimate home gym investment, allowing you to perform every major compound movement with just one piece of equipment. Whether you're building a complete home gym or outfitting a small garage space, a quality barbell enables endless workout possibilities.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Home Barbell Exercises</h2>
                        
                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Barbell Squat</h3>
                            <p className="text-gray-600 mb-4">The king of leg exercises, the barbell squat targets your quadriceps, hamstrings, glutes, and core. Position the barbell on your upper back, descend until your thighs parallel the floor, and drive through your heels to stand.</p>
                            <p className="text-gray-700 font-medium">Muscles Worked: Quadriceps, Hamstrings, Glutes, Core</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Deadlift</h3>
                            <p className="text-gray-600 mb-4">The ultimate posterior chain builder, deadlifts strengthen your entire back, legs, and grip. Keep the bar close to your body, engage your lats, and drive through your heels while keeping your spine neutral.</p>
                            <p className="text-gray-700 font-medium">Muscles Worked: Back, Hamstrings, Glutes, Forearms, Traps</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Barbell Bench Press</h3>
                            <p className="text-gray-600 mb-4">Build a powerful chest with the barbell bench press. Lower the bar to your mid-chest, press upward in a slight arc, and lock out your elbows at the top. This exercise is essential for upper body strength.</p>
                            <p className="text-gray-700 font-medium">Muscles Worked: Chest, Shoulders, Triceps</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Overhead Press</h3>
                            <p className="text-gray-600 mb-4">Develop strong shoulders and triceps with the standing overhead press. Press the barbell directly overhead, fully extending your arms while keeping your core tight for stability.</p>
                            <p className="text-gray-700 font-medium">Muscles Worked: Shoulders, Triceps, Upper Chest, Core</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Barbell Row</h3>
                            <p className="text-gray-600 mb-4">Build a thick, strong back with bent-over barbell rows. Hinge at your hips, pull the barbell to your lower chest, and squeeze your shoulder blades together at the top of each rep.</p>
                            <p className="text-gray-700 font-medium">Muscles Worked: Back, Lats, Rhomboids, Biceps</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sample Home Barbell Workout Programs</h2>
                        
                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Beginner Home Workout (3 Days/Week)</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Barbell Squat: 3 sets x 8-10 reps</li>
                                <li>• Bench Press: 3 sets x 8-10 reps</li>
                                <li>• Barbell Row: 3 sets x 8-10 reps</li>
                                <li>• Overhead Press: 2 sets x 10-12 reps</li>
                                <li>• Romanian Deadlift: 2 sets x 12 reps</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Intermediate Home Training (4 Days/Week)</h3>
                            <p className="text-gray-600 mb-4"><strong>Day 1 - Lower Body A:</strong> Squat, Romanian Deadlift, Calf Raises</p>
                            <p className="text-gray-600 mb-4"><strong>Day 2 - Upper Body A:</strong> Bench Press, Barbell Row, Overhead Press, Bicep Curls</p>
                            <p className="text-gray-600 mb-4"><strong>Day 3 - Lower Body B:</strong> Deadlift, Front Squat, Lunges</p>
                            <p className="text-gray-600"><strong>Day 4 - Upper Body B:</strong> Incline Bench Press, Pull-Ups, Dips, Tricep Extensions</p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Essential Home Gym Equipment</h2>
                            <p className="mb-6">Build your home gym with quality equipment that lasts.</p>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Resources</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <Link href="/guide/barbell-beginners-guide" className="text-green-600 hover:text-green-800 font-medium">Barbell Guide for Beginners</Link>
                            </li>
                            <li>
                                <Link href="/guide/best-barbell-garage-gym" className="text-green-600 hover:text-green-800 font-medium">Best Barbells for Garage Gym</Link>
                            </li>
                            <li>
                                <Link href="/guide/best-barbell-basement-gym" className="text-green-600 hover:text-green-800 font-medium">Basement Gym Barbell Guide</Link>
                            </li>
                            <li>
                                <Link href="/best/barbells-under-300" className="text-green-600 hover:text-green-800 font-medium">Best Budget Barbells</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Home Gym Barbell</h2>
                        <p className="text-gray-400 mb-8">Expert reviews and comparisons to help you choose the right barbell for your home gym.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
