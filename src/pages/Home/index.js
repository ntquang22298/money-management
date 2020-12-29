import React, { useEffect } from 'react';
import Balance from '../../components/Balance';
import BalanceChart from '../../components/Charts/Balance';
import DailyBudget from '../../components/DailyBudget';
import ToolsBar from '../../components/ToolsBar';
import * as balanceAction from '../../actions/balance';
import * as incomeAction from '../../actions/incomes';
import * as expenseAction from '../../actions/expenses';
import * as savingAction from '../../actions/saving';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(balanceAction.getCurrentBalance());
    dispatch(balanceAction.getMonthlyBalance());
    dispatch(incomeAction.getAllIncome());
    dispatch(expenseAction.getAllExpense());
    dispatch(savingAction.getAllSaving());
    dispatch(expenseAction.getTodayExpense());
  }, [dispatch]);

  const balanceReducer = useSelector((state) => state.balance);
  const incomeReducer = useSelector((state) => state.income);
  const expenseReducer = useSelector((state) => state.expense);
  const savingReducer = useSelector((state) => state.saving);

  return (
    <div>
      <Balance balanceReducer={balanceReducer} />
      <ToolsBar
        incomeReducer={incomeReducer}
        expenseReducer={expenseReducer}
        savingReducer={savingReducer}
      />
      <BalanceChart balanceReducer={balanceReducer} />
      <DailyBudget expenseReducer={expenseReducer} />
    </div>
  );
};

export default Home;
