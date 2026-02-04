import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell FAQ | BarbellNearMe",
    description: "Expert answers to common barbell questions.",
};

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell FAQ - Common Questions Answered</h1>
                        <p className="text-xl text-indigo-200">Common Questions Answered</p>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 rounded-2xl">
                            
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">What weight barbell should I start with?</h3>
                    <p className="text-gray-600">Most beginners should start with a 20kg (45lbs) men's bar. Women and smaller individuals may prefer 15kg (33lbs) women's bars.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">How long do barbells last?</h3>
                    <p className="text-gray-600">Quality barbells can last 10-20+ years with proper care. Budget bars may need replacement every 5-10 years.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">What's the difference between bearing and bushing bars?</h3>
                    <p className="text-gray-600">Bearings provide smoother spin for Olympic lifts. Bushings offer durability and are better for powerlifting.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Should I get an Olympic or power bar?</h3>
                    <p className="text-gray-600">Choose Olympic for weightlifting/CrossFit. Choose power bar for squats, bench, and deadlifts at heavy weights.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">What's IPF approval mean?</h3>
                    <p className="text-gray-600">IPF approval means the bar meets competition standards for powerlifting including knurl pattern, tensile strength, and dimensions.</p>
                </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
