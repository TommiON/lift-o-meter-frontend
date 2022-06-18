import styled, { css } from 'styled-components'

export const StandardButton = styled.button`
  background: "bisque";
  color: "black";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid DarkOliveGreen;
  border-radius: 3px;
`

export const RepButton = styled.button`
  background: DarkSeaGreen;
  color: "black";
  font-size: 1em;
  margin: 1em;
  padding: 0px;
  border: 2px solid OliveDrab;
  border-radius: 3px;
  width: 30px;
  height: 30px;

  ${props => 
    props.emptySet &&
    css`
        background: LightGray;
        color: Black;
        border: 2px solid Gray;
    `
  }

  ${props => 
    props.failingSet &&
    css`
        background: LightPink;
        color: Black;
        border: 2px solid Red;
    `
  }
`