export interface City {
  id: number | string;
  name: string;
  slug: string;
  region: string;
  isMainCity: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
} 