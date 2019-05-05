const INITIAL_STATE = {
  searchResult: [],
  searchLoading: true,
  searchError: false 
}

export default function searchCustomerInList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_CUSTOMER_IN_LIST":
      return state;
    case "SEARCH_CUSTOMER_SUCCESS": 
      return {
        ...state,
        searchResult: action.payload.data,
        searchLoading: false,
        searchError: false
      };
    case "SEARCH_CUSTOMER_FALIURE":
      return {
        ...state,
        searchResult: [],
        searchLoading: false,
        searchError: true
      };
    default:
      return state;
  }
}