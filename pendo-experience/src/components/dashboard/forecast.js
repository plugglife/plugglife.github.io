import React from 'react';
import './dashboard.css';

import { Card } from 'antd';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';


const data = [{name: 'Week 1', goal: 50000, actual: 45000},
              {name: 'Week 2', goal: 90000, actual: 98000},
              {name: 'Week 3', goal: 145000, actual: 147000},
              {name: 'Week 4', goal: 250000, actual: 265000},
              {name: 'Week 5', goal: 500000, actual: 467000},
              {name: 'Week 6', goal: 600000, actual: 489000},
              {name: 'Week 7', goal: 700000, actual: 603000},
              {name: 'Week 8', goal: 1100000, actual: 1020000},
              {name: 'Week 9', goal: 1230000, actual: 1150000},
              {name: 'Week 10', goal: 1500000, actual: 1230000, projection: 1230000},
              {name: 'Week 11', goal: 1700000, projection: 1640000},
              {name: 'Week 12', goal: 2340000, projection: 2460000}
];



const Forecast = () => (
	<Card title="Forecast" id="metrics">
  <ResponsiveContainer width="100%" height="85%">
      <ComposedChart
        data={data}

        margin={{
        top: 15, right: 15, bottom: 15, left: 15
        }}
      >
        <CartesianGrid stroke='#ddd' vertical={false}/>
        <XAxis dataKey="name" tickSize={4}/>
        <YAxis tickSize={4}/>
        <Tooltip />
        <Area type='monotone' dot={true} dataKey='actual' fill='#40a9ff' fillOpacity={1} strokeWidth={3} stroke='#1890ff'/>
        <Area type='monotone' dataKey='projection' fill='#40a9ff' fillOpacity={1} stroke='#1890ff' strokeDasharray="5 5" strokeWidth={3}/>
      </ComposedChart>
    </ResponsiveContainer>
	</Card>
);


export default Forecast;
