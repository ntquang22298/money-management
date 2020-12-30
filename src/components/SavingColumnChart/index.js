import React from 'react';
import { ColumnChart } from 'bizcharts';

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

const SavingColumnChart = (props) => {
  return (
    <div className='balance-chart'>
      <ColumnChart
        height={200}
        autoFit
        data={props.savingReducer.annualSaving}
        xField='month'
        yField='amount'
        xAxis={{ title: { visible: false } }}
        yAxis={{ title: { visible: false } }}
        animation={false}
        meta={{
          amount: {
            alias: 'balance',
            formatter: (v) => {
              return new Intl.NumberFormat().format(v);
            },
          },
        }}
      />
    </div>
  );
};

export default SavingColumnChart;
