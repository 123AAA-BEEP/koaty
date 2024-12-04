export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  features?: string[];
  price?: {
    min: number;
    max: number;
    unit: string;
  };
} 