import pkg from "ib"; // Import the default export from the CommonJS module
import Order from "../model/orderModel.js";

// Extract the necessary methods from the package
const { contract, order, IB } = pkg;

// Function to place an order through Interactive Brokers
export const placeOrder = async (req, res) => {
  const {
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
  } = req.body;

  // Validate required fields
  if (
    !clientId ||
    !host ||
    !port ||
    !stockSymbol ||
    !exchange ||
    !currency ||
    !orderType ||
    !action ||
    !quantity
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create an instance of IB
    const ib = new IB();

    // Connect to IB TWS or Gateway
    ib.connect(host, parseInt(port), parseInt(clientId));

    // Define stock contract using the provided functions
    const contractDetails = contract.stock(stockSymbol, exchange, currency);

    // Prepare order details using the provided functions
    let orderDetails;
    switch (orderType.toUpperCase()) {
      case "LIMIT":
        orderDetails = order.limit(
          action.toUpperCase(),
          parseFloat(quantity),
          parseFloat(price)
        );
        break;
      case "MARKET":
        orderDetails = order.market(action.toUpperCase(), parseFloat(quantity));
        break;
      case "STOP":
        orderDetails = order.stop(
          action.toUpperCase(),
          parseFloat(quantity),
          parseFloat(price)
        );
        break;
      // Add more order types as needed
      default:
        return res.status(400).json({ message: "Invalid order type" });
    }

    // Place the order
    ib.placeOrder(contractDetails, orderDetails, (err, trade) => {
      if (err) {
        console.error("Error placing order:", err.message);
        res
          .status(500)
          .json({ message: "Failed to place order", error: err.message });
      } else {
        console.log("Order placed successfully:", trade);
        // Save order details to MongoDB
        const newOrder = new Order({
          clientId,
          host,
          port,
          stockSymbol,
          exchange,
          currency,
          orderType,
          action,
          quantity,
        });
        newOrder.save();

        res.status(200).json({ message: "Order placed successfully", trade });
      }

      // Disconnect after placing order
      ib.disconnect();
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Order not placed", error: error.message });
  }
};
