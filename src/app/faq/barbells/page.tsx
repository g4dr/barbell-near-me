import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: "Barbell FAQ - Your Questions Answered | BarbellNearMe",
    description: "Find answers to frequently asked questions about barbells. Learn about Olympic bars, power bars, choosing the right barbell, and more.",
    keywords: "barbell FAQ, frequently asked questions, barbell buying guide",
};

export default function BarbellFAQPage() {
    const faqs = [
        {
            category: "Getting Started",
            questions: [
                {
                    q: "What is the best barbell for beginners?",
                    a: "The best barbell for beginners is a versatile Olympic-style bar with a 28mm shaft and moderate knurling. Bars in the $200-300 range like the Rogue Ohio Bar or REP PR-4000 offer the best balance of quality and affordability for new lifters."
                },
                {
                    q: "How much does a quality barbell cost?",
                    a: "Quality barbells range from $100 for budget options to $800+ for premium competition bars. Most home gym owners find excellent value in the $200-400 range with bars like the Rogue Ohio Bar ($295) or Eleiko Sport ($445)."
                },
                {
                    q: "What do I need to know before buying my first barbell?",
                    a: "Consider your training goals first. Olympic bars (28mm) work best for dynamic lifts, while power bars (29mm+) suit maximal strength work. Also consider sleeve type (bushings vs bearings), knurling aggressiveness, and your budget."
                }
            ]
        },
        {
            category: "Types of Barbells",
            questions: [
                {
                    q: "What's the difference between Olympic and power bars?",
                    a: "Olympic bars have 28mm shafts, dual knurl marks, and smooth sleeve rotation for weightlifting movements. Power bars have 29mm+ shafts, aggressive single-position knurling, and minimal whip for maximal lifts."
                },
                {
                    q: "What is a hybrid or general purpose barbell?",
                    a: "Hybrid bars blend features from Olympic and power bars—typically 28.5mm shaft, moderate knurling, and hybrid sleeve systems. They're ideal for home gyms where one bar must serve multiple purposes."
                },
                {
                    q: "What are women's barbell specifications?",
                    a: "Women's bars have 25mm shafts (vs 28mm for men), shorter overall length, and weigh 15kg (vs 20kg for men's bars). The sleeve diameter remains 50mm."
                },
                {
                    q: "What is a technique barbell?",
                    a: "Technique bars are lighter (10-15kg), shorter, and often have thinner shafts for teaching proper technique to beginners or for indoor training space."
                }
            ]
        },
        {
            category: "Technical Specifications",
            questions: [
                {
                    q: "What does tensile strength mean for barbells?",
                    a: "Tensile strength measures a bar's resistance to breaking under tension, measured in PSI. Higher tensile strength (190,000+ PSI) indicates a stronger, more durable bar that won't bend easily."
                },
                {
                    q: "What is barbell whip?",
                    a: "Whip refers to the bar's flexibility or bounce during lifting. Olympic bars have more whip for dynamic movements, while power bars have minimal whip for stable heavy lifts."
                },
                {
                    q: "What are the different knurling patterns?",
                    a: "Knurling patterns include: dual marks (Olympic), single mark (power), aggressive (deep pattern for grip), and moderate (balanced grip/comfort). Pattern choice depends on lifting style and personal preference."
                },
                {
                    q: "What is center knurling?",
                    a: "Center knurling is the textured section in the middle of the bar. It provides grip for clean movements but can be uncomfortable for some lifters. Many modern bars offer removable or smoother center knurling."
                }
            ]
        },
        {
            category: "Sleeve Systems",
            questions: [
                {
                    q: "What are bushings in barbell sleeves?",
                    a: "Bushings (brass or bronze) provide friction-based rotation. They're durable, affordable, and ideal for powerlifting where you don't need rapid sleeve spin."
                },
                {
                    q: "What are bearings in barbell sleeves?",
                    a: "Ball bearings provide near-frictionless spin essential for Olympic lifting. They allow the sleeves to rotate smoothly during snatches and cleans but are less durable than bushings."
                },
                {
                    q: "What is a hybrid sleeve system?",
                    a: "Hybrid systems combine bushings and bearings, offering a balance of spin and durability. Popular in CrossFit bars where both Olympic and power movements are performed."
                },
                {
                    q: "How many bearings or bushings do I need?",
                    a: "Olympic bars typically use 4-8 bearings (2-4 per sleeve). Power bars use 2 bushings per sleeve. More components can mean smoother spin but potentially less durability."
                }
            ]
        },
        {
            category: "Brand Comparisons",
            questions: [
                {
                    q: "Rogue vs Eleiko - which should I choose?",
                    a: "Choose Rogue for value and USA-made quality. Choose Eleiko for premium Swedish craftsmanship and competition use. Both are excellent; Rogue offers better value under $400, while Eleiko excels above $500."
                },
                {
                    q: "What are the best barbell brands?",
                    a: "Top brands include Rogue Fitness (USA), Eleiko (Sweden), REP Fitness, CAP Barbell, and Titan Fitness. The 'best' depends on your budget and specific needs."
                },
                {
                    q: "Are expensive barbells worth it?",
                    a: "For most home gym owners, mid-range bars ($200-400) offer excellent value. Premium bars ($500+) provide marginally better performance but aren't necessary unless competing at a high level."
                },
                {
                    q: "What barbell does the pros use?",
                    a: "IPF competitions require IPF-approved bars like Eleiko or Uesaka. Most commercial gyms and competitions use Rogue or Eleiko equipment."
                }
            ]
        },
        {
            category: "Maintenance & Care",
            questions: [
                {
                    q: "How do I maintain my barbell?",
                    a: "Wipe down your bar after each use, especially if you sweat. Occasionally apply a light oil to sleeves if they feel dry. Store bars horizontally on a rack, not on the floor."
                },
                {
                    q: "How often should I replace my barbell?",
                    a: "With proper care, quality barbells last 10+ years. Replace when you notice significant rust, bent shafts, damaged knurling, or worn sleeve bearings."
                },
                {
                    q: "What causes barbell rust?",
                    a: "Rust develops from moisture exposure, sweat, and inadequate cleaning. Chrome finishes resist rust better than black oxide; stainless steel offers the best corrosion resistance."
                },
                {
                    q: "Should I use barbell sleeves on concrete?",
                    a: "Never drop barbells directly on concrete—it damages both the bar and floor. Use bumper plates and drop zones designed for weightlifting."
                }
            ]
        },
        {
            category: "Training & Usage",
            questions: [
                {
                    q: "What plates fit on barbell sleeves?",
                    a: "Standard Olympic barbells use 50mm sleeve diameter, fitting all Olympic plates (including bumper plates). Verify compatibility before purchasing specialty plates."
                },
                {
                    q: "What's the maximum weight a barbell can hold?",
                    a: "Quality bars are rated for 1,000-1,500+ pounds (450-700+ kg). Most home gym owners will never approach these limits with proper programming."
                },
                {
                    q: "Should I use chalk with my barbell?",
                    a: "Chalk improves grip, especially for heavy lifts. However, it can accumulate in knurling over time. Some gyms require liquid chalk for cleanliness."
                },
                {
                    q: "How do I know if my barbell is bent?",
                    a: "Spin the bar slowly while holding it level. Watch for wobbling or uneven rotation. A bent bar won't roll smoothly and can affect form and safety."
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Barbell FAQ</h1>
                        <p className="text-xl text-blue-200 mb-8">Your Questions Answered by Experts</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Quality Barbells</a>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        {faqs.map((category, idx) => (
                            <div key={idx} className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-600">
                                    {category.category}
                                </h2>
                                {category.questions.map((faq, faqIdx) => (
                                    <div key={faqIdx} className="bg-white p-6 rounded-xl mb-4 shadow-sm">
                                        <h3 className="text-lg font-bold text-blue-800 mb-3">
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Barbell?</h2>
                        <p className="text-blue-200 mb-8">Browse our curated selection at unbeatable prices.</p>
                        <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">Shop Now</a>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Guides</h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li>
                                <a href="/guide/how-to-choose-barbell" className="text-blue-600 hover:text-blue-800 font-medium">How to Choose a Barbell</a>
                            </li>
                            <li>
                                <a href="/guide/olympic-barbells" className="text-blue-600 hover:text-blue-800 font-medium">Olympic Barbell Guide</a>
                            </li>
                            <li>
                                <a href="/guide/powerlifting-barbells" className="text-blue-600 hover:text-blue-800 font-medium">Powerlifting Barbell Guide</a>
                            </li>
                            <li>
                                <a href="/guide/crossfit-barbells-guide" className="text-blue-600 hover:text-blue-800 font-medium">CrossFit Barbell Guide</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
