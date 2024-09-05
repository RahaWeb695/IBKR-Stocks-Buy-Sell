from ib_insync import *
# util.startLoop()  # uncomment this line when in a notebook

ib = IB()
ib.connect('127.0.0.1', 7496, clientId=5)

contract = Stock('IBKR', 'SMART', 'USD')
contract = ib.qualifyContracts(contract)[0]
# print(contract)


#MarketOrder

ord = MarketOrder('SELL', 15)
trade = ib.placeOrder(contract, ord)
print(trade)
ib.sleep(1)
print(trade)

# ord = LimitOrder(totalQuantity=1, action='SELL', lmtPrice=525.00)
# trade = ib.placeOrder(contract, ord)
# print(trade)
# ib.sleep(1)
# print(trade)


# Trade(contract=Stock(conId=43645865, symbol='IBKR', exchange='SMART', primaryExchange='ISLAND', currency='USD', localSymbol='IBKR', tradingClass='NMS'), order=MarketOrder(orderId=16, clientId=5, action='BUY', totalQuantity=1), orderStatus=OrderStatus(orderId=16, status='PendingSubmit', filled=0.0, remaining=0.0, avgFillPrice=0.0, permId=0, parentId=0, lastFillPrice=0.0, clientId=0, whyHeld='', mktCapPrice=0.0), fills=[], log=[TradeLogEntry(time=datetime.datetime(2024, 8, 22, 15, 1, 1, 65121, tzinfo=datetime.timezone.utc), status='PendingSubmit', message='', errorCode=0)], advancedError='')
# Trade(contract=Stock(conId=43645865, symbol='IBKR', exchange='SMART', primaryExchange='ISLAND', currency='USD', localSymbol='IBKR', tradingClass='NMS'), order=MarketOrder(orderId=16, clientId=5, permId=518473177, action='BUY', totalQuantity=1.0, lmtPrice=0.0, auxPrice=0.0), orderStatus=OrderStatus(orderId=16, status='Submitted', filled=0.0, remaining=1.0, avgFillPrice=0.0, permId=518473177, parentId=0, lastFillPrice=0.0, clientId=5, whyHeld='', mktCapPrice=0.0), fills=[], log=[TradeLogEntry(time=datetime.datetime(2024, 8, 22, 15, 1, 1, 65121, tzinfo=datetime.timezone.utc), status='PendingSubmit', message='', errorCode=0), TradeLogEntry(time=datetime.datetime(2024, 8, 22, 15, 1, 1, 418475, tzinfo=datetime.timezone.utc), status='Submitted', message='', errorCode=0)], advancedError='')

#Order

# M
# ord = Order(orderId=5558, orderType='MKT', totalQuantity=1, action='BUY')
# trade = ib.placeOrder(contract, ord)
# print(trade)
# ib.sleep(1)
# print(trade)

# Trade(contract=Stock(conId=43645865, symbol='IBKR', exchange='SMART', primaryExchange='ISLAND', currency='USD', localSymbol='IBKR', tradingClass='NMS'), order=Order(orderId=5555, clientId=5, action='BUY', totalQuantity=1, orderType='MKT'), orderStatus=OrderStatus(orderId=5555, status='PendingSubmit', filled=0.0, remaining=0.0, avgFillPrice=0.0, permId=0, parentId=0, lastFillPrice=0.0, clientId=0, whyHeld='', mktCapPrice=0.0), fills=[], log=[TradeLogEntry(time=datetime.datetime(2024, 8, 22, 15, 6, 29, 143387, tzinfo=datetime.timezone.utc), status='PendingSubmit', message='', errorCode=0)], advancedError='')
# Trade(contract=Stock(conId=43645865, symbol='IBKR', exchange='SMART', primaryExchange='ISLAND', currency='USD', localSymbol='IBKR', tradingClass='NMS'), order=Order(orderId=5555, clientId=5, permId=518473180, action='BUY', totalQuantity=1.0, orderType='MKT', lmtPrice=0.0, auxPrice=0.0), orderStatus=OrderStatus(orderId=5555, status='Submitted', filled=0.0, remaining=1.0, avgFillPrice=0.0, permId=518473180, parentId=0, lastFillPrice=0.0, clientId=5, whyHeld='', mktCapPrice=0.0), fills=[], log=[TradeLogEntry(time=datetime.datetime(2024, 8, 22, 15, 6, 29, 143387, tzinfo=datetime.timezone.utc), status='PendingSubmit', message='', errorCode=0), TradeLogEntry(time=datetime.datetime(2024, 8, 22, 15, 6, 29, 469423, tzinfo=datetime.timezone.utc), status='Submitted', message='', errorCode=0)], advancedError='')

#L
# ord = Order(orderId=5561, orderType='LMT', totalQuantity=1, action='BUY', lmtPrice=530)
# trade = ib.placeOrder(contract, ord)
# print(trade)
# ib.sleep(1)
# print(trade)

#Limit Order

# ord = LimitOrder(totalQuantity=1, action='SELL', lmtPrice=539.60)
# trade = ib.placeOrder(contract, ord)
# print(trade)
# ib.sleep(1)
# print(trade)