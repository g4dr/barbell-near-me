import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Budget Barbells - Quality Bars Under 200 | BarbellNearMe",
  description: "Find the best affordable barbells under 200 dollars. CAP, Sunny Health, and more. Quality entry level bars for home gyms without breaking the bank.",
};

export default function BudgetBarbellsPage() {
  const products = [
    {
      name: 'CAP Barbell Olympic Bar',
      brand: 'CAP',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80',
      rating: 4.5,
      reviews: 2156,
      features: ['28mm shaft', 'Bronze bushings', 'Chrome finish', 'Best seller'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Sunny Health Pro Bar',
      brand: 'Sunny',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80',
      rating: 4.3,
      reviews: 987,
      features: ['28mm shaft', 'Budget friendly', 'Basic bearings', 'Good starter'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Yosh Pro Olympic Bar',
      brand: 'Yosh',
      price: '$179',
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80',
      rating: 4.6,
      reviews: 456,
      features: ['28mm shaft', 'Zinc finish', 'Dual knurl', 'Solid value'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Fitness Gear Pro Bar',
      brand: 'Fitness Gear',
      price: '$159',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
      rating: 4.4,
      reviews: 678,
      features: ['28mm shaft', 'Multi-purpose', 'Durable', 'Budget option'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'CAP 2" Olympic Bar',
      brand: 'CAP',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
      rating: 4.4,
      reviews: 543,
      features: ['28mm shaft', '2 inch sleeves', 'Solid grip', 'Heavy duty'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    },
    {
      name: 'Titan Fitness Bar',
      brand: 'Titan',
      price: '$139',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80',
      rating: 4.2,
      reviews: 876,
      features: ['28mm shaft', 'Entry level', 'Basic quality', 'Cheapest option'],
      affiliate: 'https://trugritfitness.pxf.io/Z6PKV1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Budget Barbells</h1>
          <p className="text-xl text-green-200 mb-6">Quality does not have to cost a fortune. Entry level and budget barbells under 200 dollars that get the job done for home gyms.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-green-600 px-3 py-1 rounded-full">Under 200</span>
            <span className="bg-green-600 px-3 py-1 rounded-full">Beginner Friendly</span>
            <span className="bg-green-600 px-3 py-1 rounded-full">Home Gym Ready</span>
            <span className="bg-green-600 px-3 py-1 rounded-full">Solid Value</span>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/barbells" className="text-purple-600 hover:underline">Barbells</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Budget</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Best Budget Bars Under 200</h2>
            <select className="border rounded-lg px-4 py-2">
              <option>Sort by: Price Low to High</option>
              <option>Sort by: Best Rated</option>
              <option>Sort by: Most Reviews</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">{product.brand}</div>
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">Budget Pick</div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{feature}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <a href={product.affiliate} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">View Deal</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect Under 200</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-3">What You Get</h3>
              <ul className="text-gray-600 space-y-2">
                <li>28mm standard shaft</li>
                <li>Bronze or basic bushings</li>
                <li>Decent knurl not aggressive</li>
                <li>Good for learning technique</li>
                <li>500-1000 lbs capacity</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Trade-offs</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Lower steel quality</li>
                <li>Less precise tolerances</li>
                <li>Basic finish may rust</li>
                <li>Not for competition</li>
                <li>Heavier feel</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Best For</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Beginners starting out</li>
                <li>Home gyms on a budget</li>
                <li>Garage gym setups</li>
                <li>Learning proper form</li>
                <li>Light to moderate training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Strong, Save Smart</h2>
          <p className="text-green-100 mb-6">You do not need to spend a fortune to get a solid bar. These budget options deliver real value.</p>
          <div className="flex justify-center gap-4">
            <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Shop Budget Bars</a>
            <Link href="/guide/budget-barbells" className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors">Read Our Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
