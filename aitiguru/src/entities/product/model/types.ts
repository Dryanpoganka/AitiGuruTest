export interface Product {
  id: number;
  title: string;
  brand: string;
  sku: string;
  rating: number;
  price: number;
  category: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
