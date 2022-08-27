import React, { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts'
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
            console.log(history)
            setSquats(history.squats)
            setBenches(history.benches)
            setRows(history.rows)
            setOverheads(history.overheads)
            setDeadlifts(history.deadlifts)
        }
        fetchHistory()
    }, [])

    return(
        <div>
            {console.log('stats, squats: ', squats)}
            {console.log('stats, benches: ', benches)}
            <LineChart width={550} height={400} >
                <Line data={squats} name='kyykky' type="monotone" dataKey="load" stroke="blue" />
                <Line data={benches} name='penkkipunnerrus' type="monotone" dataKey="load" stroke="red" />
                <Line data={rows} name='kulmasoutu' type="monotone" dataKey="load" stroke="green" />
                <Line data={overheads} name='pystypunnerrus' type="monotone" dataKey="load" stroke="violet" />
                <Line data={deadlifts} name='maastaveto' type="monotone" dataKey="load" stroke="orange" />
                <Legend width={160} wrapperStyle={{ bottom: 90, right: -20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '15px' }} />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default Stats