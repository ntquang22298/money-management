import React from 'react';
import { DonutChart } from 'bizcharts';
// 数据源

const RingChart = (props) => {
  return (
    <DonutChart
      data={props.expenseReducer.expenseByType || []}
      forceFit
      radius={0.8}
      padding='auto'
      angleField='amount'
      colorField='type'
      pieStyle={{ stroke: 'white', lineWidth: 5 }}
      tooltip={{ visible: true }}
      statistic={{
        totalLabel: 'Total',
      }}
      animation={false}
      label={{ visible: false }}
      meta={{
        amount: {
          formatter: (v) => {
            return new Intl.NumberFormat().format(v);
          },
        },
      }}
    />
  );
};

export default RingChart;
