import { Link } from "react-router-dom";
import img from "../../../assets/img/login.png";
import logo from "../../../assets/img/logo.png";
import "../../../pages/Home/style.css";
import "../login/login.css";
import { useState } from "react";
import api from "../../../API/API";
import { LOGIN_URL } from "../../../hooks/constant";
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
    <div className="login style">
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
