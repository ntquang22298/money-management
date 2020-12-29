import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { FaMoneyBillWaveAlt, FaDollarSign } from 'react-icons/fa';

const ExpenseHistory = () => {
  return (
    <div className='expense-history'>
      <p className='title'>History</p>
      <ul>
        <li>
          <Row>
            <Col xs={4} className='icon'>
              <FaMoneyBillWaveAlt style={{ color: 'green' }} />
            </Col>
            <Col xs={14}>
              <p>Withdraw to Momo</p>
              <small>10/10/2020</small>
            </Col>
            <Col xs={6}>
              <Statistic
                value={1000000}
                valueStyle={{ color: 'red' }}
                prefix={<FaDollarSign style={{ fontSize: 15 }} />}
              />
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col xs={4} className='icon'>
              <FaMoneyBillWaveAlt style={{ color: 'green' }} />
            </Col>
            <Col xs={14}>
              <p>Deposit from VCB</p>
              <small>10/10/2020</small>
            </Col>
            <Col xs={6}>
              <Statistic
                value={1000000}
                valueStyle={{ color: 'green' }}
                prefix={<FaDollarSign style={{ fontSize: 15 }} />}
              />
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col xs={4} className='icon'>
              <FaMoneyBillWaveAlt style={{ color: 'green' }} />
            </Col>
            <Col xs={14}>
              <p>Deposit from VCB</p>
              <small>10/10/2020</small>
            </Col>
            <Col xs={6}>
              <Statistic
                value={1000000}
                valueStyle={{ color: 'green' }}
                prefix={<FaDollarSign style={{ fontSize: 15 }} />}
              />
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
export default ExpenseHistory;
