import "../style/orderStaff.css"
interface HistoryItem {
	id: string;
	address: string;
	time: string;
	status: string;
  }
  
  interface HistoryStaffProps {
	history: HistoryItem[];
  }
  
  const HistoryStaff = ({ history }: HistoryStaffProps) => {
	return (
	  <div className="history_list">
		<h3>Lịch sử giao dịch</h3>
		{history.map((item, index) => (
		  <div key={index} className="history_item">
			<div className="info_order">
			  <p>
				📦 Đơn: <a href="#">{item.id}</a>
			  </p>
			  <p className={`status ${item.status === "cần giao" ? "pending" : "completed"}`}>
				{item.status}
			  </p>
			</div>
			<div className="content_order">
			  <div className="delivery">
				<span>📍</span>
				<div>
				  <p>Giao đến:</p>
				  <span>{item.address}</span>
				</div>
			  </div>
			  <div className="time">
				<span>⏰</span>
				<div>
				  <p>Thời gian:</p>
				  <span>{item.time}</span>
				</div>
			  </div>
			</div>
		  </div>
		))}
	  </div>
	);
  };
  
  export default HistoryStaff;
  