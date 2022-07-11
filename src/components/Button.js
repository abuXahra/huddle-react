import React from 'react'
import { StyledButton } from './style/Button.style'

function Button(props) {
    return (
        <StyledButton color={props.color} bg={props.bg}>{props.text}</StyledButton>
    )
}

export default Button