import React, { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const Stats = () => {

    const testData= [
        {x: 1, kg: 70},
        {x: 2, kg: 72.5},
        {x: 3, kg: 60.5},
        {x: 4, kg: 65},
        {x: 5, kg: 75},
        {x: 6, kg: 77.5}
    ]

    const testData2= [
        {x: 1, kg: 100},
        {x: 2, kg: 72.5},
        {x: 3, kg: 120.5},
        {x: 4, kg: 125.5},
        {x: 5, kg: 130},
        {x: 6, kg: 132.5}
    ]

    const testData3= [
        {x: 1, kg: 105},
        {x: 2, kg: 72.5},
        {x: 3, kg: 120.5},
        {x: 4, kg: 125.5},
        {x: 5, kg: 130},
        {x: 6, kg: 140.5}
    ]

    return(
        <div>
            <LineChart width={550} height={400} >
                <Line data={testData} type="monotone" dataKey="kg" stroke="blue" />
                <Line data={testData2} type="monotone" dataKey="kg" stroke="red" />
                <Line data={testData3} type="monotone" dataKey="kg" stroke="green" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default Stats