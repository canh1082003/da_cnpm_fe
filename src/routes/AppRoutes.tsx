import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import MainLayOut from "../cpn/MainLayOut";
import ShipmentTracking from "../components/UI/Shipment";
import Order from "../components/UI/Order";

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MainLayOut />} >
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="Shipment" element={<ShipmentTracking />} />
        <Route path="Order" element={<Order />} />
      </Route>

    </Routes>
  );
};
