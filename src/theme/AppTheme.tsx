import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { blackTheme } from "./backTheme";
import { ThemeProp } from "./interface";

export const AppTheme: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={blackTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
