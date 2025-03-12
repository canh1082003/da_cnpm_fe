import axios, { type AxiosInstance } from "axios";
import { baseURL } from "./constant";
import { toast } from "react-toastify";
import { LOGIN_URL, REGISTER_URL } from "../hooks/constant";
import { ApiSuccessResponse } from "../hooks/type";
import { LoginData, RegisterData } from "../hooks/auth/use/type";
export class Api {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        switch (url) {
          case REGISTER_URL: {
            const registerResponse =
              response as ApiSuccessResponse<RegisterData>;
            const email = registerResponse.data.data.email;
            if (email) {
              toast.success("Register Success");
              setTimeout(() => {
                window.location.href = "/login";
              }, 6000);
            }

            return response;
          }

          case LOGIN_URL: {
            const LoginResponse = response as ApiSuccessResponse<LoginData>;
            const userInfo = LoginResponse.data.data;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));

            if (userInfo.role === "admin")
              window.location.href = "/home/admin/";
            else if (userInfo.role === "user") {
              toast.success("Đăng Nhập Thành Công");
              setTimeout(() => {
                window.location.href = "/";
              }, 6000);
            } else {
              setTimeout(() => {
                window.location.href = "/home/shipper";
              }, 6000);
            }
            return response;
          }

          default: {
            return response;
          }
        }
      },
      (error: any) => {
        const errorData = error.response?.data;
        console.log(errorData);
        const errorMessage = errorData?.message || "Đã xảy ra lỗi";
        toast.error(errorMessage);
      }
    );
  }
}
const api = new Api().instance;
export default api;
