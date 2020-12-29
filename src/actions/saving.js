import { types } from '../consts/ledger';
import { message } from 'antd';
import { actionType } from '../consts/saving';
import services from '../services/ledger';

import { getLatesLedger } from './ledger';

export const createSaving = (saving) => async (dispatch) => {
  let time = new Date();
  saving.date = time.getDate();
  saving.month = time.getMonth();
  saving.year = time.getFullYear();
  saving.type = types.SAVING;

  let res = await services.addLedger(saving);
  if (res) message.success('save success!');
  // balance.updateBalance(-saving.amount, saving.source);
  // balance.updateBalance(saving.amount, saving.target);

  dispatch(getLatesLedger());
  dispatch({
    type: actionType.CREATE_SAVING,
  });
};
export const getAnnualSaving = () => async (dispatch) => {
  let array = [];
  for (let i = 0; i < 12; i++) {
    array.push({ month: i + 1, amount: 0 });
  }

  let res = await services.getAllSaving();
  for (let i = 0; i < array.length; i++) {
    res.forEach((doc) => {
      let timestamp = 0;
      if (doc.data().month == i && doc.data().timestamp > timestamp) {
        array[i].amount = doc.data().amount;
        timestamp = doc.data().timestamp;
      }
    });
  }
  dispatch({
    type: actionType.GET_ANNUAL_SAVING,
    annualSaving: array,
  });
};
export const getAllSaving = () => async (dispatch) => {
  let sum = 0;
  let res = await services.getAllLedgers(types.SAVING);
  res.forEach((doc) => {
    sum += doc.data().amount;
  });

  dispatch({
    type: actionType.GET_ALL_SAVING,
    monthlySaving: sum,
  });
};
