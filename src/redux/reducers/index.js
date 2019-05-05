import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import customersList from "./customersList";
import searchCustomerInList from "./searchCustomers";

export default history =>
  combineReducers({
    router: connectRouter(history),
    customersList,
    searchCustomerInList
  });