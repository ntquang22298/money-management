import { message } from 'antd';
import { actionType } from '../consts/expense';
import { types } from '../consts/ledger';
import services from '../services/ledger';
import { getLatesLedger } from './ledger';
import { getCurrentBalance, getMonthlyBalance, updateBalance } from './balance';

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const daysInThisMonth = new Date(year, month, 0).getDate();
export const createExpense = (expense) => async (dispatch) => {
  let time = new Date();
  expense.date = time.getDate();
  expense.month = time.getMonth();
  expense.year = time.getFullYear();
  expense.type = types.DEBIT;

  let res = await services.addLedger(expense);
  if (res) message.success('debit success!');
  dispatch({
    type: actionType.CREATE_EXPENSE,
  });
  await dispatch(updateBalance(-expense.amount));

  dispatch(getLatesLedger());
  dispatch(getAllExpense());
  dispatch(getTodayExpense());
  dispatch(getMonthlyBalance());
  dispatch(getCurrentBalance());
};

export const getTodayExpense = () => async (dispatch) => {
  let res = await services.getTodayExpense();
  let sum = 0;
  res.forEach((doc) => {
    sum += doc.data().amount;
  });
  dispatch({
    type: actionType.GET_TODAY_EXPENSE,
    todayExpense: sum,
  });
};
export const getAllExpense = () => async (dispatch) => {
  let sum = 0;
  let expenseByType = [
    { type: 'Fuel', amount: 0 },
    { type: 'Food', amount: 0 },
    { type: 'Home', amount: 0 },
    { type: 'Shopping', amount: 0 },
    { type: 'Entertainment', amount: 0 },
    { type: 'Other', amount: 0 },
  ];
  let res = await services.getAllLedgers(types.DEBIT);
  res.forEach((doc) => {
    sum += doc.data().amount;
    expenseByType.forEach((e) => {
      if (e.type.toLowerCase() === doc.data().expenseType) {
        e.amount += doc.data().amount;
      }
    });
  });

  dispatch({
    type: actionType.GET_ALL_EXPENSES,
    monthlyExpense: sum,
    expenseByType: expenseByType,
  });
};
export const getDailyExpense = () => async (dispatch) => {
  let array = [];
  for (let i = 0; i < daysInThisMonth; i++) {
    array.push({ date: i + 1, amount: 0 });
  }

  let res = await services.getAllLedgers(types.DEBIT);
  for (let i = 0; i < array.length; i++) {
    res.forEach((doc) => {
      if (doc.data().date == i + 1) {
        array[i].amount += doc.data().amount;
      }
    });
  }
  dispatch({
    type: actionType.GET_DAILY_EXPENSE,
    dailyExpense: array,
  });
};
export const getLatesExpense = () => async (dispatch) => {
  let res = await services.getLatesExpense();
  dispatch({
    type: actionType.GET_LATES_EXPENSE,
    latesExpense: res,
  });
};
