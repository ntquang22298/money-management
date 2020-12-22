import React from 'react';
import ExpensesStatistic from '../../components/ExpensesStatistic';
import ExpenseHistory from '../../components/ExpenseHistory';
import SearchBox from '../../components/SearchBox';
import { Row, Col } from 'antd';
import RingChart from '../../components/RingChart';
import ExpenseBudget from '../../components/ExpenseBudget';
const ExpensesPage = () => {
  return (
    <div>
      <SearchBox />
      <ExpensesStatistic />
      <Row style={{ paddingTop: 30, minHeight: 400 }}>
        <Col lg={12}>
          <RingChart />
        </Col>
        <Col lg={12}>
          <ExpenseHistory />
        </Col>
      </Row>
      <ExpenseBudget />
    </div>
  );
};
export default ExpensesPage;
