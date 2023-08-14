export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}
