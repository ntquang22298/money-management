import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { FaUpload, FaDownload, FaDollarSign } from 'react-icons/fa';

const History = () => {
  return (
    <div className='history'>
      <p className='title'>History</p>
      <ul>
        <li>
          <Row>
            <Col xs={4} className='icon'>
              <FaUpload style={{ color: 'orange' }} />
            </Col>
            <Col xs={14}>
              <p>Withdraw to Momo</p>
              <small>10/10/2020</small>
            </Col>
            <Col xs={6}>
              <p>
                <Statistic
                  value={1000000}
                  valueStyle={{ color: 'red' }}
                  prefix={<FaDollarSign style={{ fontSize: 15 }} />}
                />
              </p>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col xs={4} className='icon'>
              <FaDownload style={{ color: 'green' }} />
            </Col>
            <Col xs={14}>
              <p>Deposit from VCB</p>
              <small>10/10/2020</small>
            </Col>
            <Col xs={6}>
              <p>
                <Statistic
                  value={1000000}
                  valueStyle={{ color: 'green' }}
                  prefix={<FaDollarSign style={{ fontSize: 15 }} />}
                />
              </p>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  );
};
export default History;
