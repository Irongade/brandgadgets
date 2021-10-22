import React from 'react'
import {RadioContainer, RadioInput, RadioSpan } from '../styles/globalStyles';

const Radio = ({name, text}) => {
    return (
        <RadioContainer>
            {text}
            <RadioInput type="radio" name={name} />
            <RadioSpan></RadioSpan>
        </RadioContainer>
    )
}

export default Radio
