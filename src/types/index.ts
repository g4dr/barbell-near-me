export interface Barbell {
  id: string;
  name: string;
  brand: string;
  slug: string;
  weight: number; // kg
  weight_lbs: number;
  tensile_strength: number; // PSI
  coating: string;
  sleeve_rotation: boolean;
  price: number;
  currency: string;
  image_url: string;
  affiliate_url: string;
  rating: number;
  reviews_count: number;
  category: 'olympic' | 'powerlifting' | 'crossfit' | 'technique' | 'women';
  created_at: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  website: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  state: string;
  country: string;
  slug: string;
  lat: number;
  lng: number;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  phone: string;
  website: string;
  type: 'gym' | 'retail' | 'crossfit';
}

export interface ComparisonResult {
  barbells: Barbell[];
  best_for: string;
  filters_applied: Record<string, any>;
}
