import axios from "axios";
import Util from "../../Util.js";

var BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

export default class RestResource {
  async getConfiguration(params) {
    return await axios.post(
      `${BACKEND_URL}/admin/getConfiguration`,
      params,
      Util.setupHeaders()
    );
  }

  async register(params) {
    return await axios.post(
      `${BACKEND_URL}/admin/auth/register`,
      params,
      Util.setupHeaders()
    );
  }

  async resetPassword(params) {
    return await axios.post(
      `${BACKEND_URL}/admin/auth/resetPassword`,
      params,
      Util.setupHeaders()
    );
  }

  async update(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/admin/auth/update`, params);
  }

  async sendVerificationCode(params) {
    return await axios.post(
      `${BACKEND_URL}/admin/auth/sendVerificationCode`,
      params,
      Util.setupHeaders()
    );
  }

  async verifyVerificationCode(params) {
    return await axios.post(
      `${BACKEND_URL}/admin/auth/verifyVerificationCode`,
      params,
      Util.setupHeaders()
    );
  }

  async login(params) {
    return await axios.post(
      `${BACKEND_URL}/admin/auth/login`,
      params,
      Util.setupHeaders()
    );
  }

  async getUser(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/user/getUser`, params);
  }

  async addBooking(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/bookings/addBooking`, params);
  }

  async logout(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return await axios.post(`${BACKEND_URL}/admin/auth/logout`, params);
  }

  whoAmI(data) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/admin/auth/whoAmI`, data);
  }

  sendEmail(data) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/user/sendEmail`, data);
  }

  async fetchUsers(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/user/getUsers`, params);
  }

  async getAllCars(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/getAllCars`, params);
  }

  async getBookings(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/bookings/getBookings`, params);
  }

  async getExpenses(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/expenses/getExpenses`, params);
  }

  async getBooking(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/bookings/getBooking`, params);
  }

  async addExpenses(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/expenses/addExpenses`, params);
  }

  async updateBooking(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/bookings/updateBooking`, params);
  }

  async getCars(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/getCars`, params);
  }

  async addTracker(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/addTracker`, params);
  }

  async getTrackers(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/getTrackers`, params);
  }

  async addReview(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/addReview`, params);
  }

  async getReviews(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/getReviews`, params);
  }

  async getCarData(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/getCarData`, params);
  }

  async getCar(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/getCar`, params);
  }

  async updateCar(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/updateCar`, params);
  }

  async activateUser(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/user/activateUser`, params);
  }

  async addCar(params) {
    axios.defaults.headers.common["Authorization"] =
      window.$cookies.get("posToken");
    return axios.post(`${BACKEND_URL}/car/addCar`, params);
  }
}
