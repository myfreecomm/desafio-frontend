// import { push } from 'connected-react-router';
export function requestCustomersList() {
  return {
    type: 'REQUEST_CUSTOMERS_LIST',
  }
}

export function searchCustomerInList(customerName) {
  return {
    type: "SEARCH_CUSTOMER_IN_LIST",
    customerName
  };
}
