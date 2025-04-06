import { useEffect, useState } from "react";
import shopping from "../../../assets/img/ImgShipper/shopping.jpg";
import axios from "axios";
import { GETALLORDER_BY_ADDSHIPPER_URL } from "../../../hooks/auth/shipper/constant";

interface OrderStaffProps {
  onUpdateOrder: (order: OrderItem) => void;
}
interface OrderItem {
  id: number;
  orderCode: string;
  status: string;
  location: string;
  created_at: string;
}
const OrderStaff = ({ onUpdateOrder }: OrderStaffProps) => {
  const [ordersByAddShipper, setOrdersByAddShipper] = useState<OrderItem[]>([]);

  const fetchOrdersByStatus = async () => {
    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    if (userInfo && userInfo.id) {
      try {
        const response = await axios.get(
          `${GETALLORDER_BY_ADDSHIPPER_URL}${userInfo.id}`
        );
        const data = response.data.data || [];
        setOrdersByAddShipper(data);
      } catch (error) {
        console.error("Lỗi khi gọi API theo trạng thái:", error);
        setOrdersByAddShipper([]);
      }
    }
  };

  useEffect(() => {
    fetchOrdersByStatus();
  }, []);

  return (
    <div className="orders">
      <div className="img_container">
        <img className="img_shopping" src={shopping} alt="Online Shopping" />
      </div>
      <div className="createOrder"></div>
      <div className="order_list">
        {Array.isArray(ordersByAddShipper) && ordersByAddShipper.length > 0 ? (
          ordersByAddShipper.map((order) => (
            <div className="order" key={order.id}>
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
                  <p> {order.location}</p>
                </div>
                <div className="time">
                  <span>⏰</span>
                  <p>
                    Thời gian: {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="update-btn btn"
                  onClick={() => onUpdateOrder(order)}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ic"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  Cập nhật
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Không có đơn hàng nào</p>
        )}
      </div>
    </div>
  );
};

export default OrderStaff;
