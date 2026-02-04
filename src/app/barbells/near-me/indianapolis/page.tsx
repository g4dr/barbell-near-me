import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indianapolis Barbells - Buy Weightlifting Equipment in Indianapolis | BarbellNearMe",
  description: "Find the best barbells and gym equipment in Indianapolis. Browse Olympic bars, powerlifting bars, and fitness gear. Local delivery available. Shop now!",
};

export default function indianapolisPage() {
  const products = [
    { name: "Rogue Olympic Bar", brand: "Rogue", price: "$295", rating: 4.9, features: ["28mm shaft", "20kg"] },
    { name: "Eleiko Weightlifting Bar", brand: "Eleiko", price: "$545", rating: 5.0, features: ["IPF approved"] },
    { name: "Rogue Ohio Power Bar", brand: "Rogue", price: "$345", rating: 4.9, features: ["29mm shaft"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Indianapolis Barbells</h1>
          <p className="text-xl text-purple-200 mb-6">Buy premium weightlifting equipment in Indianapolis. Fast local delivery available.</p>
        </div>
      </section>

      <nav className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <Link href="/" className="text-purple-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/barbells/near-me" className="text-purple-600 hover:underline">Near Me</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Indianapolis</span>
        </div>
      </nav>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">{product.brand}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3">{product.name}</h3>
                <div className="text-yellow-500 mt-1">★ {product.rating}</div>
                <p className="text-gray-600 mt-2">{product.features.join(" • ")}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <a href="https://trugritfitness.pxf.io/Z6PKV1" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold">Buy Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Shop in Indianapolis</h2>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold">View All</a>
        </div>
      </section>
    </div>
  );
}