#!/usr/bin/env node

/**
 * Barbell Scraper - Get product data from various sources
 * Usage: node scripts/scrape.js [--source=amazon|rogue|all]
 */

const https = require('https');
const http = require('http');

// Free alternatives for product data (no API keys needed)

// 1. Unsplash for images (free)
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_KEY'; // Optional

// Mock data for development
const BARBELL_DATA = [
  {
    name: 'Rogue Ohio Bar',
    brand: 'Rogue',
    weight: 20,
    weight_lbs: 45,
    tensile_strength: 190000,
    coating: 'black zinc',
    sleeve_rotation: true,
    price: 295,
    currency: 'USD',
    category: 'olympic',
  },
  {
    name: 'Eleiko Olympic Weightlifting Bar',
    brand: 'Eleiko',
    weight: 20,
    weight_lbs: 45,
    tensile_strength: 215000,
    coating: 'chrome',
    sleeve_rotation: true,
    price: 795,
    currency: 'USD',
    category: 'olympic',
  },
  {
    name: 'CAP Barbell 20kg Bar',
    brand: 'CAP',
    weight: 20,
    weight_lbs: 45,
    tensile_strength: 150000,
    coating: 'chrome',
    sleeve_rotation: true,
    price: 129,
    currency: 'USD',
    category: 'olympic',
  },
  {
    name: 'REP Fitness Power Bar',
    brand: 'REP',
    weight: 20,
    weight_lbs: 45,
    tensile_strength: 205000,
    coating: 'black oxide',
    sleeve_rotation: true,
    price: 349,
    currency: 'USD',
    category: 'powerlifting',
  },
  {
    name: 'Rogue Boneyard Bar',
    brand: 'Rogue',
    weight: 20,
    weight_lbs: 45,
    tensile_strength: 190000,
    coating: 'cerakote',
    sleeve_rotation: true,
    price: 275,
    currency: 'USD',
    category: 'olympic',
  },
  {
    name: "Rogue Women's Training Bar 15kg",
    brand: 'Rogue',
    weight: 15,
    weight_lbs: 33,
    tensile_strength: 160000,
    coating: 'stainless steel',
    sleeve_rotation: true,
    price: 245,
    currency: 'USD',
    category: 'women',
  },
];

function getProductImage(query) {
  // Free placeholder images from Unsplash
  const images = [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
  ];
  
  // Simple hash to pick consistent image
  const index = query.toLowerCase().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % images.length;
  return images[index];
}

function getAffiliateLink(brand, productName) {
  const slug = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const brandSlugs = {
    'Rogue': 'roguefitness',
    'Eleiko': 'eleiko',
    'CAP': 'capbarbell',
    'REP': 'repfitness',
    'Decathlon': 'decathlon',
  };
  
  const baseUrl = brandSlugs[brand] || 'amazon';
  return `https://${baseUrl}.com/${slug}`;
}

function generateBarbells() {
  return BARBELL_DATA.map((barbell, index) => ({
    id: String(index + 1),
    ...barbell,
    slug: `${barbell.brand.toLowerCase()}-${barbell.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    image_url: getProductImage(barbell.name),
    affiliate_url: getAffiliateLink(barbell.brand, barbell.name),
    rating: Number((4 + Math.random() * 0.9).toFixed(1)),
    reviews_count: Math.floor(100 + Math.random() * 3000),
    created_at: new Date().toISOString(),
  }));
}

// Run if called directly
if (require.main === module) {
  console.log('🏋️ Generating barbell data...\n');
  
  const barbells = generateBarbells();
  
  console.log(`Generated ${barbells.length} barbells:\n`);
  
  barbells.forEach(b => {
    console.log(`  • ${b.brand} ${b.name}`);
    console.log(`    Price: $${b.price} | ${b.weight}kg | ${b.tensile_strength.toLocaleString()} PSI`);
    console.log(`    Rating: ${b.rating} ⭐ (${b.reviews_count} reviews)`);
    console.log('');
  });
  
  // Output JSON for easy import
  console.log('📄 JSON Output:');
  console.log(JSON.stringify(barbells, null, 2));
}

module.exports = { generateBarbells, BARBELL_DATA };
