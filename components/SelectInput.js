import React from 'react'
import { SelectInputContainer, SelectInputLabelDiv, SelectInputLabel, Select, SelectLogoDiv } from '../styles/globalStyles';

import {ReactComponent as SelectLogo} from '../assets/svgs/SelectDropdown.svg'

const SelectInput = ({label, placeholderText, halfWidth}) => {
    return (
        <SelectInputContainer halfWidth={halfWidth}>
            <SelectInputLabelDiv>
                <SelectInputLabel> {label} </SelectInputLabel>
            </SelectInputLabelDiv>
            <Select placeholder={placeholderText}> 
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>

            <SelectLogoDiv>
                <SelectLogo />
            </SelectLogoDiv>
        </SelectInputContainer>
    )
}

export default SelectInput
