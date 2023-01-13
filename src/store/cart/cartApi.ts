import { baseApi } from '../services/api';
import { FetchCartResponse, FetchCartBody} from './interface';

const productApi = baseApi.injectEndpoints({
  endpoints: build => ({
    addCart: build.mutation<FetchCartResponse, FetchCartBody>({
      query: cart => ({
        url: '/carts/add',
        method: 'POST',
        body: cart,
      }),
    }),
    getCart: build.query<FetchCartResponse, void>({
      query: () => ({
        url: '/carts/21',
        method: 'GET',
      }),
    }),
    updateCart: build.mutation<FetchCartResponse, FetchCartBody>({
      query: cart => ({
        url: '/carts/21',
        method: 'PUT',
        body: cart,
      }),
    }),
    deleteCart: build.mutation<FetchCartResponse, void>({
      query: () => ({
        url: '/carts/21',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useAddCartMutation, useGetCartQuery } = productApi;