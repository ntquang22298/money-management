import React from 'react';
import { Menu } from 'antd';
import { FaHome, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LeftSidebar = () => {
  return (
    <div style={{ height: '100%' }}>
      <Menu mode='inline' inlineCollapsed={true} className='menu'>
        <Menu.Item key='1' title='Home'>
          <Link to='/'>
            <FaHome />
          </Link>
        </Menu.Item>
        <Menu.Item title='Expense' key='2'>
          <Link to='/expenses'>
            <FaMoneyBillWave />
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default LeftSidebar;
