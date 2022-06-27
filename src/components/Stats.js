import React, { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import statsService from '../services/StatsService'

const Stats = () => {

    const [squats, setSquats] = useState(null)
    const [benches, setBenches] = useState(null)
    const [rows, setRows] = useState(null)
    const [overheads, setOverheads] = useState(null)
    const [deadlifts, setDeadlifts] = useState(null)

    useEffect(() => {
        async function fetchHistory() {
            const history = await statsService.get()
            setSquats(history.squats)
            setBenches(history.benches)
            setRows(history.rows)
            setOverheads(history.overheads)
            setDeadlifts(history.deadlifts)
        }
        fetchHistory()
    }, [])

    console.log('kyykkyhistoria: ', squats)

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
                <Line data={squats} type="monotone" dataKey="load" stroke="blue" />
                <Line data={benches} type="monotone" dataKey="load" stroke="red" />
                <Line data={rows} type="monotone" dataKey="load" stroke="green" />
                <Line data={overheads} type="monotone" dataKey="load" stroke="violet" />
                <Line data={deadlifts} type="monotone" dataKey="load" stroke="orange" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default Stats