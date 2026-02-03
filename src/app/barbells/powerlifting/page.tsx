'use client';

import { Header, Footer, BarbellGrid } from '@/components';
import { MOCK_BARBELLS } from '@/lib/data';

const powerBarbells = MOCK_BARBELLS.filter(b => b.category === 'powerlifting');

export default function PowerliftingPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💪</span>
            <span>Maximum Strength</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Powerlifting Barbells
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bars designed for the big three: squat, bench press, and deadlift. 29mm shafts, 200K+ PSI steel.
          </p>
        </div>
      </div>

      {/* Specs */}
      <div className="bg-iron-800 border-y border-iron-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-white">20kg</p>
              <p className="text-gray-400 text-sm">Standard Weight</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">29mm</p>
              <p className="text-gray-400 text-sm">Shaft Diameter</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-400">200K+</p>
              <p className="text-gray-400 text-sm">PSI Steel</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">90lb</p>
              <p className="text-gray-400 text-sm">Max Load</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">IPF</p>
              <p className="text-gray-400 text-sm">Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BarbellGrid barbells={powerBarbells} columns={4} />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Go Heavy?
          </h2>
          <p className="text-white/80 mb-8">
            Shop power bars at TruGrit Fitness for your strength training.
          </p>
          <a href="https://trugritfitness.pxf.io/Z6PKV1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Shop Power Bars</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
