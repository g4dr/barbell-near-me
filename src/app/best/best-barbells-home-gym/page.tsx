import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Best Barbells for Home Gym 2026 | BarbellNearMe",
    description: "Discover the best barbells for home gym setups. Our expert guide covers options for every budget and training style, from beginner to advanced lifters.",
};

export default function BestHomeGymPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Best Barbells for Home Gym</h1>
                        <p className="text-xl text-green-200 mb-8">Quality Equipment for Your Home Setup</p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">Building a home gym requires careful consideration of your space, budget, and training goals. The right barbell can serve as the cornerstone of your home gym setup, enabling everything from basic strength training to advanced Olympic lifting exercises.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Choosing the Right Barbell for Your Home Gym</h2>
                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Consider Your Training Goals:</strong> Choose a bar that matches your primary lifting style</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Budget Considerations:</strong> Quality barbells range from $100 to $600+</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Space Requirements:</strong> Standard barbells are 7 feet long, consider shorter options for small spaces</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Weight Capacity:</strong> Ensure the bar can handle your current and future lifting goals</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Durability:</strong> Home gym equipment should last years of regular use</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Top Picks for Home Gyms</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Rogue Ohio Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$225</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Overall</span>
                    <p className="text-gray-600 mt-4">American-made quality at an excellent price point. Versatile enough for all training styles and built to last a lifetime.</p>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">CAP Barbell 20kg Olympic Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$149</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Budget</span>
                    <p className="text-gray-600 mt-4">Excellent entry-level Olympic bar with smooth sleeve rotation and solid construction at an affordable price.</p>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">REP Fitness PR-4000 Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$299</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Mid-Range</span>
                    <p className="text-gray-600 mt-4">Excellent knurl pattern and smooth rotation make this a favorite among home gym enthusiasts.</p>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Titan Fitness T-3 Bar</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">$189</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Best Value</span>
                    <p className="text-gray-600 mt-4">Solid construction with dual knurl marks. Great for lifters who want versatility without breaking the bank.</p>
                    <div className="mt-4">
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="block bg-green-600 text-white text-center py-2 rounded-lg font-bold">View Deal</a>
                    </div>
                </div>

                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Barbell Types for Home Gyms</h2>
                        <div className="bg-white p-8 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4">Olympic Weightlifting Bars</h3>
                            <p className="text-gray-700 mb-4">Olympic bars feature 28mm shafts, dual knurl marks, and smooth rotating sleeves. They're ideal for snatches, clean and jerk, and other dynamic lifting movements. If you're interested in competitive Olympic lifting or CrossFit, this is your best choice.</p>
                            
                            <h3 className="text-xl font-bold mb-4">Powerlifting Bars</h3>
                            <p className="text-gray-700 mb-4">Power bars typically have 29mm shafts with more aggressive knurling and center knurling. They're designed for the squat, bench press, and deadlift. If your focus is on maximal strength, a power bar will serve you well.</p>
                            
                            <h3 className="text-xl font-bold mb-4">General Training Bars</h3>
                            <p className="text-gray-700 mb-4">General training bars offer versatility at a moderate price. They work well for mixed training programs that include both strength and conditioning work. Many home gym owners prefer these for their jack-of-all-trades nature.</p>
                            
                            <h3 className="text-xl font-bold mb-4">Technique Bars</h3>
                            <p className="text-gray-700">For beginners or those with limited space, technique bars (often 15lb or lighter) are excellent for learning proper form. They're also great for indoor training when space is limited.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Essential Exercises for Your Home Gym Barbell</h2>
                        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Barbell Squats:</strong> The king of lower body exercises</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Deadlifts:</strong> Builds posterior chain strength</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Bench Press:</strong> Essential chest development</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Overhead Press:</strong> Builds shoulder strength and stability</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Rows:</strong> Critical for back development and posture</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><strong>Romanian Deadlifts:</strong> Hamstring and glute emphasis</li>
                            </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Key Benefits</h3>
                                <ul className="space-y-2">
                                    <li className="text-green-600">✓ Versatile training options</li>
                                    <li className="text-green-600">✓ Space-efficient</li>
                                    <li className="text-green-600">✓ Long-term investment</li>
                                    <li className="text-green-600">✓ Multiple exercises</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-blue-800 mb-4">Related Guides</h3>
                                <ul className="space-y-2">
                                    <li className="text-blue-600"><Link href="/best/barbells-under-200" className="hover:underline">Best Barbells Under $200</Link></li>
                                    <li className="text-blue-600"><Link href="/best/barbells-crossfit-training" className="hover:underline">Best CrossFit Barbells</Link></li>
                                    <li className="text-blue-600"><Link href="/best/barbells-powerlifting" className="hover:underline">Best Powerlifting Bars</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Shop Quality Home Gym Barbells</h2>
                        <p className="text-green-200 mb-8">Find the perfect barbell for your home gym setup.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">View All Deals</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
