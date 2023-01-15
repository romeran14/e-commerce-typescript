import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { EcommerceRoutes } from "../e-commerce/routes/EcommerceRoutes";

const status = "authenticated";

export const AppRouter = () => {
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<EcommerceRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
