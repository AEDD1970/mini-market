import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

import { PAY_PRODUCTS, PAY_PRODUCTS_SUCESS, PAY_PRODUCTS_ERROR } from "../constants/ShoppingProduct";
const API = "https://production.wompi.co/v1"

function requestWompitAxios(dataproduct){
  return axios({
    method: 'POST',
    url: `${API}/transactions`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify(dataproduct),
  })
    .then((response) => {
      return response.data
    })
    .catch(error => {
      throw error.response?.data
    });
}

function* requestPayment(action){
  try {
    const dataPay= yield call(requestWompitAxios, action.payload)
    yield put({type: PAY_PRODUCTS_SUCESS, message: dataPay})
  } catch (error) {
    yield put({ type: PAY_PRODUCTS_ERROR, message: error ? String(error.error) : "Error de conexión" });
  }
}

export default function* requestPayProduct() {
    yield takeEvery(PAY_PRODUCTS,requestPayment)
  }
  