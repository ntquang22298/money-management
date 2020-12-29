import { message } from 'antd';
import { actionTypes } from '../consts/ledger';
import services from '../services/ledger';

export const getAllLedgers = () => (dispatch) => {
  let res = services.getAllLedgers();
  dispatch({
    type: actionTypes.GET_ALL_LEDGERS,
    ledgers: res,
  });
};

export const getLatesLedger = () => async (dispatch) => {
  let res = await services.getLatesLedgers();
  dispatch({
    type: actionTypes.GET_LATES_LEDGERS,
    ledgers: res,
  });
};
