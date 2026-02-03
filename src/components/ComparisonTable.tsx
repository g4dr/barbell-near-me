'use client';

interface ComparisonTableProps {
  barbells: any[];
  features: string[];
}

export function ComparisonTable({ barbells, features }: ComparisonTableProps) {
  const getValue = (barbell: any, feature: string) => {
    switch (feature) {
      case 'price':
        return `$${barbell.price}`;
      case 'weight':
        return `${barbell.weight}kg (${barbell.weight_lbs}lbs)`;
      case 'tensile':
        return `${barbell.tensile_strength.toLocaleString()} PSI`;
      case 'coating':
        return barbell.coating;
      case 'sleeves':
        return barbell.sleeve_rotation ? '✅ Yes' : '❌ No';
      case 'rating':
        return `${barbell.rating} ⭐`;
      case 'reviews':
        return barbell.reviews_count.toLocaleString();
      default:
        return barbell[feature] || '-';
    }
  };

  const featureLabels: Record<string, string> = {
    price: 'Price',
    weight: 'Weight',
    tensile: 'Tensile Strength',
    coating: 'Coating',
    sleeves: 'Rotating Sleeves',
    rating: 'Rating',
    reviews: 'Reviews',
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-iron-800">
            <th className="p-4 text-left text-white font-semibold">Feature</th>
            {barbells.map((barbell) => (
              <th key={barbell.id} className="p-4 text-center">
                <div className="space-y-2">
                  <img
                    src={barbell.image_url}
                    alt={barbell.name}
                    className="w-20 h-20 object-cover rounded-lg mx-auto"
                  />
                  <p className="text-white font-semibold text-sm">{barbell.brand}</p>
                  <p className="text-gray-400 text-xs">{barbell.name}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature} className={index % 2 === 0 ? 'bg-iron-800/50' : 'bg-transparent'}>
              <td className="p-4 text-gray-300 font-medium">{featureLabels[feature] || feature}</td>
              {barbells.map((barbell) => (
                <td key={barbell.id} className="p-4 text-center text-white">
                  {getValue(barbell, feature)}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-iron-800/50">
            <td className="p-4"></td>
            {barbells.map((barbell) => (
              <td key={barbell.id} className="p-4 text-center">
                <a
                  href={barbell.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gym-600 hover:bg-gym-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Buy for ${barbell.price}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

interface FeatureComparisonProps {
  title: string;
  subtitle?: string;
  barbells: any[];
  features?: string[];
}

export function FeatureComparison({ title, subtitle, barbells, features = ['price', 'weight', 'tensile', 'coating', 'sleeves'] }: FeatureComparisonProps) {
  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-white">{title}</h2>
        {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
      </div>
      <ComparisonTable barbells={barbells} features={features} />
    </section>
  );
}
