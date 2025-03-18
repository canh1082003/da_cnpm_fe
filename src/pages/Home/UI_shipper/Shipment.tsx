
import "../UI_shipper/style/shipment.css";

import "../style.css";
const Shipment = () => {
  return (
    <div className="a">
      <div className="shipper-profile">
        <div className="profile_header">
          <img
            src="https://jobsgo.vn/blog/wp-content/uploads/2021/07/cach-dang-ky-lam-shipper-giao-hang-tiet-kiem.jpg"
            alt="Shipper"
          />
          <h2>Phan Manh Quynh</h2>
          <p>your shipper</p>
          <button>Contact</button>
        </div>
        <div className="shipment_list">
          <h3>📦 Recent Shipment</h3>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">#0123ABCD</td>
                <td>Dec 18, 2020</td>
                <td className="processing">Processing</td>
                <td>...</td>
              </tr>
              <tr>
                <td>#0123ABCD</td>
                <td>Dec 18, 2020</td>
                <td className="shipped">Shipped</td>
                <td>...</td>
              </tr>
              <tr>
                <td>#0123ABCD</td>
                <td>Dec 18, 2020</td>
                <td className="delivered">Delivered</td>
                <td>...</td>
              </tr>
              <tr>
                <td>#0123ABCD</td>
                <td>Dec 18, 2020</td>
                <td className="cancelled">Cancelled</td>
                <td>...</td>
              </tr>
              <tr>
                <td>#0123ABCD</td>
                <td>Dec 18, 2020</td>
                <td className="pending">Pending</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>

          <div className="pagination">
            <a href="#" className="prev">
              ← Previous
            </a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#" className="active">
              3
            </a>
            <span>...</span>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#" className="next">
              Next →
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="tracking_result">
          <h3>📍 Tracking result</h3>
          <div className="ko">
            <div className="ok">
              <span>5:50 PM </span>
              <ul className="tracking-timeline">
                <h2>Đơn hàng kho phân loại HN SOC</h2>
                <li>Kiện hàng đã đến HN SOC</li>
              </ul>
            </div>
            <div className="ok">
              <span>5:50 PM</span>
              <ul className="tracking-timeline">
                <h2>Đơn hàng kho phân loại HN SOC</h2>
                <li>Kiện hàng đã đến HN SOC</li>
              </ul>
            </div>
            <div className="ok">
              <span>5:50 PM</span>
              <ul className="tracking-timeline">
                <h2>Đơn hàng kho phân loại HN SOC</h2>
                <li>Kiện hàng đã đến HN SOC</li>
              </ul>
            </div>
            <div className="ok">
              <span>5:50 PM</span>
              <ul className="tracking-timeline">
                <h2>Đơn hàng kho phân loại HN SOC</h2>
                <li>Kiện hàng đã đến HN SOC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
