import { actionType } from '../consts/balance';
import services from '../services/balance';

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const daysInThisMonth = new Date(year, month, 0).getDate();

export const getMonthlyBalance = () => async (dispatch) => {
  let array = [];
  for (let i = 0; i < daysInThisMonth; i++) {
    array.push({ date: i + 1, amount: 0 });
  }

  let res = await services.getMonthlyBalance();
  for (let i = 0; i < array.length; i++) {
    res.forEach((doc) => {
      let timestamp = 0;
      if (doc.data().date == i + 1 && doc.data().timestamp > timestamp) {
        array[i].amount = doc.data().amount;
        timestamp = doc.data().timestamp;
      }
    });
  }
  dispatch({
    type: actionType.GET_MONTHLY_BALANCE,
    monthlyBalance: array,
  });
};

export const getCurrentBalance = () => async (dispatch) => {
  let res = await services.getCurrentBalance();
  dispatch({
    type: actionType.GET_CURRENT_BALANCE,
    total: res,
  });
};
export const updateBalance = (value) => async (dispatch) => {
  let res = await services.updateBalance(value);
  dispatch({
    type: actionType.UPDATE_BALANCE,
  });
};
