import React from 'react';
//ant components
import { Row, Col, Statistic } from 'antd';
//import icons
import { FaUpload, FaDownload, FaPiggyBank } from 'react-icons/fa';

// const options = [
//   { label: 'Day', value: 'Day' },
//   { label: 'Month', value: 'Month' },
// ];

const ToolsBar = (props) => {
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
                <Statistic title=' Expenses' value={props.expenseReducer.monthlyExpense} />
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
                <Statistic title=' Income' value={props.incomeReducer.monthlyIncome} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}></Col>
        <Col md={6}>
          <div className='card'>
            <Row gutter={16}>
              <Col xs={8} className='icon'>
                <FaPiggyBank style={{ color: '#40A9FF' }} />
              </Col>

              <Col xs={16}>
                <Statistic title=' Saving' value={props.savingReducer.monthlySaving} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ToolsBar;
