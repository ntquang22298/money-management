import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { FaMoneyBillWaveAlt, FaDollarSign } from 'react-icons/fa';

const ExpenseHistory = (props) => {
  return (
    <div className='expense-history'>
      <p className='title'>History</p>
      <ul>
        {props.expenseReducer.latesExpense.docs &&
          props.expenseReducer.latesExpense.docs.map((item, index) => (
            <li key={index}>
              <Row>
                <Col xs={4} className='icon'>
                  <FaMoneyBillWaveAlt style={{ color: 'green' }} />
                </Col>
                <Col xs={14}>
                  <p>{item.data().description}</p>
                  <small>
                    {item.data().date}/{item.data().month + 1}/{item.data().year}
                  </small>
                </Col>
                <Col xs={6}>
                  <Statistic
                    value={item.data().amount}
                    valueStyle={{ color: 'red' }}
                    prefix={<FaDollarSign style={{ fontSize: 15 }} />}
                  />
                </Col>
              </Row>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ExpenseHistory;
