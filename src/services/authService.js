import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://127.0.0.1:8000/v1/api/users";

const authService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register/`, userData);
      if (response.data.token) {
        Cookies.set("accessToken", response.data.token.access);
        Cookies.set("refreshToken", response.data.token.refresh);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token.access}`;
      }
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          errors: { general: ["Registration failed. Please try again."] },
        }
      );
    }
  },

  login: async (credentials) => {
    try {
      const loginData = {
        login_field: credentials.login_field, // ← either username or email
        password: credentials.password,
      };

      const response = await axios.post(`${API_BASE_URL}/login/`, loginData);
      if (response.data.token) {
        Cookies.set("accessToken", response.data.token.access);
        Cookies.set("refreshToken", response.data.token.refresh);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token.access}`;
      }
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          errors: { general: ["Login failed. Please try again."] },
        }
      );
    }
  },

  logout: () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    delete axios.defaults.headers.common["Authorization"];
  },

  isAuthenticated: () => {
    return !!Cookies.get("accessToken");
  },

  getProfile: async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.get(`${API_BASE_URL}/profile/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          errors: { general: ["Failed to fetch profile. Please try again."] },
        }
      );
    }
  },

  refreshToken: async () => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) throw new Error("No refresh token available");

      const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {
        refresh: refreshToken,
      });

      if (response.data.access) {
        Cookies.set("accessToken", response.data.access);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access}`;
      }

      return response.data;
    } catch (error) {
      authService.logout();
      throw error;
    }
  },
};

// Auto-refresh interceptor
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await authService.refreshToken();
        return axios(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default authService;
