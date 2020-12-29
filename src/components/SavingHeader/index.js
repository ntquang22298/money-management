import React from 'react';
import { Row, Col, Space, Button } from 'antd';
import { FaArrowUp } from 'react-icons/fa';
import SavingColumnChart from '../SavingColumnChart';
const SavingHeader = () => {
  return (
    <div className='saving-header'>
      <Row>
        <Col md={10} style={{ display: 'flex', alignItems: 'center' }}>
          <Space direction='vertical'>
            <p className='sub-title'>Saving balance</p>
            <p className='total-balance'>
              <span>$ </span>
              {new Intl.NumberFormat('us-US').format(100000000)}
            </p>
            <p className='statistic'>
              <Button type='primary' style={{ borderRadius: 15, width: 150 }}>
                Add goal
              </Button>
            </p>
          </Space>
        </Col>
        <Col md={14} style={{ textAlign: 'center' }}>
          <SavingColumnChart />
        </Col>
      </Row>
    </div>
  );
};
export default SavingHeader;
