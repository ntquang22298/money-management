import React, { useEffect } from 'react';
import { ColumnChart } from 'bizcharts';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/expenses';
const ExpenseChart = () => {
  const expenseReducer = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getDailyExpense());
  }, [dispatch]);
  return (
    <ColumnChart
      height={150}
      autoFit
      data={expenseReducer.dailyExpense}
      xField='date'
      yField='amount'
      xAxis={{ title: { visible: false } }}
      yAxis={{ title: { visible: false } }}
      meta={{
        amount: {
          alias: 'balance',
          formatter: (v) => {
            return new Intl.NumberFormat().format(v);
          },
        },
      }}
    />
  );
};

export default ExpenseChart;
