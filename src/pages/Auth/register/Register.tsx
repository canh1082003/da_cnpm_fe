import { Link } from "react-router-dom";
import img from "../../../assets/img/login.png";
import logo from "../../../assets/img/logoBrand.jpg";
import "../../../pages/Home/style.css";
import "../register/register.css";
import { useState } from "react";
import api from "../../../API/API";
import { APIUSERREGISTER } from "../../../API/constant";
export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await api.post(APIUSERREGISTER, {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
  };
  return (
    <div className="register">
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
      <div className="img_register">
        <img src={img} alt="" className="img" />
      </div>
      <div className="form_register">
        <img src={logo} alt="" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form_input_register">
            <div className="form_input_register_name">
              <p>Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="form_input_register_name">
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="form_input_register_name">
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
            <div className="form_input_register_name">
              <p>Confirm Password</p>
              <input
                type="password"
                placeholder="Enter your Confirm Password"
                name="confirmPassword"
                className="input"
                onChange={handleChange}
              />
            </div>
            <button className="btn_register">Register</button>
          </div>
        </form>
        <Link to="/login">
          <div className="Already">Already have an account?</div>
        </Link>
      </div>
    </div>
  );
};
