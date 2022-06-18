import React, {useState, useEffect} from 'react'
import SpinnerIndicator from './SpinnerIndicator'
import { StandardButton } from '../styles/Buttons'
import { FormatDateString } from '../utils/FormatDateString'
import Exercise from './Exercise'
import { BigHeader, SmallHeader } from '../styles/Text'
import { SeparatorLine } from '../styles/General'
import { SortWorkouts } from '../utils/WorkoutHelpers'

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
                <BigHeader>Seuraavaksi:</BigHeader>
                {workout.exercises.sort(SortWorkouts).map(
                    exercise => <Exercise key={exercise.id} exerciseData={exercise} upcoming={upcoming} active={active} done={done} />
                )}
            </tr>
            <tr>
                <StandardButton onClick={() => start(workout.id)}>Aloita</StandardButton>
            </tr>
            <SeparatorLine />
            </div>
        )
    }

    if(active) {
        return(
            <div>
            <tr>
                {workout.exercises.sort(SortWorkouts).map(
                    exercise => <Exercise key={exercise.id} exerciseData={exercise} upcoming={upcoming} active={active} done={done} repUpdateCallback={repsUpdated} />
                )}
            </tr>
            <tr>
                <StandardButton onClick={() => finish(workout.id)}>Valmis</StandardButton>
            </tr>
            <SeparatorLine />
            </div>
        )
    }

    if(done) {
        return(
            <div>
            <tr>
                <SmallHeader>{workout.serialNumber}. harjoitus ({FormatDateString(workout.date)})</SmallHeader>
            </tr>
            <tr>
                {workout.exercises.sort(SortWorkouts).map(
                    exercise => <Exercise key={exercise.id} exerciseData={exercise} upcoming={upcoming} active={active} done={done} />
                )}
            </tr>
            <SeparatorLine />
            </div>
        )
    }

    return(
        <SpinnerIndicator />
    )
}

export default Workout