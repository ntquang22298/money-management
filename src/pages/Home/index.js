import React from 'react';

import Balance from '../../components/Balance';
import BalanceChart from '../../components/Charts/Balance';
import DailyBudget from '../../components/DailyBudget';
import ToolsBar from '../../components/ToolsBar';

const Home = () => {
  return (
    <div>
      <Balance />
      <ToolsBar />
      <BalanceChart />
      <DailyBudget />
    </div>
  );
};
export default Home;
