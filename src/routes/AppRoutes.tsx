import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import MainLayOut from "../cpn/MainLayOut";

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MainLayOut />} >
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  );
};
