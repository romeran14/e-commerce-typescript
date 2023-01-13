import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Product, Category } from './interface';

interface ProductState {
  products: Product[];
  product: Product | null;
  categories: Category[];
}

const initialState: ProductState = {
  products: [],
  product: null,
  categories: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
      state.products = action.payload; // eslint-disable-line no-param-reassign
    },
    setProduct: (state: ProductState, action: PayloadAction<Product>) => {
      state.product = action.payload; // eslint-disable-line no-param-reassign
    },
    setCategories: (state: ProductState, action: PayloadAction<Category[]>) => {
      state.categories = action.payload; // eslint-disable-line no-param-reassign
    },
  },
});

export const { setProducts, setProduct, setCategories } = productSlice.actions;
export default productSlice.reducer;

export const useProductsSelector = () =>
  useTypedSelector((state: RootState) => state.product.products);
export const useProductByIdSelector = (id: number | string) =>
  useTypedSelector((state: RootState) => state.product.products.find(product => product.id === id));