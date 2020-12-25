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
];

const SavingColumnChart = () => {
  return (
    <div className='balance-chart'>
      <Chart height={200} autoFit data={data} interactions={['active-region']} padding='auto'>
        <Interval position='month*sales' />
        <Tooltip shared />
      </Chart>
    </div>
  );
};

export default SavingColumnChart;