import React from 'react';
import { Progress } from 'antd';
import {
  FaGasPump,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaMusic,
} from 'react-icons/fa';
const ExpenseBudget = () => {
  return (
    <div className='expense-budget'>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <span className='progress-icon'>
          <FaGasPump />
        </span>
        <p>Fuel</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <span className='progress-icon'>
          <FaHamburger />
        </span>
        <p>Food</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <span className='progress-icon'>
          <FaHome />
        </span>
        <p>Home</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <span className='progress-icon'>
          <FaShoppingCart />
        </span>
        <p>Shopping</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <span className='progress-icon'>
          <FaMusic />
        </span>
        <p>Entertainment</p>
        <p>225$</p>
      </div>
      <div className='expense-card'>
        <Progress type='dashboard' percent={75} />
        <span className='progress-icon'>
          <FaFileInvoiceDollar />
        </span>
        <p>Other</p>
        <p>225$</p>
      </div>
    </div>
  );
};
export default ExpenseBudget;
