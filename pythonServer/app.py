import asyncio
from flask import Flask, request, jsonify
from ib_insync import *
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Set up logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/api/place-order', methods=['POST'])
def place_order():
    try:
        data = request.json
        logging.debug(f"Received data: {data}")

        # Validate the input data
        required_fields = ['clientId', 'host', 'port', 'stockSymbol', 'exchange', 'currency', 'orderType', 'action', 'quantity']
        for field in required_fields:
            if field not in data:
                logging.error(f"Missing field: {field}")
                return jsonify({'status': 'error', 'message': f'Missing field: {field}'}), 400

        # Extract data from the request
        client_id = data['clientId']
        host = data['host']
        port = data['port']
        stock_symbol = data['stockSymbol']
        exchange = data['exchange']
        currency = data['currency']
        order_type = data['orderType']
        action = data['action']
        quantity = data['quantity']
        price = data.get('price', None)  # Optional for Market orders

        # Create an event loop
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

        # Connect to IB
        logging.debug(f"Connecting to IB at {host}:{port} with client ID {client_id}")
        ib = IB()
        ib.connect(host, port, clientId=client_id)
        logging.info("Connected to IB")

        # Create contract
        contract = Stock(stock_symbol, exchange, currency)
        contract = ib.qualifyContracts(contract)[0]
        logging.debug(f"Qualified contract: {contract}")

        # Place order
        if order_type == 'Market':
            order = MarketOrder(action, quantity)
        else:
            order = LimitOrder(action=action, totalQuantity=quantity, lmtPrice=price)

        trade = ib.placeOrder(contract, order)
        ib.sleep(1)
        logging.debug(f"Order placed: {trade}")

        # Return order confirmation
        return jsonify({'status': 'success', 'trade': str(trade)})

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=4000)
