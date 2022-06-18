import React from 'react'
import { GetPlainName} from '../utils/WorkoutHelpers'
import Repetitions from './Repetitions'
import { NordicNotation } from '../utils/WorkoutHelpers'
import { ExerciseCell, LoadCell} from '../styles/Table'
import { LoadText, SucceededLoadText, FailedLoadText } from '../styles/Text'

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
                    <LoadCell><LoadText>{NordicNotation(exerciseData.load)} kg</LoadText></LoadCell>
                </tr>
            </div>
        )
    }

    if(active) {
        return(
            <div>
                <tr>
                    <ExerciseCell>{GetPlainName(exerciseData.kind)}</ExerciseCell>
                    <LoadCell><LoadText>{NordicNotation(exerciseData.load)} kg</LoadText></LoadCell>
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
                    {exerciseData.failures > 0
                        ?
                        <LoadCell><FailedLoadText>{NordicNotation(exerciseData.load)} kg</FailedLoadText></LoadCell>
                        : 
                        <LoadCell><SucceededLoadText>{NordicNotation(exerciseData.load)} kg</SucceededLoadText></LoadCell>
                    }
                </tr>
            </div>
        )
    }

    return(
        <div></div>
    )
}

export default Exercise