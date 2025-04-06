import "../style/HomeStaff.css";
import icon from "../../../assets/img/ImgShipper/Vector.png";
import { useState } from "react";
import OrderStaff from "./orderStaff";
import HistoryStaff from "./historyStaff";
import ProfileStaff from "./profileStaff";
import OrderDetails from "./orderDetails";
import Order from "./order"
import { OrderItem } from "./orderItem";
import CreateOrderModal from "./component/createOrder";

const HomeStaff = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const handleUpdateOrder = (updatedOrder: OrderItem) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
    setSelectedOrder(null);
  };

  const handleCreateOrder = (newOrder: OrderItem) => {
    setOrders([...orders, newOrder]);
    setShowCreateModal(false);
  };

  const history = [
    {
      id: "#0789LMN",
      address: "789 Lê Lợi, Q.3, TP.HCM",
      time: "12:30 - 13:15",
      status: "Đã giao",
    },
    {
      id: "#0987XYZ",
      address: "567 Hai Bà Trưng, Q.1, TP.HCM",
      time: "16:00 - 17:30",
      status: "Đã giao",
    },
  ];

  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <div className="brand">
            <h1>ATM2K</h1>
            <h2>SHIPPER</h2>
          </div>
          <div className="profile">
            <span className="icon">
              <img src={icon} alt="icon" />
            </span>
            <div className="avatar">BM</div>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <button
              className="add-order-btn btn"
              onClick={() => setShowCreateModal(true)}
            >
              Thêm đơn
            </button>
            <div>
              <span className="number">{orders.length}</span>
              <p>đơn hàng</p>
            </div>
            <div>
              <span className="number">10</span>
              <p>đã giao</p>
            </div>
            <div>
              <span className="number">03</span>
              <p>đơn hàng</p>
            </div>
          </div>

          <div className="tabs">
          <span
              className={activeTab === "category" ? "active" : ""}
              onClick={() => setActiveTab("category")}
            >
              Danh mục
            </span>
            <span
              className={activeTab === "orders" ? "active" : ""}
              onClick={() => setActiveTab("orders")}
            >
              Đơn hàng
            </span>
            <span
              className={activeTab === "history" ? "active" : ""}
              onClick={() => setActiveTab("history")}
            >
              Lịch Sử
            </span>
            <span
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              Cá nhân
            </span>
          </div>
          {activeTab === "category" && <Order />}
          {activeTab === "orders" && (
            <OrderStaff
              orders={orders}
              onUpdateOrder={(order) => setSelectedOrder(order)}
            />
          )}
          {activeTab === "history" && <HistoryStaff history={history} />}
          {activeTab === "profile" && <ProfileStaff />}
          {selectedOrder && (
            <OrderDetails
              order={selectedOrder}
              onClose={() => setSelectedOrder(null)}
              onUpdate={handleUpdateOrder}
            />
          )}
          {showCreateModal && (
            <CreateOrderModal
              onClose={() => setShowCreateModal(false)}
              onCreate={handleCreateOrder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeStaff;
