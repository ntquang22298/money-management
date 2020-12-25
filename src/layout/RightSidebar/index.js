import React from 'react';
import Profile from '../../components/Profile';
import History from '../../components/History';
import MoneyFlow from '../../components/MoneyFlow';

const RightSidebar = () => {
  return (
    <div>
      <Profile />
      <MoneyFlow />
      <History />
    </div>
  );
};
export default RightSidebar;
