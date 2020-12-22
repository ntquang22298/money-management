import React from 'react';
import { Progress } from 'antd';

const ExpenseBudget = () => {
  return (
    <div className='expense-budget'>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <p>Travel</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <p>Travel</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <p>Travel</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <p>Travel</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <p>Travel</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <p>Travel</p>
        <p>225$</p>
      </div>
    </div>
  );
};
export default ExpenseBudget;
