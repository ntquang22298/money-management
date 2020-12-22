import React from 'react';
import { Chart, Interval, Tooltip } from 'bizcharts';

const data = [
  { month: '1', sales: 100 },
  { month: '2', sales: 52 },
  { month: '3', sales: 61 },
  { month: '4', sales: 45 },
  { month: '5', sales: 48 },
  { month: '6', sales: 58 },
  { month: '7', sales: 38 },
  { month: '8', sales: 48 },
  { month: '9', sales: 78 },
  { month: '10', sales: 18 },
  { month: '11', sales: 28 },
  { month: '12', sales: 38 },
  { month: '13', sales: 20 },
  { month: '14', sales: 38 },
  { month: '15', sales: 32 },
  { month: '16', sales: 38 },
  { month: '17', sales: 40 },
  { month: '18', sales: 38 },
  { month: '19', sales: 50 },
  { month: '20', sales: 34 },
  { month: '21', sales: 38 },
  { month: '22', sales: 38 },
  { month: '23', sales: 38 },
  { month: '24', sales: 38 },
  { month: '25', sales: 20 },
  { month: '26', sales: 20 },
  { month: '27', sales: 99 },
  { month: '28', sales: 38 },
  { month: '29', sales: 38 },
  { month: '30', sales: 38 },
];

const BalanceChart = () => {
  return (
    <div className='balance-chart'>
      <Chart height={250} autoFit data={data} interactions={['active-region']} padding='auto'>
        <Interval position='month*sales' />
        <Tooltip shared />
      </Chart>
    </div>
  );
};

export default BalanceChart;
