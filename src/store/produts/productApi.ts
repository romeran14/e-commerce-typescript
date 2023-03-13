import { nanoid } from '@reduxjs/toolkit';
import { baseApi } from '../services/api';
import { Product, GetProductProps,  GetProductsProps, Category } from './interface';
import { collection, query, limit as limitador, getDocs, startAt, orderBy, where } from 'firebase/firestore/lite';
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

            return {
              data: {
                products, 
                total,
                limit
              }
            }
           
          } catch (error: any) {
            console.error(error.message);
            return { error: error.message };
          }
        },
      
      }),
     

     
      getProduct: build.query<any, GetProductProps>({
     
          async queryFn({id}) {
            try {
        
              const refId = collection(FirebaseDB, 'products')
              const qId = query(refId, where("id", "==",Number(id)))
              const querySnapshotId = await getDocs(qId)
              
              let productArray: Product[] = []; 
              querySnapshotId.docs.map( doc => {
                productArray.push({ id: doc.id, ...doc.data() } as Product);
              } )
             const product =productArray[0]
              return {
                data: {
                   product
                }
              }
             
            } catch (error: any) {
              console.error(error.message);
              return { error: error.message };
            }
          }
      }),
      
       /*
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
  useGetProductQuery
} = productApi;
