import "./header.css";
import logo from "../../assets/img/logo.png";
import language from "../../assets/img/Mask group.png";
import anh1 from "../../assets/img/anh1.png";
import { useState } from "react";

import Profile from "../../components/UI/Profile";
import Order from "../../components/UI/Order";
import OrderProblem from "../../components/UI/OrderProblem";
import Shipment from "../../components/UI/Shipment";
import Revenue from "../../components/UI/Revenue";
import Manage from "../../components/UI/Manage";
import DashBoard from "../../components/UI/DashBoard";

const Header = () => {
	const [selectedMenu, setSelectedMenu] = useState("Home");
	const menuItems = [
		{
			name: "Home",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
			),
		},
		{
			name: "Profile",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
					/>
				</svg>
			),
		},
		{
			name: "New Order",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
					/>
				</svg>
			),
		},
		{
			name: "Order Problem",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
					/>
				</svg>
			),
		},
		{
			name: "Shipment",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-6 icon"
				>
					{" "}
					<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />{" "}
					<path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />{" "}
					<path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />{" "}
				</svg>
				
			),
		},
		{
			name: "Revenue",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-6 icon"
				>
					{" "}
					<path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />{" "}
					<path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />{" "}
					<path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />{" "}
				</svg>
				
			),
		},
		{
			name: "Manage",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="size-6 icon"
				>
					{" "}
					<path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />{" "}
				</svg>
			),
		},
	];

	const renderContent = () => {
		switch (selectedMenu) {
			case "Home":
				return <DashBoard />;
			case "Profile":
				return <Profile />;
			case "New Order":
				return <Order />;
			case "Order Problem":
				return <OrderProblem />;
			case "Shipment":
				return <Shipment />;
			case "Revenue":
				return <Revenue />;
			case "Manage":
				return <Manage />;
			default:
				return <DashBoard />;
		}
	};

	return (
		<div>
			<div className="main">
				<div className="main_wrap">
					<div className="dashboard">
						<div className="logo">
							<img src={logo} className="imgLogo" alt="Logo" />
						</div>
						<ul className="menu">
							{menuItems.map((item) => (
								<li
									key={item.name}
									className={`menu_list ${
										selectedMenu === item.name ? "active" : ""
									}`}
									onClick={() => setSelectedMenu(item.name)}
								>
									{item.icon}
									<span>{item.name}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="container">
						<div className="header">
							<div className="search_box">
								<input
									type="text"
									className="clr_search"
									placeholder="Tìm kiếm nè..."
								/>
							</div>
							<div className="custom_box">
								<div className="ic_language">
									<img src={language} className="imgLanguage" alt="Language" />
									<span>Eng(US)</span>
								</div>
								<div className="ic_notifi">
									<span className="sub_notifi">1</span>
								</div>
								<div className="information">
									<img src={anh1} className="top_10" alt="User Avatar" />
								</div>
							</div>
						</div>
						<div className="content">{renderContent()}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
