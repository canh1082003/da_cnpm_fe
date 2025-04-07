import { Link } from "react-router-dom";
import img from "../../../assets/img/login.png";
import logo from "../../../assets/img/logoBrand.jpg";
import "../../../pages/Home/style.css";
import "../login/login.css";
import { useState } from "react";
import api from "../../../API/API";
import { LOGIN_URL } from "../../../hooks/auth/use/constant";
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await api.post(LOGIN_URL, {
      email: formData.email,
      password: formData.password,
    });
  };
  return (
    <div className="login">
      <div className="btn_back">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 btnBack"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </Link>
      </div>

      <div className="img_login">
        <img src={img} alt="" className="img" />
      </div>
      <div className="form_login">
        <img src={logo} alt="" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form_input_login">
            <div className="form_input_login_name">
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="form_input_login_name">
              <p>Password</p>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                className="input"
                onChange={handleChange}
              />
              <div className="show_password">
                <input type="checkbox" />
                <p>Show Password</p>
              </div>
            </div>
            <button className="btn_login">login</button>
          </div>
        </form>
        <Link to="/register">
          <div className="Already">You do not have an account?</div>
        </Link>
      </div>
    </div>
  );
};
