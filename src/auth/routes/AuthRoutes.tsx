import { Routes, Route, Navigate } from "react-router-dom";

export const AuthRoutes = () =>{
  return(
    <Routes>
      <Route path="login" element={<h3>Login</h3>} />
    </Routes>
  )
}