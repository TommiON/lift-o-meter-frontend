import React, { useState } from 'react'
import { StandardButton } from '../styles/Buttons'
import { Input} from '../styles/styles'
import { BigHeader, StyledLink } from '../styles/Text'

const LoginScreen = ({ loginFunction, visible }) => {
    
    const [userdata, setUserdata] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        event.preventDefault()
        const field = event.target.name
        const value = event.target.value
        setUserdata({
            ...userdata, [field]:value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        loginFunction(userdata)
        setUserdata({
            username: '',
            password: ''
        })
    }

    if(!visible) {
        return null
    }

    return(
        <div>
            <BigHeader>Kirjaudu sisään</BigHeader>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Käyttäjätunnus:</td>
                            <td><Input type="textfield" name="username" value={userdata.username} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Salasana:</td>
                            <td><Input type="password" name="password" value={userdata.password} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <StandardButton type="submit">Kirjaudu</StandardButton>
                <p>Ei käyttäjätunnusta? <StyledLink to="/signup">Rekisteröidy</StyledLink></p>
            </form>
        </div>
    )
}

export default LoginScreen