const initialState = {
  loading: false,
  orderReducerData: [],
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_REQUEST":
      return {
        loading: true,
        orderReducerData: [],
      };

    case "FETCH_ORDER_SUCCESS":
      return {
        loading: false,
        orderReducerData: action.payload,
      };

    case "FETCH_ORDER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
