import { useState } from "react";
import { OrderItem } from "../orderItem";
import "../../style/createOrder.css"

interface CreateOrderModalProps {
	onClose: () => void;
	onCreate: (newOrder: OrderItem) => void;
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
  
  
const CreateOrderModal = ({ onClose, onCreate }: CreateOrderModalProps) => {
	const [address, setAddress] = useState("");
	const [id, setId] = useState("");
	const [time, setTime] = useState("");
	const [status, setStatus] = useState("Đang xử lý");
	const [location, setLocation] = useState("Đơn hàng kho phân loại HN SOC");

	const handleSubmit = () => {
		if (!address || !time) {
			alert("Vui lòng nhập đầy đủ thông tin đơn hàng!");
			return;
		}
		const newOrder: OrderItem = {
			id: ``,
			address,
			time,
			status,
			location: "",
		};
		onCreate(newOrder);
	};

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2>Tạo đơn hàng mới</h2>
				<label>ID</label>
				<input type="text" value={id} onChange={(e) => setId(e.target.value)} />

				<label>Thời gian</label>
				<input type="text" value={time} onChange={(e) => setTime(e.target.value)} />

				<label>Địa chỉ</label>
				<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

				<label>Trạng thái đơn hàng</label>
				<select value={status} onChange={(e) => setStatus(e.target.value)}>
					{STATUS_OPTIONS.map((s) =>(
						<option key={s} value={s}>
							{s}
						</option>

					)
				
				)}
				</select>
				<select value={location} onChange={(e) => setLocation(e.target.value)}>
					{LOCATION_HISTORY.map((l) =>(
						<option key={l} value={l}>
							{l}
						</option>

					)
				
				)}
				</select>

				<div className="modal-buttons">
					<button className="cancel-btn btn" onClick={onClose}>Hủy</button>
					<button className="create-btn btn" onClick={handleSubmit}>Tạo</button>
				</div>
			</div>
		</div>
	);
};

export default CreateOrderModal;
