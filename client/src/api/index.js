import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
});

//send order data api
export const sendOrderDataApi = (orderData) =>
  API.post(`/api/place-order`, orderData);
