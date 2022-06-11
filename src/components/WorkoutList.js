import React, {useState, useEffect} from 'react'
import workoutService from '../services/WorkoutService'
import SpinnerIndicator from './SpinnerIndicator'
import Workout from './Workout'

const WorkoutList = ({ notificationCallback }) => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        async function fetchWorkouts() {
            const workoutData = await workoutService.get()
            const workoutDataAsArray = []
            workoutData.map(d => workoutDataAsArray.push(d))
            setWorkouts(workoutDataAsArray)
        }
        fetchWorkouts()
    }, [])

    useEffect(() => {
        console.log('STATE PÄIVITTYY, NYT: ', workouts)
    }, [workouts])
  
    console.log('STATE: ', workouts)

    const startWorkout = async (id) => {
        const changedWorkout = await workoutService.start(id)
        const index = workouts.findIndex(element => element.id === id)
        const workoutDataAsArray = []
        workouts.map(w => workoutDataAsArray.push(w))
        workoutDataAsArray[index] = changedWorkout
        setWorkouts(workoutDataAsArray)
    }

    const finishWorkout = async (id) => {
        const finishResponse = await workoutService.finish(id)
        const completedWorkout = finishResponse.completed
        const nextWorkout = finishResponse.next
        const index = workouts.findIndex(element => element.id === id)
        const workoutDataAsArray = []
        workouts.map(w => workoutDataAsArray.push(w))
        workoutDataAsArray[index] = completedWorkout
        workoutDataAsArray.unshift(nextWorkout)
        setWorkouts(workoutDataAsArray)
    }

    if(!workouts) {
        return <SpinnerIndicator />
    }
    
    return(
        <div>
            {workouts.map(
                workout => <Workout key={workout.id}
                                    id={workout.id}
                                    serialNumber={workout.serialNumber}
                                    started={workout.started}
                                    finished={workout.finished}
                                    date={workout.date}
                                    exercises={workout.exercises}
                                    startCallback={startWorkout}
                                    finishCallback={finishWorkout} />
            )}
        </div>
    )
}

/*
 
                                 */

export default WorkoutList