import React from 'react'
import { Container } from '../styles/globalStyles'
import { DropDownContainer } from '../styles/dropDownStyles'

//components 
import DropDown from './DropDown'

const DropDownSection = () => {
    return (
        <DropDownContainer>
            <DropDown />
            <DropDown />
            <DropDown />
        </DropDownContainer>
    )
}

export default DropDownSection
