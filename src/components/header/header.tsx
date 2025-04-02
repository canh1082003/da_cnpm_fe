import "./header.css";
import logo from "../../assets/img/logo.png";
import language from "../../assets/img/Mask group.png";
import anh1 from "../../assets/img/anh1.png";
import { useState } from "react";
import { Header_Menu } from "./header_menu";
import { useNavigate } from "react-router-dom";
import { BellAlertIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(Header_Menu[0]?.name || "");
  const navigate = useNavigate();
  const header_menu = Header_Menu;
  const [userInfo] = useState(() => {
    const storedUser = localStorage.getItem("userInfo");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const removeUserInfo = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  const [showLogout, setShowLogout] = useState(false);

  const handleToggleLogout = () => {
    if (!userInfo) {
      navigate("/login");
    } else {
      setShowLogout((prev) => !prev);
    }
  };
  const render_Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="logo">
          <img src={logo} className="imgLogo" alt="Logo" />
        </div>
        <ul className="menu">
          {header_menu.map((item) => (
            <li
              key={item.name}
              className={`menu_list ${
                selectedMenu === item.name ? "active" : ""
              }`}
              onClick={() => {
                setSelectedMenu(item.name);
                navigate(item.path);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const render_container = () => {
    return (
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
            <div className="notifi">
              <BellAlertIcon className="ic_notifi" />
              {/* <span className="sub_notifi">1</span> */}
            </div>
            <div className="information">
              <img src={anh1} className="top_10" alt="User Avatar" />
              <div className="information_name" onClick={handleToggleLogout}>
                {userInfo?.name ? userInfo.name : "Login"}
                {userInfo?.name && showLogout && (
                  <p className="logout_user" onClick={removeUserInfo}>
                    Log Out
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="main">
        <div className="main_wrap">
          {render_Dashboard()}
          {render_container()}
        </div>
      </div>
    </div>
  );
};

export default Header;
