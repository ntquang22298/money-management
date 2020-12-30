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

  dispatch({
    type: actionType.CREATE_SAVING,
  });
  await dispatch(getAnnualSaving);

  dispatch(getLatesLedger());
};
export const getAnnualSaving = () => async (dispatch) => {
  let array = [];
  let sum = 0;
  let goals = { macbook: 0, travel: 0, rings: 0 };

  for (let i = 0; i < 12; i++) {
    array.push({ month: i + 1, amount: 0 });
  }
  let res = await services.getAllSaving();
  res.forEach((doc) => {
    sum += doc.data().amount;
    goals[doc.data().target] += doc.data().amount;
    for (let i = 0; i < array.length; i++) {
      if (doc.data().month === i) {
        array[i].amount += doc.data().amount;
      }
    }
  });
  dispatch({
    type: actionType.GET_ANNUAL_SAVING,
    annualSaving: array,
    totalThisYear: sum,
    goals: goals,
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
