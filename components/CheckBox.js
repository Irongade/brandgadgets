import React from 'react';
import {CheckBoxContainer, CheckBoxInput, CheckBoxSpan } from '../styles/globalStyles';

const CheckBox = ({text, mediumWeight}) => {
    return (
        <CheckBoxContainer mediumWeight={mediumWeight}>
                {text}
            <CheckBoxInput type="checkbox" />
            <CheckBoxSpan></CheckBoxSpan>
        </CheckBoxContainer>
    )
}

export default CheckBox
