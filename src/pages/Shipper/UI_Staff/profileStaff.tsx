import user from "../../../assets/img/ImgShipper/z5776429064738_ff00dce5dcc88328ec55866c571eb3f8.jpg"
const ProfileStaff = () => {
	return (
		<div className="profile_section">
			<div className="profile">
				<img className="profile_pic" src={user} />
				<h2>Kiện Nguyễn</h2>
				<p>Shipper #012abc</p>

			</div>

			<div className="profile_info">
				<h3>Thông tin cá nhân</h3>
				<div className="info">
					<p>Số điện thoại </p>
					<span>0905 731 260</span>
					<p>Email</p>
					<span>kiennguyen@gmail.com</span>
					<p>Khu vực hoạt động</p>
					<span>Đà nẵng</span>

				</div>
			</div>

			<div className="profile_info">
				<h3>Thống kê</h3>
				<div className="info">
					
					<p>Tổng đơn hàng đã giao</p>
					<span>128</span>
					<p>Đơn hàng trong tháng</p>
					<span>45</span>
					<p>Đánh giá</p>
					<span>⭐4.9/5</span>

				</div>
			</div>
		</div>
	);
};

export default ProfileStaff;
