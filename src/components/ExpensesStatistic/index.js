import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { FaDollarSign } from 'react-icons/fa';
import ExpenseChart from '../ExpenseChart';
const ExpensesStatistic = () => {
  return (
    <div className='expense-statistic'>
      <Row gutter={16}>
        <Col md={6}>
          <div className='expenses'>
            <Statistic title='All expenses' value={112893} prefix={<FaDollarSign />} />
          </div>
        </Col>
        <Col md={18}>
          <div className='line-chart'>
            <ExpenseChart />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ExpensesStatistic;
