import React from 'react';
import { ColumnChart } from 'bizcharts';

const BalanceChart = (props) => {
  return (
    <div className='balance-chart'>
      <ColumnChart
        height={250}
        autoFit
        data={props.balanceReducer.monthlyBalance}
        interactions={['active-region']}
        padding='auto'
        tooltip={{ visible: true }}
        xField='date'
        yField='amount'
        xAxis={{ title: { visible: false } }}
        yAxis={{ title: { visible: false } }}
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

export default BalanceChart;
