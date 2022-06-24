import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Redirect } from "react-router-dom"

// import { StandardButton } from '../styles/Buttons'
// import { Input} from '../styles/styles'
//import AuthService from '../services/AuthService'
import UserService from '../services/UserService'
import { BigHeader, SmallHeader } from '../styles/Text'
import { StandardButton } from '../styles/Buttons'
import { StyledFormLabel, StyledFormError, StyledInput, StyledKgInput } from '../styles/Form'

const UserAdder = ({ visible, notificationCallback }) => {

    const [userdata, setUserdata] = useState({
        username: '',
        password: '',
        bestSquat: '',
        bestBenchpress: '',
        bestRow: '',
        bestOverheadpress: '',
        bestDeadlift: ''
    })

    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [errors, setErrors] = useState({})

    const [done, setDone] = useState(false)

    if(done) {
        return <Redirect to="/workouts" />
    }        
   
    const validateForErrors = () => {
        const {username, password, bestSquat, bestBenchpress, bestRow, bestOverheadpress, bestDeadlift} = userdata
        const newErrors = {}

        if (!username || username.length < 3) newErrors.username = ' vähintään 3 merkkiä'
        if (username.length > 20) newErrors.username = ' enintään 20 merkkiä'

        if (!password || password.length < 5) newErrors.password = ' vähintään 5 merkkiä'
        if (password.length > 20) newErrors.password = ' enintään 20 merkkiä'
        if (password !== passwordConfirmation && password) newErrors.passwordConfirmation = ' eroavat'

        if (!bestSquat || bestSquat === '') newErrors.bestSquat = ' puuttuu'
        if (bestSquat && bestSquat < 20) newErrors.bestSquat = ' epärealistisen pieni'
        if (bestSquat > 300) newErrors.bestSquat = ' epärealistisen suuri'
       
        if (!bestBenchpress || bestBenchpress === '') newErrors.bestBenchpress = ' puuttuu'
        if (bestBenchpress && bestBenchpress < 10) newErrors.bestBenchpress = ' epärealistisen pieni'
        if (bestBenchpress > 200) newErrors.bestBenchPress = ' epärealistisen suuri'
        console.log('huhuu? penkin virhetilanne: ', newErrors)

        if (!bestRow || bestRow === '') newErrors.bestRow = ' puuttuu'
        if (bestRow && bestRow < 10) newErrors.bestRow = ' epärealistisen pieni'
        if (bestRow > 200) newErrors.bestRow = ' epärealistisen suuri'

        if (!bestOverheadpress || bestOverheadpress === '') newErrors.bestOverheadpress = ' puuttuu'
        if (bestRow && bestRow < 10) newErrors.bestRow = ' epärealistisen pieni'
        if (bestRow > 200) newErrors.bestRow = ' epärealistisen suuri'

        if (!bestDeadlift || bestDeadlift === '') newErrors.bestDeadlift = ' puuttuu'
        if (bestDeadlift && bestDeadlift < 20) newErrors.bestDeadlift = ' epärealistisen pieni'
        if (bestDeadlift > 300) newErrors.bestDeadlift = ' epärealistisen suuri'

        return newErrors
    }
    
    const handleChange = (event) => {
        event.preventDefault()
        const field = event.target.name
        const value = event.target.value

        if(field === 'password2') {
            setPasswordConfirmation(value)
        } else {
            setUserdata({
                ...userdata, [field]:value
            })
            if (!!errors[field]) {
                setErrors({
                    ...errors,
                    [field]: null
                })
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newErrors = validateForErrors()
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            UserService
                .postNew(userdata)
                .then(response => {
                    notificationCallback(`Käyttäjätili lisätty. Kirjaudu sisään, ${userdata.username}!`, false)
                })
                .catch(error => {
                    console.log('** UserAdder, handleSubmit, virhe: ', error.response)
                    if(error.response.status === 400) {
                        notificationCallback('Käyttäjätunnus on jo varattu!', true)
                    }
                })
            setUserdata({
                username: '',
                password: '',
                bestSquat: '',
                bestBenchpress: '',
                bestRow: '',
                bestOverheadpress: '',
                bestDeadlift: ''
            })
            setPasswordConfirmation('')
            setDone(true)
        }
    }

    /*
    if(!visible) {
        return null
    }
    */

    return(
        <div>
            <BigHeader>Lisää uusi käyttäjä</BigHeader>
            <form onSubmit={handleSubmit}>
                <StyledFormLabel>Käyttäjätunnus</StyledFormLabel>

                <StyledInput type='text' value={userdata.username} onChange={handleChange} name='username'/>
                { !!errors.username ? <StyledFormError>{errors.username}</StyledFormError> : '' }
                <br /><br/>

                <StyledFormLabel>Salasana</StyledFormLabel>
                <StyledInput type='password' value={userdata.password} onChange={handleChange} name='password'/>
                { !!errors.password ? <StyledFormError>{errors.password}</StyledFormError> : '' }
                <br /><br/>

                <StyledFormLabel>Salasana uudelleen</StyledFormLabel>
                <StyledInput type='password' value={userdata.passwordConfirmation} onChange={handleChange} name='password2'/>
                { !!errors.passwordConfirmation ? <StyledFormError>{errors.passwordConfirmation}</StyledFormError> : '' }
                <br/><br/>

                <SmallHeader>Arvioi 5X-maksimisi seuraavissa klassisissa voimaluliikkeissä: kuinka monella kilolla saat viisi toistoa?</SmallHeader>
                <br />

                <StyledFormLabel>Kyykky</StyledFormLabel>
                <StyledKgInput type='number' value={userdata.bestSquat} onChange={handleChange} name='bestSquat'/>
                { !!errors.bestSquat ? <StyledFormError>{errors.bestSquat}</StyledFormError> : '' }
                <br/><br/>

                <StyledFormLabel>Penkkipunnerrus</StyledFormLabel>
                <StyledKgInput type='number' value={userdata.bestBenchpress} onChange={handleChange} name='bestBenchpress'/>
                { !!errors.bestBenchpress ? <StyledFormError>{errors.bestBenchpress}</StyledFormError> : '' }
                <br/><br/>

                <StyledFormLabel>Kulmasoutu</StyledFormLabel>
                <StyledKgInput type='number' value={userdata.bestRow} onChange={handleChange} name='bestRow'/>
                { !!errors.bestRow ? <StyledFormError>{errors.bestRow}</StyledFormError> : '' }
                <br/><br/>

                <StyledFormLabel>Pystypunnerrus</StyledFormLabel>
                <StyledKgInput type='number' value={userdata.bestOverheadpress} onChange={handleChange} name='bestOverheadpress'/>
                { !!errors.bestOverheadpress ? <StyledFormError>{errors.bestOverheadpress}</StyledFormError> : '' }
                <br/><br/>
                
                <StyledFormLabel>Maastaveto</StyledFormLabel>
                <StyledKgInput type='number' value={userdata.bestDeadlift} onChange={handleChange} name='bestDeadlift'/>
                { !!errors.bestDeadlift ? <StyledFormError>{errors.bestDeadlift}</StyledFormError> : '' }
                <br/><br/>

                <StandardButton type='submit'>Rekisteröidy</StandardButton>
                <StandardButton>Peruuta</StandardButton>
            </form>
        </div>
    )
}

export default UserAdder