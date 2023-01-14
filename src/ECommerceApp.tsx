import { Box, Typography } from "@mui/material";
import { NavBar } from "./e-commerce/components";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import useActions from "./store/hooks/useActions";
import { useGetProductsQuery } from "./store/produts/productApi";
import { useEffect } from "react";

export const ECommerceApp = () => {
  const { setProducts } = useActions();
  const { data, error, isLoading, isSuccess } = useGetProductsQuery({ limit: 100, skip: 0 });

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.products);
    }
  }, [data, isSuccess, setProducts]);

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>error</p>;
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
