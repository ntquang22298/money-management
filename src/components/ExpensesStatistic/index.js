import React, { useEffect } from 'react';
import { Row, Col, Statistic } from 'antd';
import { FaDollarSign } from 'react-icons/fa';
import ExpenseChart from '../ExpenseChart';

const ExpensesStatistic = (props) => {
  return (
    <div className='expense-statistic'>
      <Row gutter={16}>
        <Col md={6}>
          <div className='expenses'>
            <Statistic
              title='All expenses'
              value={props.expenseReducer.monthlyExpense}
              prefix={<FaDollarSign />}
            />
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
