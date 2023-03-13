import { FC } from 'react';
import { Product } from '../../../../store/produts/interface';
import ProductItem from './ProductItem';


interface ProductsListProps {
  products: Product[] | undefined;
}

const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <div className='products-list'>
    {products?.map(product => (
      <ProductItem key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
