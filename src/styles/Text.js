import styled from 'styled-components'
import { Link } from "react-router-dom"

export const BigHeader = styled.h3`
    text-align: left;
    color: DarkOliveGreen;
`

export const SmallHeader = styled.h6`
    text-align: left;
    color: DarkOliveGreen;
`

export const StyledLink = styled(Link)`
    color: DarkOliveGreen;
    font-weight: bold;
`

export const NavigationHeader = styled.h6`
    color: black;
    font-weight: bold;
`

export const NavigationLink = styled(Link)`
    color: DarkOliveGreen;
    font-weight: bold;
    text-decoration: none;
`

export const LoadText = styled.div`
    font-weight: bold;
`

export const SucceededLoadText = styled(LoadText)`
  color: ForestGreen;
`

export const FailedLoadText = styled(LoadText)`
    color: red;
`