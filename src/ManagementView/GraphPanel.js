import React, { Component } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  Legend
} from 'recharts';
import { LargePanel } from './ManageView';
import Colors from '../Colors';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class GraphPanel extends Component {
  render() {
    return (
      <LargePanel>
        <ResponsiveContainer>
          <AreaChart width={600} height={400} data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <Legend verticalAlign="top" height={36}/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stackId="1" stroke={Colors.red} fill={Colors.red} />
            <Area type='monotone' dataKey='pv' stackId="1" stroke={Colors.green} fill={Colors.green} />
          </AreaChart>
        </ResponsiveContainer>
      </LargePanel>
    )
  }
}
