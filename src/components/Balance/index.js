import React from 'react';
import { Row, Col, Space } from 'antd';
import { FaArrowUp } from 'react-icons/fa';
import background from '../../images/background.png';
const Balance = () => {
  return (
    <div className='balance'>
      <Row gutter={16}>
        <Col md={12}>
          <Space direction='vertical'>
            <p className='sub-title'>Total Balance</p>
            <p className='total-balance'>
              <span>$ </span>
              {new Intl.NumberFormat('us-US').format(100000000)}
            </p>
            <p className='statistic'>
              <FaArrowUp /> 10.00 % ($ {new Intl.NumberFormat('us-US').format(10000000)})
            </p>
          </Space>
        </Col>
        <Col md={12} style={{ textAlign: 'center' }}>
          <img src={background} />
        </Col>
      </Row>
    </div>
  );
};
export default Balance;
