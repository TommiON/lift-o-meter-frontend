import React, {useState, useEffect} from 'react'
import DecreaseUsingRollover from '../utils/DecreaseUsingRollover'
import {FindUniqueEntries, GetPlainName} from '../utils/WorkoutHelpers'
import { StandardButton, RepButton } from '../styles/Buttons'
import Repetitions from './Repetitions'

const Exercise = ({ exerciseData, upcoming, active, done, repUpdateCallback }) => {

    if(upcoming) {
        return(
            <div>
                <tr>
                    <td>{GetPlainName(exerciseData.kind)}</td>
                    <td>{exerciseData.load} kg</td>
                </tr>
            </div>
        )
    }

    if(active) {
        let repIndex = -1
        return(
            <div>
                <tr>
                    <td>{GetPlainName(exerciseData.kind)}</td>
                    <td>{exerciseData.load} kg</td>
                    <td><Repetitions exerciseName={exerciseData.kind}/></td>
                </tr>
            </div>
        )
    }

    if(done) {
        return(
            <div>
                <tr>
                    <td>{GetPlainName(exerciseData.kind)}</td>
                    <td>{exerciseData.load} kg</td>
                </tr>
            </div>
        )
    }

    return(
        <div></div>
    )
}

export default Exercise