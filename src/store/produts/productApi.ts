import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../services/api';
import { Product, GetProductsResponse,  GetProductsProps, Category } from './interface';

const productApi = baseApi
  // .enhanceEndpoints({
  //     addTagTypes: ['Product'],
  // })
  .injectEndpoints({
    endpoints: build => ({
      getProducts: build.query<GetProductsResponse, GetProductsProps>({
        query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      }),
      getProduct: build.query<Product, { id: string }>({
        query: ({ id }) => `/products/${id}`,
      }),
      getCategories: build.query<Category[], void>({
        query: () => '/products/categories',
        transformResponse: (response: string[]) =>
          response.map(category => ({
            id: nanoid(),
            name: category,
          })),
      }),
      getCategoryProducts: build.query<GetProductsResponse, { category: string }>({
        query: ({ category }) => `/products/category/${category}`,
      }),
      searchProducts: build.query<GetProductsResponse, { query: string }>({
        query: ({ query }) => `/products/search?q=${query}`,
      }),
    }),
  });

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetCategoryProductsQuery,
  useSearchProductsQuery,
  useLazySearchProductsQuery,
} = productApi;
