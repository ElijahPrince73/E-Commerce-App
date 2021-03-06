import axios from 'axios';
import { GET_ORDERS, GET_ORDER, ERROR } from './types';

const localToken = localStorage.getItem('token');

export const getOrders = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/orders`, {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_ORDERS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const getOrder = orderId => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/orders/${orderId}`, {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_ORDER, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};
