import React from "react";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router-dom";

export const AppRouter = () => {
  const status = "authenticated";

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<h3>E-Commerce</h3>} />
      ) : (
        <Route path="/auth/*" element={<h3>AuthRoutes</h3>} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
