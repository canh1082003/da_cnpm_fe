import shopping from "../../../assets/img/ImgShipper/shopping.jpg";
import { OrderItem } from "./orderItem";



interface OrderStaffProps {
  orders: OrderItem[];
  onUpdateOrder: (order: OrderItem) => void;
}

const OrderStaff = ({ orders, onUpdateOrder }: OrderStaffProps) => {
  
  return (
    <div className="orders">
      <div className="img_container">
        <img className="img_shopping" src={shopping} alt="Online Shopping" />
      </div>
      <div className="createOrder">
      </div>
      <div className="order_list">
        {orders.map((order) => (
          <div key={order.id} className="order">
            <div className="info_order">
              <p>
                📦 Đơn: <a href="#">{order.id}</a>
              </p>
              <p className={`status ${order.status.toLowerCase().replace(/\s/g, "-")}`}>
                {order.status}
              </p>
            </div>
            <div className="content_order">
              <div className="delivery">
                <span>📍</span>
                <div>
                  <p>Giao đến:</p>
                  <span>{order.address}</span>
                </div>
              </div>
              <div className="time">
                <span>⏰</span>
                <div>
                  <p>Thời gian:</p>
                  <span>{order.time}</span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="update-btn btn" onClick={() => onUpdateOrder(order)}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ic"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                Cập nhật
              </button>
              <button className="complete-btn btn">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ic"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                Hoàn thành
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStaff;
