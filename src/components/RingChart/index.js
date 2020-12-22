import React from 'react';
import { DonutChart, Interaction, Tooltip, Annotation } from 'bizcharts';
// 数据源
const data = [
  {
    type: 'Travel   ',
    value: 27,
  },
  {
    type: 'Eat',
    value: 25,
  },
  {
    type: 'Home',
    value: 18,
  },
  {
    type: 'Other',
    value: 15,
  },
  {
    type: 'Shopping',
    value: 10,
  },
  {
    type: 'Loan',
    value: 5,
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
