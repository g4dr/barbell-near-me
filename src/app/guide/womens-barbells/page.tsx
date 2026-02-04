import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { getBarbellsByCategory, BARBELL_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: "Women's Barbell Guide 2026 - Best Bars for Female Athletes",
  description: "Complete guide to women's barbells. Find the perfect 15kg barbell designed for female athletes.",
  keywords: "women's barbell guide, 15kg barbell, female barbell, women's olympic bar, barbell for women",
};

const womenBarbells = getBarbellsByCategory('women');

export default function WomensBarbellGuidePage() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-purple-900/50 via-iron-900 to-iron-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Women's Barbell Guide
          </h1>
          <p className="text-gray-400 text-lg">Designed for female athletes</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-400 mb-8">Women's barbells are specifically designed with 15kg weight, thinner shafts, and lower knurl for smaller hands.</p>
        <BarbellGrid barbells={womenBarbells} columns={3} />
        <div className="text-center mt-8">
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">
            Shop Women's Barbells →
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
