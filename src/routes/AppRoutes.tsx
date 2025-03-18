import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/UI_shipper/Home";
import { Login } from "../pages/Auth/login/Login";
import { Register } from "../pages/Auth/register/Register";

import MainLayOut from "../LayOut/MainLayOut";

import Profile from "../pages/Home/Profile";
import Manage from "../pages/Home/UI_shipper/Manage";
import Revenue from "../pages/Home/UI_shipper/Revenue";
import Shipment from "../pages/Home/UI_shipper/Shipment";
import OrderProblem from "../pages/Home/UI_shipper/OrderProblem";
import Order from "../pages/Home/UI_shipper/Order";
import Shipper from "../pages/Shipper/Shipper";
import HomeUser from "../pages/Home/UI_User/homeUser";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/orderProblem" element={<OrderProblem />} />
        <Route path="/order" element={<Order />} />
        <Route path="/shipper" element={<Shipper />} />
      </Route>
      <Route path="/homeUser" element={<HomeUser />} />

    </Routes>
  );
};
