import { createClient } from '@supabase/supabase-js';

// Free tier Supabase keys - replace with your own
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for reference
export type Tables = {
  barbells: {
    id: string;
    name: string;
    brand: string;
    slug: string;
    weight: number;
    weight_lbs: number;
    tensile_strength: number;
    coating: string;
    sleeve_rotation: boolean;
    price: number;
    currency: string;
    image_url: string;
    affiliate_url: string;
    rating: number;
    reviews_count: number;
    category: string;
    created_at: string;
  };
  brands: {
    id: string;
    name: string;
    slug: string;
    logo_url: string;
    website: string;
    description: string;
  };
  cities: {
    id: string;
    name: string;
    state: string;
    country: string;
    slug: string;
    lat: number;
    lng: number;
  };
};
