import { useDispatch } from "react-redux";
import { sentOrderData } from "../../actions/orderAction";
import "./StockData.css";
import React, { useEffect, useState } from "react";

const StockData = () => {
  const dispatch = useDispatch();

  const [clientId, setClientId] = useState("");
  const [host, setHost] = useState("127.0.0.1");
  const [port, setPort] = useState(7496);
  const [stockSymbol, setStockSymbol] = useState("");
  const [exchange, setExchange] = useState("SMART");
  const [currency, setCurrency] = useState("USD");
  const [orderType, setOrderType] = useState("Market");
  const [action, setAction] = useState("BUY");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      clientId,
      host,
      port,
      stockSymbol,
      exchange,
      currency,
      orderType,
      action,
      quantity,
      price,
    };

    try {
      dispatch(sentOrderData(orderData)); // Dispatching the action
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  return (
    <div className="stock-data-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-top">
            <div className="form-items">
              <label>Client ID:</label>
              <input
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                required
              />

              <label>Host:</label>
              <input
                value={host}
                onChange={(e) => setHost(e.target.value)}
                required
              />

              <label>Port:</label>
              <input
                value={port}
                onChange={(e) => setPort(e.target.value)}
                required
              />
            </div>

            <div className="form-items">
              <label>Stock Symbol:</label>
              <input
                value={stockSymbol}
                onChange={(e) => setStockSymbol(e.target.value)}
                required
              />

              <label>Exchange:</label>
              <input
                value={exchange}
                onChange={(e) => setExchange(e.target.value)}
                required
              />

              <label>Currency:</label>
              <input
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                required
              />
            </div>

            <div className="form-items">
              <label>Order Type:</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                required
              >
                <option value="Market">Market</option>
                <option value="Limit">Limit</option>
              </select>

              <label>Action:</label>
              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                required
              >
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
              </select>

              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />

              {orderType === "Limit" && (
                <>
                  <label>Price (Limit Order):</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </>
              )}
            </div>
          </div>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default StockData;
