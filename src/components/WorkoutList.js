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
        console.log('WorkoutListin state päivittynyt, nyt: ', workouts)
    }, [workouts])
  
    const startWorkout = async (id) => {
        const changedWorkout = await workoutService.start(id)
        const index = workouts.findIndex(element => element.id === id)
        const workoutDataAsArray = []
        workouts.map(w => workoutDataAsArray.push(w))
        workoutDataAsArray[index] = changedWorkout
        setWorkouts(workoutDataAsArray)
    }

    const finishWorkout = async (id, reps) => {
        console.log('Ylätaso saa valmiiksi tulleen: ', reps)
        const finishResponse = await workoutService.finish(id, reps)

        const completedWorkout = finishResponse.completed
        const index = workouts.findIndex(element => element.id === id)
        const workoutDataAsArray = []
        workouts.map(w => workoutDataAsArray.push(w))
        workoutDataAsArray[index] = completedWorkout
        
        // quick and ridiculous hack...
        setTimeout(async () => {
            const nextWorkoutId = finishResponse.idForNext
            const nextWorkout = await workoutService.getOne(nextWorkoutId)
            workoutDataAsArray.unshift(nextWorkout)
            setWorkouts(workoutDataAsArray)
        }, 1000)
    }

    if(!workouts) {
        return <SpinnerIndicator />
    }
    
    return(
        <table>
            {workouts.map(
                w => <Workout key={w.id} workout={w} startCallback={startWorkout} finishCallback={finishWorkout} />
            )}
        </table>
    )
}

export default WorkoutList