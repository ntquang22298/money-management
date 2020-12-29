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

const ExpenseBudget = (props) => {
  const budget = {
    Fuel: 5000000,
    Food: 1800000,
    Home: 1500000,
    Shopping: 1000000,
    Entertainment: 500000,
    Other: 1000000,
  };
  const getIcon = (type) => {
    switch (type) {
      case 'Fuel':
        return <FaGasPump />;
      case 'Food':
        return <FaHamburger />;
      case 'Home':
        return <FaHome />;
      case 'Shopping':
        return <FaShoppingCart />;
      case 'Entertainment':
        return <FaMusic />;
      case 'Other':
        return <FaFileInvoiceDollar />;
    }
  };
  return (
    <div className='expense-budget'>
      {props.expenseReducer.expenseByType.map((item, index) => (
        <div className='expense-card' key={index}>
          <Progress
            type='dashboard'
            percent={Math.round((item.amount / budget[item.type]) * 100)}
          />
          <span className='progress-icon'>{getIcon(item.type)}</span>
          <p>{item.type}</p>
          <p>{new Intl.NumberFormat().format(item.amount)}</p>
        </div>
      ))}
    </div>
  );
};
export default ExpenseBudget;
