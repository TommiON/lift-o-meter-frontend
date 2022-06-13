import React, {useState, useEffect} from 'react'
import SpinnerIndicator from './SpinnerIndicator'
import workoutService from '../services/WorkoutService'
import moveSetService from '../services/MoveSetService'
import MoveSet from './MoveSet'
import { StandardButton } from '../styles/Buttons'
import DecreaseUsingRollover from '../utils/DecreaseUsingRollover'
import { FormatDateString } from '../utils/FormatDateString'
import {FindUniqueEntries, GetPlainName} from '../utils/WorkoutHelpers'
import Exercise from './Exercise'

const Workout = ({ id, serialNumber, started, finished, date, exercises, startCallback, finishCallback }) => {

    const [upcoming, setUpcoming] = useState(!started && !finished)
    const [active, setActive] = useState(started && !finished)
    const [done, setDone] = useState(finished)
    const [exerciseState, setExerciseState] = useState(exercises)

    const start = (id) => {
        setActive(true) // nämä veke, menee Workoutlistin tilan (tietokannan) kautta
        setUpcoming(false) //
        startCallback(id)
    }

    const finish = (id) => {
        setDone(true) // nämä veke, menee Workoutlistin tilan (tietokannan) kautta
        setActive(false) //
        finishCallback(id)
    }

    return(
        <div>
            {upcoming ? <h6><StandardButton onClick={() => start(id)}>Aloita {serialNumber}. treeni</StandardButton> </h6> : ''}
            {active ? <h6>Käynnissä: <StandardButton onClick={() => finish(id)}>Valmis</StandardButton></h6> : ''}
            {done ?  <h6>{FormatDateString(date)}</h6> : ''}
            {exercises.map(
                exercise => <p key={exercise.id}>{exercise.kind}</p>
            )}
        </div>
    )
}

export default Workout