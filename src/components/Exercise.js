import React from 'react'
import { GetPlainName} from '../utils/WorkoutHelpers'
import Repetitions from './Repetitions'
import { NordicNotation } from '../utils/WorkoutHelpers'

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
                    <td>{NordicNotation(exerciseData.load)} kg</td>
                </tr>
            </div>
        )
    }

    if(active) {
        return(
            <div>
                <tr>
                    <td>{GetPlainName(exerciseData.kind)}</td>
                    <td>{NordicNotation(exerciseData.load)} kg</td>
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
                    <td>{NordicNotation(exerciseData.load)} kg</td>
                </tr>
            </div>
        )
    }

    return(
        <div></div>
    )
}

export default Exercise