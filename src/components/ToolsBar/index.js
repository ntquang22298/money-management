import React from 'react';
import { Row, Col, Statistic, Radio } from 'antd';

import { FaUpload, FaDownload, FaCalendar } from 'react-icons/fa';

const ToolsBar = () => {
  const options = [
    { label: 'Day', value: 'Day' },
    { label: 'Month', value: 'Month' },
  ];
  return (
    <div className='tools-bar'>
      <Row gutter={16}>
        <Col md={6}>
          <div className='card'>
            <Row gutter={16}>
              <Col xs={8} className='icon'>
                <FaUpload style={{ color: 'orange' }} />
              </Col>

              <Col xs={16}>
                <Statistic title='Expenses' value={112893} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <div className='card'>
            <Row gutter={16}>
              <Col xs={8} className='icon'>
                <FaDownload style={{ color: 'green' }} />
              </Col>

              <Col xs={16}>
                <Statistic title='Income' value={112893} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}></Col>
        <Col md={6}>
          <div className='card'>
            <Row gutter={16}>
              <Col xs={8} className='icon'>
                <FaCalendar />
              </Col>

              <Col xs={16}>
                <p>Time</p>
                <Radio.Group optionType='button' options={options} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ToolsBar;
