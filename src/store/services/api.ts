import { createApi, fetchBaseQuery, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const BASE_URL = 'https://dummyjson.com';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: build => ({}), // eslint-disable-line @typescript-eslint/no-unused-vars
});