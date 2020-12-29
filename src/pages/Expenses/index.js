import React, { useEffect } from 'react';
import ExpensesStatistic from '../../components/ExpensesStatistic';
import ExpenseHistory from '../../components/ExpenseHistory';
// import SearchBox from '../../components/SearchBox';
import { Row, Col } from 'antd';
import RingChart from '../../components/RingChart';
import ExpenseBudget from '../../components/ExpenseBudget';
import { useDispatch, useSelector } from 'react-redux';

import * as expenseAction from '../../actions/expenses';

const ExpensesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseAction.getAllExpense());
    dispatch(expenseAction.getLatesExpense());
  }, [dispatch]);

  const expenseReducer = useSelector((state) => state.expense);

  return (
    <div>
      {/* <SearchBox /> */}
      <ExpensesStatistic expenseReducer={expenseReducer} />
      <Row style={{ paddingTop: 30, minHeight: 400 }}>
        <Col lg={12}>
          <RingChart expenseReducer={expenseReducer} />
        </Col>
        <Col lg={12}>
          <ExpenseHistory expenseReducer={expenseReducer} />
        </Col>
      </Row>
      <ExpenseBudget expenseReducer={expenseReducer} />
    </div>
  );
};
export default ExpensesPage;
