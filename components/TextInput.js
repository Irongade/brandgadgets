import React from 'react'
import { Input, TextInputContainer, TextInputLabel, TextInputLabelDiv, TextInputText } from '../styles/globalStyles'

const TextInput = ({label, placeholderText, halfWidth}) => {
    return (
        <TextInputContainer halfWidth={halfWidth}>
            <TextInputLabelDiv>
                <TextInputLabel> {label} </TextInputLabel>
                {
                    label === 'Password' && <TextInputText> Forgot Password </TextInputText>
                }
            </TextInputLabelDiv>
            <Input type="text" placeholder={placeholderText} />
        </TextInputContainer>
    )
}

export default TextInput
