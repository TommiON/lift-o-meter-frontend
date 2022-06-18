import React from 'react'
import { GetPlainName} from '../utils/WorkoutHelpers'
import Repetitions from './Repetitions'
import { NordicNotation } from '../utils/WorkoutHelpers'
import { ExerciseCell, LoadCell} from '../styles/Table'

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
                    <ExerciseCell>{GetPlainName(exerciseData.kind)}</ExerciseCell>
                    <ExerciseCell>{NordicNotation(exerciseData.load)} kg</ExerciseCell>
                </tr>
            </div>
        )
    }

    if(active) {
        return(
            <div>
                <tr>
                    <ExerciseCell>{GetPlainName(exerciseData.kind)}</ExerciseCell>
                    <LoadCell>{NordicNotation(exerciseData.load)} kg</LoadCell>
                    <td><Repetitions exerciseName={exerciseData.kind} repUpdateCallback={repsUpdated} /></td>
                </tr>
            </div>
        )
    }

    if(done) {
        return(
            <div>
                <tr>
                    <ExerciseCell>{GetPlainName(exerciseData.kind)}</ExerciseCell>
                    <LoadCell>{NordicNotation(exerciseData.load)} kg</LoadCell>
                </tr>
            </div>
        )
    }

    return(
        <div></div>
    )
}

export default Exercise