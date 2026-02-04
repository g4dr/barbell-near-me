import type { Metadata } from 'next';
import { Header, Footer, BarbellGrid } from '@/components';
import { getBarbellsByCategory, BARBELL_AFFILIATE_URL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'CrossFit Barbell Guide 2026 - Best Bars for CrossFit Boxes',
  description: 'Complete guide to CrossFit barbells. Find the best versatile bars for CrossFit training, garage gyms, and functional fitness.',
  keywords: 'crossfit barbell guide, best crossfit barbell, rogue ohio bar, crossfit box barbell, versatile barbell',
};

const crossfitBarbells = getBarbellsByCategory('crossfit');

export default function CrossfitBarbellGuidePage() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            CrossFit Barbell Guide
          </h1>
          <p className="text-gray-400 text-lg">Everything you need for CrossFit training</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-400 mb-8">CrossFit barbells need to be versatile for everything from heavy squats to fast snatches.</p>
        <BarbellGrid barbells={crossfitBarbells} columns={3} />
        <div className="text-center mt-8">
          <a href={BARBELL_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="bg-gym-600 hover:bg-gym-700 text-white px-8 py-4 rounded-xl font-semibold">
            Shop CrossFit Barbells →
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
