import React from 'react';
import { DonutChart, Interaction, Tooltip } from 'bizcharts';
// 数据源
const data = [
  {
    type: 'Fuel   ',
    value: 500000,
  },
  {
    type: 'Food',
    value: 1000000,
  },
  {
    type: 'Home',
    value: 4000000,
  },
  {
    type: 'Shopping',
    value: 5000000,
  },
  {
    type: 'Entertainment',
    value: 150000,
  },
  {
    type: 'Other',
    value: 500000,
  },
];

const RingChart = () => {
  return (
    <DonutChart
      data={data || []}
      forceFit
      radius={0.8}
      padding='auto'
      angleField='value'
      colorField='type'
      pieStyle={{ stroke: 'white', lineWidth: 5 }}
    >
      <Tooltip />
      <Interaction type='element-single-selected' />
    </DonutChart>
  );
};

export default RingChart;
