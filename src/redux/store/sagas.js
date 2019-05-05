import { takeLatest, put, call } from 'redux-saga/effects';
// import api from '../../services/api';
import fakeApi from "../../services/fakeApi";

function getCustomers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeApi);
    }, 1800);
  });
}

function* getCustomersList() {
  try {
    const response = yield call(getCustomers);
    yield put({ type: "SUCCESS_CUSTOMERS_LIST", payload: { data: response } });
  } catch (error) {
    yield put({ type: "FALIURE_CUSTOMERS_LIST" });
  }
}

export default function* rootSaga() {
  yield takeLatest('REQUEST_CUSTOMERS_LIST', getCustomersList);
}