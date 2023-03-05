export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  export interface GetProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limite: number;
  }
  
  export interface GetProductsProps {
    limite: number;
    skip: number;
  
  }

  export interface GetProductProps {
    id: string;
  }
  
  export interface Category {
    id: string;
    name: string;
  }
  