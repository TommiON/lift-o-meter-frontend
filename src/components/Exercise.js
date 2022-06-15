import React, {useState, useEffect} from 'react'
import { GetPlainName} from '../utils/WorkoutHelpers'
import Repetitions from './Repetitions'

const Exercise = ({ exerciseData, upcoming, active, done, repUpdateCallback }) => {

    const repsUpdated = (reps) => {
        const updated = {
            exerciseName: exerciseData.kind,
            repetitions: reps
        }
        repUpdateCallback(updated)
    }

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
                    <td><Repetitions exerciseName={exerciseData.kind} repUpdateCallback={repsUpdated} /></td>
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