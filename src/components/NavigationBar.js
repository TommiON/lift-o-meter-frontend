import React from 'react'
import { BigHeader, StyledLink, NavigationHeader, NavigationLink } from '../styles/Text'
import { NavHeaderCell, NavLinkCell } from '../styles/Table'
import { Navigation } from '../styles/styles'

const NavigationBar = ( {logoutFunction, loggedIn } ) => {

    if(!loggedIn) {
        return(
            <Navigation>
                <table>
                    <tr>
                        <NavHeaderCell><NavigationHeader>Lift-o-meter</NavigationHeader></NavHeaderCell>
                    </tr>
                </table>
            </Navigation>
        )
    }

    return(
        <Navigation>
             <table>
                <tr>
                    <NavHeaderCell><NavigationHeader>Lift-o-meter</NavigationHeader></NavHeaderCell>
                    <NavLinkCell><NavigationLink to="/workouts">Treenit</NavigationLink></NavLinkCell>
                    <NavLinkCell><NavigationLink to="/stats">Kehitys</NavigationLink></NavLinkCell>
                    <NavLinkCell><NavigationLink to="/profile">Profiili</NavigationLink></NavLinkCell>
                    <NavLinkCell><NavigationLink to="/logout" onClick={logoutFunction}>Logout</NavigationLink></NavLinkCell>
                </tr>
            </table>
        </Navigation>
    )

}

export default NavigationBar