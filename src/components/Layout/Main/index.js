import React from 'react';
import Balance from '../../Balance';
import BalanceChart from '../../Charts/Balance';
import DailyBudget from '../../DailyBudget';
import ToolsBar from '../../ToolsBar';

const Main = () => {
  return (
    <div>
      <Balance />
      <ToolsBar />
      <BalanceChart />
      <DailyBudget />
    </div>
  );
};
export default Main;
