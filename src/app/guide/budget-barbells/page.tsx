import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS, BARBELL_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Best Barbells Under $300 - Budget Barbell Guide 2026',
  description: 'Find quality barbells under $300. Our expert guide covers the best budget-friendly options for home gyms.',
  keywords: 'best barbell under 300, budget barbell guide, affordable barbell, cheap barbell, garage gym barbell',
};

const budgetBarbells = MOCK_BARBELLS.filter(b => b.price <= 300);

export default function BudgetBarbellGuidePage() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-green-900/50 via-iron-900 to-iron-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Best Barbells Under $300
          </h1>
          <p className="text-gray-400 text-lg">Quality without breaking the bank</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-400 mb-8">You don't need to spend a fortune for quality. These barbells offer excellent value for home gyms.</p>
        <BarbellGrid barbells={budgetBarbells} columns={3} />
        <div className="text-center mt-8">
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold">
            Shop Budget Barbells →
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
