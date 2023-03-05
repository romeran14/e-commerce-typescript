import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../services/api';
import { Product, GetProductsResponse,  GetProductsProps, Category } from './interface';
import { collection, query, limit as limitador, getDocs, startAt, orderBy } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { getCount } from 'firebase/firestore/lite';

const productApi = baseApi
  // .enhanceEndpoints({
  //     addTagTypes: ['Product'],
  // })
  .injectEndpoints({
    endpoints: build => ({
      getProducts: build.query<any, GetProductsProps>({
        async queryFn({limite, skip}) {
          try {
            const limit:number = limite
           const ref = collection(FirebaseDB, 'products')
           const q = query( ref ,orderBy('id'), limitador(limit),startAt(skip+1))
           const querySnapshot = await getDocs(q)
           const queryTotal = await getCount(ref);
           const total = queryTotal.data().count
           
            let products: Product[] = []; 
            querySnapshot.docs.map( doc => {
              products.push({ id: doc.id, ...doc.data() } as Product);
            } )
           // console.log(responseArray)
            return {
              data: {
                products, 
                total,
                limit
              }
            }
/* 
            
            querySnapshot?.forEach((doc:any) => {
              scoresTables.push({ id: doc.id, ...doc.data() } as Product);
            });*/
           
          } catch (error: any) {
            console.error(error.message);
            return { error: error.message };
          }
        },
      
      }),
     

      /*
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
    */}),
  });

export const {
  useGetProductsQuery,

} = productApi;
