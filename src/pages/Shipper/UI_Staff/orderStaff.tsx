import { useEffect, useState } from "react";
import axios from "axios";
import { GETALLORDER_BY_ADDSHIPPER_URL } from "../../../hooks/auth/shipper/constant";

import OrderDetails from "./orderDetails";
import { OrderItem } from "../../../hooks/auth/order/type";

const OrderStaff = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  console.log(orders);
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  useEffect(() => {
    const fetchOrdersByStaff = async () => {
      const userInfoString = localStorage.getItem("userInfo");
      const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

      if (userInfo && userInfo.id) {
        try {
          const response = await axios.get(
            `${GETALLORDER_BY_ADDSHIPPER_URL}${userInfo.id}`
          );

          setOrders(response.data.data || []);
        } catch (error) {
          console.error("Lỗi khi lấy đơn hàng của nhân viên:", error);
        }
      }
    };

    fetchOrdersByStaff();
  }, []);

  const handleUpdateClick = (order: OrderItem) => {
    setSelectedOrder(order);
  };

  const handleUpdateOrder = (updatedOrder: OrderItem) => {
    setOrders(
      orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };

  return (
    <div className="orders">
      <div className="order_list">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="order">
              <div className="info_order">
                <p>
                  📦 Đơn: <a href="#">{order.orderCode}</a>
                </p>
                <p
                  className={`status ${order.status
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {order.status}
                </p>
              </div>
              <div className="content_order">
                <div className="delivery">
                  <span>📍</span>
                  <div>
                    <p>Giao đến:</p>
                    <span>{order.location}</span>
                  </div>
                </div>
                <div className="time">
                  <span>⏰</span>
                  <div>
                    <p>Thời gian:</p>
                    <span>{order.created_at}</span>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="update-btn btn"
                  onClick={() => handleUpdateClick(order)}
                >
                  Cập nhật
                </button>
                <button className="complete-btn btn">Hoàn thành</button>
              </div>
            </div>
          ))
        ) : (
          <p>Chưa có đơn hàng nào được nhận.</p>
        )}
      </div>

      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onUpdate={handleUpdateOrder}
        />
      )}
    </div>
  );
};

export default OrderStaff;
