import React, {useState, useEffect} from 'react'
import { RepButton } from '../styles/Buttons'
import DecreaseUsingRollover from '../utils/DecreaseUsingRollover'

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

    const repButtons = []

    let amount = 5
    if(exerciseName === 'DEADLIFT') {
        amount = 1
    }

    for(let i = 0; i < amount; i++) {
        const button = <RepButton key={i} onClick={() => updateRep(i)}>{reps[i]=== null ? ' ' : reps[i]}</RepButton>
        repButtons.push(button)
    }

    return(
        <div>
            {repButtons}
        </div>
    )
}

export default Repetitions