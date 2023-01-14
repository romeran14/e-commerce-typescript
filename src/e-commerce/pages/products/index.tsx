import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Pagination from './Components/Pagination'
import ProductsList from './Components/ProductsList';
import { useGetProductsQuery } from '../../../store/produts/productApi';

const ProductsPage = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({
    limit: 12,
    skip: (activePage - 1) * 10,
  });

  if (isLoading) return <h2>'Loading'</h2>;
  if (error) return  <h2>'Error'</h2>;

  return (
    <>
      <h1>Products</h1>
      <ProductsList products={data?.products} />
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        total={data?.total}
        limit={data?.limit}
      />
      <Outlet />
    </>
  );
};

export default ProductsPage;