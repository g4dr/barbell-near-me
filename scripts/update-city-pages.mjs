#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const CITY_PAGES_DIR = '/root/clawd/barbell-near-me/src/app/barbells/near-me';

// Related articles section template
const RELATED_SECTION = `
      {/* Related Articles */}
      <section className="py-8 bg-iron-800">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-white">Related Articles</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/guide/how-to-choose-barbell" className="text-gym-400 hover:underline">
              How to Choose the Right Barbell
            </Link>
            <Link href="/best/best-olympic-barbell" className="text-gym-400 hover:underline">
              Best Olympic Barbells 2026
            </Link>
          </div>
        </div>
      </section>
`;

// City-specific links template
function getCitySpecificSection(cityName, slug) {
  const cityNameDisplay = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  return `
      <section className="py-8 bg-iron-900">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-white">${cityNameDisplay} Resources</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/guide/barbell-buying-guide" className="text-gym-400 hover:underline">
              Complete Barbell Buying Guide
            </Link>
            <Link href="/barbells/best" className="text-gym-400 hover:underline">
              Best Barbells 2026
            </Link>
          </div>
        </div>
      </section>
`;
}

async function updateCityPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const citySlug = path.basename(path.dirname(filePath));
  const cityName = citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Check if page already has Link import
  const hasLinkImport = content.includes("import Link from 'next/link'");

  // Add Link import if missing
  if (!hasLinkImport) {
    content = content.replace(
      /(import.*\nimport.*Footer.*\n)/,
      `$1import Link from 'next/link';\n`
    );
  }

  // Check if Related Articles section already exists
  if (content.includes('Related Articles')) {
    console.log(`  ⏭️  Skipping ${citySlug} - already has related articles`);
    return { updated: false, skipped: true };
  }

  // Find the Footer component and add section before it
  const footerPattern = /(<Footer \/>\s*<\/main>\s*<\/)/;
  const relatedSection = citySlug === 'page' ? '' : getCitySpecificSection(cityName, citySlug);

  if (footerPattern.test(content)) {
    content = content.replace(
      footerPattern,
      `${RELATED_SECTION}\n${relatedSection}$1`
    );

    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Updated ${citySlug}`);
    return { updated: true, skipped: false };
  } else {
    // Try alternate pattern for different page structures
    const alternatePattern = /(<\/main>\s*<Footer \/>)/;
    if (alternatePattern.test(content)) {
      content = content.replace(
        alternatePattern,
        `${RELATED_SECTION}\n${relatedSection}$1`
      );

      fs.writeFileSync(filePath, content);
      console.log(`  ✅ Updated ${citySlug} (alternate pattern)`);
      return { updated: true, skipped: false };
    }
    console.log(`  ⚠️  Could not find insertion point in ${citySlug}`);
    return { updated: false, skipped: true };
  }
}

async function main() {
  console.log('🚀 Starting city page updates...\n');

  const files = fs.readdirSync(CITY_PAGES_DIR);
  let totalUpdated = 0;
  let totalSkipped = 0;

  for (const file of files) {
    const filePath = path.join(CITY_PAGES_DIR, file, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
      console.log(`Processing: ${file}`);
      const result = await updateCityPage(filePath);
      if (result.updated) totalUpdated++;
      if (result.skipped && !result.updated) totalSkipped++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${totalUpdated}`);
  console.log(`   Skipped: ${totalSkipped}`);
  console.log(`   Total: ${totalUpdated + totalSkipped}`);
}

main().catch(console.error);
