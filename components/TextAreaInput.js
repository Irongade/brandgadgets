import React from 'react'
import { TextAreaContainer, TextAreaLabelDiv, TextAreaLabel, TextArea } from '../styles/globalStyles';


const TextAreaInput = ({label, placeholderText, halfWidth, noMargin, rows}) => {
    return (
        <TextAreaContainer halfWidth={halfWidth} noMargin={noMargin}>
            <TextAreaLabelDiv>
                <TextAreaLabel> {label} </TextAreaLabel>
            </TextAreaLabelDiv>
            <TextArea rows={rows} placeholder={placeholderText} /> 
                
            
        </TextAreaContainer>
    )
}

export default TextAreaInput
