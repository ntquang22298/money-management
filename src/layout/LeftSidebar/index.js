import React from 'react';
import { Menu } from 'antd';
import { FaHome, FaMoneyBillWave, FaPiggyBank } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LeftSidebar = () => {
  return (
    <div style={{ height: '100%' }}>
      <Menu mode='inline' className='menu'>
        <Menu.Item key='1' title='Home'>
          <Link to='/'>
            <FaHome style={{ color: 'blue' }} />
          </Link>
        </Menu.Item>
        <Menu.Item title='Expense' key='2'>
          <Link to='/expenses'>
            <FaMoneyBillWave style={{ color: 'green' }} />
          </Link>
        </Menu.Item>
        <Menu.Item title='Saving' key='3'>
          <Link to='/saving'>
            <FaPiggyBank style={{ color: '#ED4297' }} />
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default LeftSidebar;
