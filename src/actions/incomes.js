import { message } from 'antd';
import { actionType } from '../consts/income';
import { types } from '../consts/ledger';
import services from '../services/ledger';
import { getLatesLedger } from './ledger';
import { getCurrentBalance, getMonthlyBalance, updateBalance } from './balance';

export const createIncome = (income) => async (dispatch) => {
  let time = new Date();
  income.date = time.getDate();
  income.month = time.getMonth();
  income.year = time.getFullYear();
  income.type = types.CREDIT;

  let res = await services.addLedger(income);
  if (res) message.success('credit success!');
  dispatch(getLatesLedger());
  dispatch({
    type: actionType.CREATE_INCOME,
  });
  await dispatch(updateBalance(income.amount));

  dispatch(getAllIncome());
  dispatch(getMonthlyBalance());
  dispatch(getCurrentBalance());
};

export const getAllIncome = () => async (dispatch) => {
  let sum = 0;
  let res = await services.getAllLedgers(types.CREDIT);
  res.forEach((doc) => {
    sum += doc.data().amount;
  });

  dispatch({
    type: actionType.GET_ALL_INCOMES,
    monthlyIncome: sum,
    allIncomes: res,
  });
};
