import axios from "axios";
import { constants } from "../constants/constants";
import { toast } from "react-toastify";





export const API_URL = constants.API_URL;

const signup = async (email, password) => {
  const response = await axios
    .post(API_URL + "/auth",
      {
        "email": email,
        "password": password,
      }
    );
  if (response.data.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data.data.user.email));
    localStorage.setItem("isAuthenticated", "true");
    toast.success("Sign up successfully");
  }
  return response.data;
};

const login = async (email, password) => {
  const response = await axios
    .post(API_URL + "/auth/login",
      {
        "email": email,
        "password": password,
      }
    );
  if (response.data.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data.data.user.email));
    localStorage.setItem("isAuthenticated", "true");
    toast.success("Logged in successful");
  }
  return response.data;
};

const resetPassword = async (password, userId, authToken) => {

  const response = await axios
    .post(`${API_URL}/auth/reset-password/${userId}/${authToken}`,
      {
        "password": password,
      },
    );

  if (response.status === 200 || response.readyState
    === 4) {
    toast.success("Password reset successfully!");
  } else {
    toast.error("Something went wrong!");
  }
};

const forgotPassword = async (email) => {
  const response = await axios
    .post(API_URL + "/auth/forgot-password",
      {
        "email": email,
      }
    );

  if (response.status === 200 || response.readyState
    === 4) {
    toast.success("Email sent successfully!");
  } else {
    toast.error("Something went wrong!");
  }
};

const logout = () => {

  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/";
  toast.success("Logged out successful");

};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated");
};


const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
  resetPassword,
  forgotPassword,
  isAuthenticated,
};

export default authService;