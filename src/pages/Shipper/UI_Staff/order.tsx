import React, { useEffect, useState } from "react";
import axios from "axios";
import shopping from "../../../assets/img/ImgShipper/shopping.jpg";
import "../style/order.css";
import { ADDORDER_BY_STAFF_URL, GETALLORDER_BYSTATUS_URL } from "../../../hooks/auth/shipper/constant";
import { toast } from "react-toastify";
import { OrderItem } from "../../../hooks/auth/order/type";

export default function OrderManagement() {
  const [ordersByStatus, setOrdersByStatus] = useState<OrderItem[]>([]);

  const fetchOrdersByStatus = async () => {
    try {
      const response = await axios.get(GETALLORDER_BYSTATUS_URL);
      console.log(response)
      const data = response.data.data || [];
      setOrdersByStatus(data);
    } catch (error) {
      console.error("Lỗi khi gọi API theo trạng thái:", error);
      setOrdersByStatus([]);
    }
  };

  useEffect(() => {
    fetchOrdersByStatus();
  }, []);

  const handleFetchOrdersByStaff = async (orderId: number) => {
    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

    if (userInfo && userInfo.id && orderId) {
      try {
        await axios.put(
          `${ADDORDER_BY_STAFF_URL}/${userInfo.id}`,
          { id: orderId }
        );

        toast.success("Lấy Đơn hàng thành công");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } catch (error) {
        console.error("Lỗi khi gọi API theo nhân viên:", error);
      }
    } else {
      console.error("Không có thông tin nhân viên hoặc id đơn hàng.");
    }
  };

  return (
    <div className="orders">
      <div className="img_container">
        <img className="img_shopping" src={shopping} alt="Online Shopping" />
      </div>
      <div className="order_list">
        {Array.isArray(ordersByStatus) && ordersByStatus.length > 0 ? (
          ordersByStatus.map((order) => (
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
                  <p>Giao đến: {order.location}</p>
                </div>
                <div className="time">
                  <span>⏰</span>
                  <p>
                    Thời gian: {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="total_amount">
                  <span>💰</span>
                  <p>Số tiền: {order.total_amount} VND</p>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="complete-btn btn"
                  onClick={() => handleFetchOrdersByStaff(order.id)}
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
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  Lấy Đơn
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
}
