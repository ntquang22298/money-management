import React from 'react';
import { Row, Col, Statistic, Progress } from 'antd';
import { FaDollarSign } from 'react-icons/fa';

const DailyBudget = (props) => {
  return (
    <div className='daily-budget'>
      <Row gutter={16}>
        <Col md={6}>
          <div className='budget'>
            <Statistic title='Daily Budget' value={112893} prefix={<FaDollarSign />} />
          </div>
        </Col>
        <Col md={18}>
          <div className='spent'>
            <Row>
              <Col md={6}>
                <Statistic
                  title='Spent today'
                  value={props.expenseReducer.todayExpense}
                  prefix={<FaDollarSign />}
                />
              </Col>
              <Col md={18} style={{ alignItems: 'center', display: 'flex' }}>
                <Progress
                  percent={
                    (props.expenseReducer.todayExpense / 100000000) * 100 >= 100
                      ? 100
                      : (props.expenseReducer.todayExpense / 100000000) * 100
                  }
                  size='small'
                  status='active'
                  strokeColor='#1B43C6'
                  showInfo={false}
                  strokeWidth={25}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DailyBudget;
