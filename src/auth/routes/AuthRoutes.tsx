import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<h3>Register</h3>} />
      <Route path="forgot-you-password" element={<h3>Forgot Password</h3>} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
