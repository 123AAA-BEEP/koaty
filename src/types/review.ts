export interface Review {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  images?: string[];
  response?: {
    author: string;
    content: string;
    date: string;
  };
} 