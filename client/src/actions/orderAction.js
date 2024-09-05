import * as api from "../api";

// clientId,
// host,
// port,
// stockSymbol,
// exchange,
// currency,
// orderType,
// action,
// quantity

export const sentOrderData = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_ORDER_REQUEST" });

    const { data } = await api.sendOrderDataApi(orderData);

    dispatch({ type: "FETCH_ORDER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "FETCH_ORDER_FAIL",
      payload: error,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
