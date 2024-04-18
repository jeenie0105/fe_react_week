import React from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const BarChartComp = ({barData}) => {
  return (
    <div>
        <BarChart width={500} height={250} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    </div>
  )
}

export default BarChartComp
