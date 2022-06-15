import React, {useState, useEffect} from 'react'
import SpinnerIndicator from './SpinnerIndicator'
import { StandardButton } from '../styles/Buttons'
import { FormatDateString } from '../utils/FormatDateString'
import Exercise from './Exercise'

const Workout = ({ workout, startCallback, finishCallback }) => {

    const [upcoming, setUpcoming] = useState(!workout.started && !workout.finished)
    const [active, setActive] = useState(workout.started && !workout.finished)
    const [done, setDone] = useState(workout.finished)
    const [exerciseState, setExerciseState] = useState({})

    useEffect(() => {
        const initialState = {}
        workout.exercises.map(
            e => {
                initialState[e.kind] = []
            }
        )
        setExerciseState(initialState)
    }, [])

    const start = (id) => {
        setActive(true) // nämä veke, menee Workoutlistin tilan (tietokannan) kautta?
        setUpcoming(false) //
        startCallback(id)
    }

    const finish = (id) => {
        setDone(true) // nämä veke, menee Workoutlistin tilan (tietokannan) kautta?
        setActive(false) //
        finishCallback(id, exerciseState)
    }

    const repsUpdated = (repsWithExerciseName) => {
        //console.log('Workout saa: ', repsWithExerciseName)
        const name = repsWithExerciseName.exerciseName
        const reps = repsWithExerciseName.repetitions
        setExerciseState({...exerciseState, [name]: reps})
    }

    useEffect(() => {
        //console.log('Workoutin tila: ', exerciseState)
    }, [exerciseState])

    if(upcoming) {
        return(
            <div>
            <tr>
                <h6>Seuraavaksi:</h6>
                {workout.exercises.map(
                    exercise => <Exercise key={exercise.id} exerciseData={exercise} upcoming={upcoming} active={active} done={done} />
                )}
            </tr>
            <tr>
                <StandardButton onClick={() => start(workout.id)}>Aloita {workout.serialNumber}. treeni</StandardButton>
            </tr>
            </div>
        )
    }

    if(active) {
        return(
            <div>
            <tr>
                {workout.exercises.map(
                    exercise => <Exercise key={exercise.id} exerciseData={exercise} upcoming={upcoming} active={active} done={done} repUpdateCallback={repsUpdated} />
                )}
            </tr>
            <tr>
                <StandardButton onClick={() => finish(workout.id)}>Valmis</StandardButton>
            </tr>
            </div>
        )
    }

    if(done) {
        return(
            <div>
            <tr>
                <h6>{FormatDateString(workout.date)}</h6>
            </tr>
            <tr>
                {workout.exercises.map(
                    exercise => <Exercise key={exercise.id} exerciseData={exercise} upcoming={upcoming} active={active} done={done} />
                )}
            </tr>
            </div>
        )
    }

    return(
        <SpinnerIndicator />
    )
}

export default Workout