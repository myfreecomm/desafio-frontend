import { takeLatest, put, call } from "redux-saga/effects";
import { push } from 'connected-react-router';
// import api from '../../services/api';
import fakeApi from "../../services/fakeApi";


// ESSA É UMA SIMULAÇAO DA API DEVOLVENDO OS RESULTADOS
function getCustomers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeApi);
    }, 1800);
  });
}

function normalizeString(text) {
  return text.replace(/\s/g, "").toLowerCase();
}

function searchCustomer(customerName) {
  const userInput = normalizeString(customerName);
  
  const result = fakeApi.filter(customer => {
    const name = normalizeString(customer.name);
    return name.indexOf(userInput) !== -1;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}
// FIM DAS FUNÇÕES DE SIMULAÇAO DA API

function* getCustomersList() {
  try {
    const response = yield call(getCustomers);
    yield put({ type: "SUCCESS_CUSTOMERS_LIST", payload: { data: response } });
  } catch (error) {
    yield put({ type: "FALIURE_CUSTOMERS_LIST" });
  }
}

function* searchCustomerInList(action) {
  try {
    const response = yield call(searchCustomer, action.customerName);
    yield put({ type: "SEARCH_CUSTOMER_SUCCESS", payload: { data: response } })
    yield put(push(`/search${normalizeString(action.customerName)}`))
  } catch (error) {
    yield put({ type: "SEARCH_CUSTOMER_FALIURE" });
  } 

}

export default function* rootSaga() {
  yield takeLatest("REQUEST_CUSTOMERS_LIST", getCustomersList);
  yield takeLatest('SEARCH_CUSTOMER_IN_LIST', searchCustomerInList);
}
