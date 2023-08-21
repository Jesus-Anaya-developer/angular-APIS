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

export interface createProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface updateProductDTO extends Partial<createProductDTO> { }
