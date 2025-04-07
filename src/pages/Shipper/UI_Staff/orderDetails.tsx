import { useState } from "react";
import "../style/OrderDetails.css";
import axios from "axios";
import { toast } from "react-toastify";
import { UPDATEORDER_BY_ORDERCODE_URL } from "../../../hooks/auth/shipper/constant";
import { OrderItem } from "../../../hooks/auth/order/type";

interface OrderDetailsProps {
  order: OrderItem;
  onClose: () => void;
  onUpdate: (updatedOrder: OrderItem) => void;
}

const STATUS_OPTIONS = [
  "Đang vận chuyển",
  "Đang xử lý",
  "Đã giao",
  "Chờ giải quyết",
  "Đã hủy",
];

const LOCATION_HISTORY = [
  "Đơn hàng kho phân loại HN SOC",
  "Đơn hàng đang được trung chuyển tới Da Nang SOC",
  "Đơn hàng đã đến kho phân loại Da Nang SOC",
  "Đơn hàng đang trên đường giao đến bạn",
  "Đơn hàng đã được giao thành công",
];

const OrderDetails = ({ order, onClose, onUpdate }: OrderDetailsProps) => {
  const [status, setStatus] = useState(order.status);
  const [location, setLocation] = useState(order.location);
  // const [note, setNote] = useState("");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const updatedOrder = { ...order, status, location };
      await axios.put(`${UPDATEORDER_BY_ORDERCODE_URL}/${order.orderCode}`, {
        status,
        location,
      });

      onUpdate(updatedOrder);

      toast.success("Cập nhật đơn hàng thành công!");

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra khi cập nhật đơn hàng.");
    }
  };

  return (
    <div className="order_details_overlay">
      <div className="order_details_container">
        <div className="order_details_header">
          <h2>
            Đơn hàng: <p>{order.orderCode}</p>
          </h2>
          <button className="close_btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="order_details_content">
          <button
            className={`status_btn ${status
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            disabled
          >
            {status}
          </button>

          <div className="order_info">
            <h3>Thông tin đơn hàng</h3>
            <div className="detail_infor">
              <p>
                Khách hàng: <span>Nguyễn Văn Kiện</span>
              </p>
              <p>
                Tổng giá trị: <span>3.500.000</span>
              </p>
              <p>
                Phương thức thanh toán: <span>Thanh toán khi nhận hàng</span>
              </p>
            </div>
          </div>

          <div className="update_status">
            <h3>Trạng thái đơn hàng</h3>
            <select value={status} onChange={handleStatusChange}>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="update_location">
            <h3>Vị trí đơn hàng</h3>
            <select value={location} onChange={handleLocationChange}>
              {LOCATION_HISTORY.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="buttons">
            <button className="cancel-btn btn" onClick={onClose}>
              Quay lại
            </button>
            <button className="update-btn btn" onClick={handleUpdate}>
              Cập nhật
            </button>
          </div>

          <div className="status_history">
            <h3>Lịch sử trạng thái</h3>
            <ul className="timeline">
              {LOCATION_HISTORY.map((item, index) => {
                const isCompleted = LOCATION_HISTORY.indexOf(location) >= index;
                return (
                  <li key={index} className={isCompleted ? "completed" : ""}>
                    <span
                      className={`update-label ${isCompleted ? "completed" : ""
                        }`}
                    >
                      {isCompleted ? "Đã cập nhật" : "Cập nhật"}
                    </span>
                    <div
                      className={`status-circle ${isCompleted ? "completed" : ""
                        }`}
                    >
                      {isCompleted && <span className="checkmark">✔</span>}
                    </div>
                    <div className="status-content">
                      <strong>{item}</strong>
                      <p>
                        Kiện hàng {isCompleted ? "đã" : "chưa"} đến trạng thái
                        này.
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
