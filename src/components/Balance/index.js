import React from 'react';
import { Row, Col, Space } from 'antd';
import background from '../../images/background.png';

const Balance = (props) => {
  return (
    <div className='balance'>
      <Row gutter={16}>
        <Col md={12} style={{ alignSelf: 'center' }}>
          <Space direction='vertical'>
            <p className='sub-title'>Total Balance</p>
            <p className='total-balance'>
              <span>$ </span>
              {new Intl.NumberFormat('us-US').format(props.balanceReducer.total)}
            </p>
            {/* <p className='statistic'>
              <FaArrowUp /> 10.00 % ($ {new Intl.NumberFormat('us-US').format(10000000)})
            </p> */}
          </Space>
        </Col>
        <Col md={12} style={{ textAlign: 'center' }}>
          <img src={background} alt='background' />
        </Col>
      </Row>
    </div>
  );
};
export default Balance;
