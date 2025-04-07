import { Link } from "react-router-dom";
import img from "../../../assets/img/login.png";
import logoBrand from "../../../assets/img/logoBrand.jpg";
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
	const [showPassword, setShowPassword] = useState(false);

<<<<<<< Updated upstream
	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};
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
		<div className="login ">
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
			<div className="img_login style">
				<img src={img} alt="" className="img" />
			</div>
			<div className="form_login">
				<img src={logoBrand} alt="" className="logo" />
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
								type={showPassword ? "text" : "password"}
								placeholder="Enter your Password"
								name="password"
								className="input"
								onChange={handleChange}
							/>

							<span
								className="show_password_icon"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={0.8}
										stroke="currentColor"
										className="size-6"
										width="22"
										height="22"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={0.8}
										stroke="currentColor"
										className="size-6"
										width="22"
										height="22"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
										/>
									</svg>
								)}
							</span>
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
=======
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
                <p>Show password</p>
              </div>
            </div>
            <button className="btn_login">Login</button>
          </div>
        </form>
        <Link to="/register">
          <div className="Already">You do not have an account?</div>
        </Link>
      </div>
    </div>
  );
>>>>>>> Stashed changes
};
