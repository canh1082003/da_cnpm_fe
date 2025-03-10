import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
<<<<<<< HEAD
import MainLayOut from "../cpn/MainLayOut";
import ShipmentTracking from "../components/UI/Shipment";
import Order from "../components/UI/Order";
=======
import MainLayOut from "../LayOut/MainLayOut";
import Profile from "../pages/Home/Profile";
import Manage from "../pages/Home/Manage";
import Revenue from "../pages/Home/Revenue";
import Shipment from "../pages/Home/Shipment";
import OrderProblem from "../pages/Home/OrderProblem";
import Order from "../pages/Home/Order/Order";
>>>>>>> 3d03d06a2bee11c28846e24520052785ec794686

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayOut />}>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="Shipment" element={<ShipmentTracking />} />
        <Route path="Order" element={<Order />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/orderProblem" element={<OrderProblem />} />
        <Route path="/order" element={<Order />} />
>>>>>>> 3d03d06a2bee11c28846e24520052785ec794686
      </Route>
    </Routes>
  );
};
