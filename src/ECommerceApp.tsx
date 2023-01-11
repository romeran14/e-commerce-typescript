import { Box, Typography } from "@mui/material";
import { NavBar } from "./e-commerce/components";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const ECommerceApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
