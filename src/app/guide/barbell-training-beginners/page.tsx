import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell Training for Beginners | Start Lifting Safely | BarbellNearMe",
    description: "New to barbell training? Learn the fundamentals of barbell workouts, proper form, safety tips, and effective programming to build strength from scratch...",
};

export default function BarbellTrainingBeginners() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell Training for Beginners</h1>
                        <p className="text-xl text-green-200 mb-8">Your Complete Guide to Starting Strength Training</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Start Your Fitness Journey</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Starting barbell training can seem intimidating, but with the right guidance, anyone can learn to lift safely and effectively. This comprehensive guide covers everything beginners need to know to begin their strength training journey with confidence.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Start with Barbell Training?</h2>
                        
                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Efficiency</h3>
                            <p className="text-gray-600">Barbell exercises work multiple muscle groups simultaneously, making your workouts more time-efficient. A single barbell session can train your entire body effectively.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Progressive Overload</h3>
                            <p className="text-gray-600">Barbells allow for precise weight adjustments, making it easy to progressively increase load as you get stronger. This is essential for continuous muscle and strength gains.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Functional Strength</h3>
                            <p className="text-gray-600">Barbell training develops real-world strength that translates to everyday activities. The compound movements mimic natural movement patterns and build practical fitness.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Bone Density</h3>
                            <p className="text-gray-600">Resistance training with barbells helps increase bone density, reducing the risk of osteoporosis and improving long-term skeletal health.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-16">
                    <div className="max-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Beginner Exercises</h2>
                        
                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">1. Goblet Squat</h3>
                            <p className="text-gray-600 mb-4">Before progressing to barbell squats, master the goblet squat to learn proper squat mechanics. Hold a kettlebell or dumbbell at your chest, squat down, then stand back up.</p>
                            <p className="text-gray-700 font-medium">Reps: 10-12 | Sets: 3</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">2. Dumbbell Bench Press</h3>
                            <p className="text-gray-600 mb-4">Learn pressing mechanics with dumbbells before adding a barbell. This allows you to correct any strength imbalances and develop stability.</p>
                            <p className="text-gray-700 font-medium">Reps: 10-12 | Sets: 3</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">3. Bodyweight Hip Hinge</h3>
                            <p className="text-gray-600 mb-4">Master the hip hinge movement pattern before adding deadlifts. Stand with feet hip-width apart, push your hips back while maintaining a flat back, and return to standing.</p>
                            <p className="text-gray-700 font-medium">Reps: 10-15 | Sets: 3</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">4. Deadlift (Start Light!)</h3>
                            <p className="text-gray-600 mb-4">Once you've mastered the hip hinge, progress to the deadlift with an empty barbell (45 lbs). Focus on form over weight from the beginning.</p>
                            <p className="text-gray-700 font-medium">Reps: 5-8 | Sets: 3</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">5. Barbell Squat (with Safety Rack)</h3>
                            <p className="text-gray-600 mb-4">Progress to the barbell squat only after mastering bodyweight squats and goblet squats. Always use a squat rack with safety bars for protection.</p>
                            <p className="text-gray-700 font-medium">Reps: 8-10 | Sets: 3</p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Safety Tips for Beginner Lifters</h2>
                        
                        <div className="bg-gradient-to-r from-red-100 to-red-50 p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Safety First</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• <strong>Always use safety equipment:</strong> Squat racks, safety bars, and collars are essential</li>
                                <li>• <strong>Start light:</strong> Focus on mastering form before adding weight</li>
                                <li>• <strong>Never skip the warm-up:</strong> 5-10 minutes of light cardio and dynamic stretching</li>
                                <li>• <strong>Have a spotter:</strong> For bench press and heavy lifts when possible</li>
                                <li>• <strong>Know your limits:</strong> It's okay to fail a rep; learn to safely dump the barbell</li>
                                <li>• <strong>Listen to your body:</strong> Sharp pain means stop; muscle fatigue is normal</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Beginner Training Program</h2>
                        
                        <div className="bg-white p-8 rounded-2xl mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3">Starting Strength Routine (3 Days/Week)</h3>
                            <p className="text-gray-600 mb-4"><strong>Structure:</strong> Alternate between Workout A and Workout B</p>
                            
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <p className="font-bold text-gray-800">Workout A:</p>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Barbell Squat: 3 x 8</li>
                                        <li>• Bench Press: 3 x 8</li>
                                        <li>• Barbell Row: 3 x 8</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">Workout B:</p>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Deadlift: 3 x 5</li>
                                        <li>• Overhead Press: 3 x 8</li>
                                        <li>• Pull-Ups or Chin-Ups: 3 x Max</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 mt-4">Rest 2-3 minutes between sets. Aim to add weight to the bar each session when you can complete all prescribed reps with good form.</p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-2xl mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Get Your First Barbell</h2>
                            <p className="mb-6">Quality equipment makes learning easier and safer.</p>
                            <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Beginner Barbells</a>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides & Resources</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <Link href="/guide/barbell-beginners-guide" className="text-green-600 hover:text-green-800 font-medium">Complete Barbell Guide</Link>
                            </li>
                            <li>
                                <Link href="/guide/how-to-choose-barbell" className="text-green-600 hover:text-green-800 font-medium">Choosing Your First Barbell</Link>
                            </li>
                            <li>
                                <Link href="/guide/barbell-safety-guide" className="text-green-600 hover:text-green-800 font-medium">Barbell Safety Guide</Link>
                            </li>
                            <li>
                                <Link href="/best/barbells-under-200" className="text-green-600 hover:text-green-800 font-medium">Best Beginner Barbells</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="bg-gray-900 py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Start Your Strength Journey Today</h2>
                        <p className="text-gray-400 mb-8">The best time to start lifting is now. Find the perfect beginner barbell for your goals.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition">Browse All Barbells</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
