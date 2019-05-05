const INITIAL_STATE = {
  data: [],
  loading: true,
  error: false
};

export default function customersList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_CUSTOMERS_LIST":
      return state;
    case "SUCCESS_CUSTOMERS_LIST":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case "FALIURE_CUSTOMERS_LIST":
      return { ...state, data: [], loading: false, error: true };
    default:
      return state;
  }
}
