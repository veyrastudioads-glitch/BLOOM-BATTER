export type ProductCategory = 'all' | 'cakes' | 'brownies' | 'cupcakes';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  price: string;
  priceNum: number;
  category: 'cakes' | 'brownies' | 'cupcakes';
  image: string;
  secondaryImage?: string;
  badge?: string;
  servingsOptions: string[];
  flavorNotes: string[];
  ingredients?: string[];
  allergens?: string[];
  isSignature?: boolean;
}

export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  recommendedBakes: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  occasion: string;
  bakePurchased: string;
  rating: number;
  isDemonstration: boolean;
}

export interface CustomCakeEnquiry {
  name: string;
  phone: string;
  occasion: string;
  date: string;
  servings: string;
  flavour: string;
  tier: string;
  designNotes: string;
}

