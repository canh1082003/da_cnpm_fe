import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/UI_shipper/Home";
import { Login } from "../pages/Auth/login/Login";
import { Register } from "../pages/Auth/register/Register";

import MainLayOut from "../LayOut/MainLayOut";

import Manage from "../pages/Home/UI_shipper/Manage";
import Revenue from "../pages/Home/UI_shipper/Revenue";
import Shipment from "../pages/Home/UI_shipper/Shipment";
import OrderProblem from "../pages/Home/UI_shipper/OrderProblem";
import Order from "../pages/Home/UI_shipper/Order";
import Shipper from "../pages/Shipper/Shipper";
import HomeUser from "../pages/Home/UI_User/homeUser";
import HomeStaff from "../pages/Shipper/UI_Staff/HomeStaff";
import Profile from "../pages/Home/UI_shipper/Profile";
import OrderManagement from "../pages/Shipper/UI_Staff/order";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />} />
      <Route path="/" element={<MainLayOut />}>
        <Route path="/homeAdmin" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/orderProblem" element={<OrderProblem />} />
        <Route path="/order" element={<Order />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shipper" element={<Shipper />} />
      <Route path="/homeStaff" element={<HomeStaff />} />
      <Route path="/orderShipper" element={<OrderManagement />} />
    </Routes>
  );
};
