import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import expenseReducer from './expenseReducer';
import incomeReducer from './incomeReducer';
import ledgerReducer from './ledgerReducer';
import savingReducer from './savingReducer';
const rootReducer = combineReducers({
  expense: expenseReducer,
  ledger: ledgerReducer,
  income: incomeReducer,
  balance: balanceReducer,
  saving: savingReducer,
});
export default rootReducer;
