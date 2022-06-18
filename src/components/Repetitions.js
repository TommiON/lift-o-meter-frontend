import React, {useState, useEffect} from 'react'
import { RepButton } from '../styles/Buttons'
import DecreaseUsingRollover from '../utils/DecreaseUsingRollover'
import { RepCell } from '../styles/Table'

const Repetitions = ({ exerciseName, repUpdateCallback }) => {
    const [reps, setReps] = useState([null, null, null, null, null])

    const updateRep = (index) => {
        let repArray = []

        let repCount = reps[index]
        repCount = DecreaseUsingRollover(repCount)

        let i = 0;
        reps.map(
            r => {
                if(i === index) {
                    repArray.push(repCount)
                } else {
                    repArray.push(reps[i])
                }
                i++;
            }
        )
        setReps(repArray)
    }

    useEffect(() => {
        repUpdateCallback(reps)
    }, [reps])

    const notStarted = (repCount) => repCount === null
    const failing = (repCount) => repCount < 5 && repCount !== null

    const repButtons = []

    let amount = 5
    if(exerciseName === 'DEADLIFT') {
        amount = 1
    }

    for(let i = 0; i < amount; i++) {
        let button = null
        if(notStarted(reps[i])) {
            button = <RepButton emptySet key={i} onClick={() => updateRep(i)}>{reps[i]=== null ? ' ' : reps[i]}</RepButton>
        } else if(failing(reps[i])) {
            button = <RepButton failingSet key={i} onClick={() => updateRep(i)}>{reps[i]=== null ? ' ' : reps[i]}</RepButton>
        } 
        else {
            button = <RepButton key={i} onClick={() => updateRep(i)}>{reps[i]=== null ? ' ' : reps[i]}</RepButton>
        }
    
        repButtons.push(button)
    }

    return(
        <div>
            {repButtons.map( b => {
                return(
                    <RepCell key={repButtons.indexOf(b)}>
                        {b}
                    </RepCell>
                )
                })
            }
        </div>
    )
}

export default Repetitions