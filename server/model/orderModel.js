import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  clientId: { type: Number, required: true },
  host: { type: String, required: true },
  port: { type: Number, required: true },
  stockSymbol: { type: String, required: true },
  exchange: { type: String, required: true },
  currency: { type: String, required: true },
  orderType: { type: String, required: true },
  action: { type: String, required: true },
  quantity: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
