import React from 'react';
import { DropDownButtonDiv, DropDownButtonText, } from '../styles/dropDownStyles';

import {ReactComponent as DropDownLogo} from '../assets/svgs/dropdown.svg'

const DropDown = () => {
    return (
        <DropDownButtonDiv>
            <DropDownButtonText>
                Shop by Category
            </DropDownButtonText>
            <DropDownLogo />
        </DropDownButtonDiv>
    )
}

export default DropDown
