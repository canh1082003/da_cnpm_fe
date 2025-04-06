import "../UI_User/style/homeUser.css";
import main from "../../../assets/img/ImgUser/photo-1-15766667578391776901975-1622696128062-16226961283251701998759-1622704158065-1622704164100514724587.jpg";
import img1 from "../../../assets/img/ImgUser/images.jpg";
import imgVanChuyen from "../../../assets/img/ImgUser/van-chuyen-duong-bo.png";
import logoBrand from "../../../assets/img/logoBrand.jpg";
const HomeUser = () => {
	return (
		<div className="">
			<div className="home_User">
				<div className="header">
					<span className="logo">
						<img src={logoBrand} className="logoBrand" />
					</span>

					<nav>
						<a href="/login" className="btn_homeUser">
							Đăng nhập / Đăng kí
						</a>
					</nav>
				</div>

				<div className="home">
					<div className="content">
						<h3>
							<span>SHIP</span> Toàn Quốc
						</h3>
						<p>63 Tỉnh Thành</p>
						
					</div>
				</div>

				<div className="navbar">
					<div className="service">
						<p>
							Dịch Vụ Vận Chuyển <br /> Giao Hàng Nặng
						</p>
					</div>
					<div className="divider"></div>
					<div className="service">
						<p>
							Giao Hàng Nhanh Free <br /> Khi Sử Dụng GHN
						</p>
					</div>
					<div className="divider"></div>
					<div className="service">
						<p>
							Dịch Vụ <br /> Giao Hàng Nhanh
						</p>
					</div>
					<div className="divider"></div>
					<div className="service">
						<p>
							Dịch Vụ Kho Bãi Và <br /> Xử Lý Hàng Hóa
						</p>
					</div>
				</div>
				<div className="search">
					<div className="content">
						<div className="dh">
							<h3>TRA CỨU</h3>
							<h2>Đơn hàng</h2>
							<input
								type="text"
								placeholder="Nhập mã đơn hàng bạn cần tra cứu"
							/>
							<button className="btn_homeUser">Tra cứu</button>
						</div>
						<hr />
						{/* <div className="bc">
                   <h2>Bưu Cục</h2>
                   <div className="select-group">
                       <select>
                           <option>Chọn tỉnh/Thành phố</option>
                       </select>
                       <select>
                           <option>Chọn Quận/Huyện</option>
                       </select>
                   </div>
                   <button className="btn">tra cứu</button>
               </div> */}
					</div>
				</div>
				<div className="about">
					<div className="content">
						<h3>
							GIAO NHANH HƠN <span>CÙNG CHÚNG TÔI</span>
						</h3>
						<p>
							GHN giúp bạn giao hàng đến người nhận nhanh hơn 6 tiếng so với các
							đơn vị vận chuyển khác.
						</p>
						<img src={imgVanChuyen} alt="" />
					</div>

					<nav className="navbar">
						<div className="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-4"
							>
								<path d="M13.975 6.5c.028.276-.199.5-.475.5h-4a.5.5 0 0 1-.5-.5v-4c0-.276.225-.503.5-.475A5.002 5.002 0 0 1 13.974 6.5Z" />
								<path d="M6.5 4.025c.276-.028.5.199.5.475v4a.5.5 0 0 0 .5.5h4c.276 0 .503.225.475.5a5 5 0 1 1-5.474-5.475Z" />
							</svg>

							<p>
								Top công ty giao <br />
								nhận hàng đầu VN
							</p>
						</div>
						<div className="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-4"
							>
								<path
									fill-rule="evenodd"
									d="M2.742 2.755A2.25 2.25 0 0 1 4.424 2h7.152a2.25 2.25 0 0 1 1.682.755l1.174 1.32c.366.412.568.944.568 1.495v.68a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 1 6.25v-.68c0-.55.202-1.083.568-1.495l1.174-1.32Zm1.682.745a.75.75 0 0 0-.561.252L2.753 5h2.212a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61A1 1 0 0 1 11.035 5h2.211l-1.109-1.248a.75.75 0 0 0-.56-.252H4.423Z"
									clip-rule="evenodd"
								/>
								<path d="M1 10.75a.75.75 0 0 1 .75-.75h3.215a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61a1 1 0 0 1 .832-.445h3.215a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 1 12.75 14h-9.5A2.25 2.25 0 0 1 1 11.75v-1Z" />
							</svg>
							<p>
								Mạng lưới phủ sóng 100% <br />
								63 tỉnh thành
							</p>
						</div>
						<div className="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-4"
							>
								<path
									fill-rule="evenodd"
									d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
									clip-rule="evenodd"
								/>
							</svg>
							<p>
								Giao hàng nhanh <br />
								Tỷ lệ hoàn hàng thấp
							</p>
						</div>
						<div className="icons">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="size-4"
							>
								<path
									fill-rule="evenodd"
									d="M7.605 2.112a.75.75 0 0 1 .79 0l5.25 3.25A.75.75 0 0 1 13 6.707V12.5h.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H3V6.707a.75.75 0 0 1-.645-1.345l5.25-3.25ZM4.5 8.75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 8a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 8 8Zm2 .75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
									clip-rule="evenodd"
								/>
							</svg>
							<p>
								Hệ thống quản lý <br />
								trực tuyến 24/7
							</p>
						</div>
					</nav>
				</div>

				<div className="add">
					<div className="content">
						<h2 className="title">TIN TỨC MỚI</h2>

						<div className="news-section">
							<div className="main-news">
								<img src={main} alt="Hình ảnh chính" />
							</div>

							<div className="article-list">
								<div className="article-item">
									<img src={img1} alt="Bài viết 1" />
									<div className="article-info">
										<h4>Cách lấy link sản phẩm Shopee nhanh chóng, dễ dàng</h4>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 13"
											fill="currentColor"
											className="size-4"
										>
											<path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
											<path
												fill-rule="evenodd"
												d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>14/01/2025</span>
									</div>
								</div>

								<div className="article-item">
									<img src={img1} alt="Bài viết 2" />
									<div className="article-info">
										<h4>Cách lấy link sản phẩm Shopee nhanh chóng, dễ dàng</h4>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 13"
											fill="currentColor"
											className="size-4"
										>
											<path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
											<path
												fill-rule="evenodd"
												d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>14/01/2025</span>
									</div>
								</div>

								<div className="article-item">
									<img src={img1} alt="Bài viết 3" />
									<div className="article-info">
										<h4>Cách lấy link sản phẩm Shopee nhanh chóng, dễ dàng</h4>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 13"
											fill="currentColor"
											className="size-4"
										>
											<path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
											<path
												fill-rule="evenodd"
												d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>14/01/2025</span>
									</div>
								</div>

								<div className="article-item">
									<img src={img1} alt="Bài viết 4" />
									<div className="article-info">
										<h4>Cách lấy link sản phẩm Shopee nhanh chóng, dễ dàng</h4>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 13"
											fill="currentColor"
											className="size-4"
										>
											<path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
											<path
												fill-rule="evenodd"
												d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span>14/01/2025</span>
									</div>
								</div>
							</div>
						</div>

						<h3 className="news-title">
							[TB] GIAO HÀNG NHANH THÔNG BÁO LỊCH HOẠT ĐỘNG TẾT ẤT TỴ 2025
						</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 13"
							fill="currentColor"
							className="size-4"
						>
							<path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
							<path
								fill-rule="evenodd"
								d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
								clip-rule="evenodd"
							/>
						</svg>
						<span className="date">14/01/2025</span>
						<p className="description">
							Nhằm đảm bảo hoạt động kinh doanh và gửi hàng của Quý Khách hàng
							trong dịp Tết Ất Tỵ 2025 diễn ra suôn sẻ, Giao Hàng Nhanh khuyến
							khích Quý Khách hãy lên đơn trước ngày 24/01/2025 để đảm bảo đơn
							hàng được giao đến người nhận trước Tết.
						</p>

						<div className="contact-info">
							<p>
								Trụ sở chính:{" "}
								<span>
									{" "}
									405/15 Xô Viết Nghệ Tĩnh, Phường 24, Quận Bình Thạnh, TP. HCM
								</span>
							</p>
							<p>
								Email: <a>cskh@ghn.vn</a>
							</p>
							<p>
								Hotline: <a>1900 636677</a>
							</p>
						</div>
					</div>
				</div>
				<footer>Bản quyền thuộc về Group5 ©2025</footer>
			</div>
		</div>
	);
};

export default HomeUser;
