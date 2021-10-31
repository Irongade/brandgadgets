import styled, {css} from "styled-components"
import {breakpoints} from './utilStyles'

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 3rem;
    position: relative;
    width: auto;
    height: 100%;
    // @media (min-width: 1024px) {
    //     max-width: 960px;
    // }
    // @media (min-width: 1216px) {
    //     max-width: ;
    // }
    // @media (min-width: 1408px) {
    //     max-width: 1440px;
    //     margin: 0 auto;
    // }

    ${props => props.fluid && css`
        padding: 0;
        margin: 0;
        max-width: 100%;
        // width: 100vw;
    `}

    ${breakpoints("padding", "", [
        { 1320: '2.5rem' },
        { 1220: '2rem' },
        { 500: '10px' },

        // { 1034: 'repeat(2, 1fr)' },

    ])};
`

export const Main = styled.main`
    margin-top: 20vh;
    ${breakpoints("margin-top", "", [
        { 500: '30vh' },
    ])};
`

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    ${
        props => props.column && css`
            flex-direction: column;
        `
    }
    ${
        props => props.spaceBetween && css`
            justify-content: space-between;
        `
    }
    ${
        props => props.flexStart && css`
            justify-content: flex-start;
        ` 
    }
    ${
        props => props.flexStart && props.column && css`
            align-items: flex-start;
        ` 
    }
     ${
        props => props.flexEnd && css`
            justify-content: flex-end;
        `
    }
     ${
        props => props.alignTop && css`
            align-items: flex-start;
        `
    }
     ${
        props => props.noHeight && css`
            height: 0;
        `
    }
    ${
        props => props.halfWidth && css`
            width: 48%;
        `
    }
    ${
        props => props.w && css`
            width: ${props => props.w};
        `
    }

    ${
        props => props.alignStretch && css`
            align-items: stretch;
        `
    }

    ${
        props => props.mb && css`
            margin-bottom: ${props => props.mb};
        `
    }
    ${
        props => props.mt && css`
            margin-top: ${props => props.mt};
        `
    }
`

export const Button = styled.button`
display: inline-flex;
appearance: none;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
user-select: none;
position: relative;
white-space: nowrap;
vertical-align: middle;
outline: transparent solid 2px;
outline-offset: 2px;
width: auto;
border-radius: .5rem;
font-weight: 600;
transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
transition-duration: 200ms;
min-width: 2.5rem;
font-size: ${props => props.theme.fontSizes.md};
line-height: ${props => props.theme.fontSizes.xl};
padding: .75rem 1rem;
background: ${props => props.theme.colors.lightGreen};
color: ${props => props.theme.textColor.darkCyanBlue};
border: 0;
cursor: pointer;

&:hover, &:active {
    background: #26c1bb;
}

    ${
        props => props.fluid && css`
            width: 100%;
        `
    }

    ${
        props => props.halfWidth && css`
            width: 48%;
        `
    }

    ${
        props => props.secondary && css`
            background: ${props => props.theme.colors.teal};
            color: ${props => props.theme.textColor.darkGreen};
        `
    }

    ${
        props => props.marginRight && css`
            margin-right: 1rem;
        `
    }
`

export const Text = styled.p`
    font-style: normal;
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};;
    font-size: ${props => props.fontSize ? props.fontSize : props.theme.fontSizes.md};
    line-height: ${props => props.lineHeight ? props.lineHeight :  props.theme.sizes.xl};
    color: ${props => props.color ? props.color : props.theme.textColor.mediumCyanBlue};
    ${
        props => props.textCenter && css`
            text-align: center;
        `
    }
    ${
        props => props.bold && css`
            font-weight: 600;
            font-size: ${props => props.theme.fontSizes.xl};
            color: ${props => props.theme.textColor.mediumCyanBlue};
        `
    }
`

export const IncrementButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 40px;
    height: 48px;
    border: 1px solid #CFD2D5;
    box-sizing: border-box;
    border-radius: 4px;
    background: #fff;

    ${
        props => props.h && css`
            height: ${props => props.h};
        `
    }
`

export const DecrementButton = styled(IncrementButton)`
`

export const TextInputContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;

    ${breakpoints("margin-bottom", "", [
        { 600: '0rem' },
    ])};

    ${
        props => props.halfWidth && css`
            width: 48%;

            ${breakpoints("width", "", [
                { 600: '100%' },
            ])};
        `
    }
`
export const TextInputLabelDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0px;
`

export const TextInputLabel = styled.label`
    font-style: normal;
    margin: 0;
    line-height: ${props => props.theme.sizes.xl};
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.textColor.darkCyanBlue};
`

export const TextInputText = styled.p`
    margin: 0;
    color: ${props => props.theme.colors.darkGreen};
`

export const Input = styled.input`
    width: 100%;
    min-width: 0px;
    outline: transparent;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-size: 1rem;
    font-family: Inter, sans-serif;
    padding: 0px 1rem;
    height: 3rem;
    border-radius: 4px;
    border: 0.5px solid #CFD2D5;
    background: #F7F8FD;
    color: #898E9A;
    box-sizing: border-box;

    &::placeholder {
        font-size: 1rem;
        font-family: Inter, sans-serif;
        color: #898E9A; 
    }
`
export const PageHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const PageHeaderLogoContainer = styled.div`
`

export const PageHeaderTitle = styled.h2`
    margin: 1rem auto;
    width: 100%;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 3rem;
    color: ${props => props.theme.textColor.darkCyanBlue};
`
export const SelectInputContainer = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    margin-bottom: 1rem;

    ${breakpoints("margin-bottom", "", [
        { 600: '0rem' },
    ])};

    ${
        props => props.halfWidth && css`
            width: 48%;

            ${breakpoints("width", "", [
                { 600: '100%' },
            ])};
        `
    }
`
export const SelectInputLabelDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0px;
`

export const SelectInputLabel = styled.label`
    font-style: normal;
    margin: 0;
    line-height: ${props => props.theme.sizes.xl};
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.textColor.darkCyanBlue};
`

export const Select = styled.select`
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-size: 1rem;
    font-family: Inter, sans-serif;
    padding: 0px 1rem;
    height: 3rem;
    border-radius: 4px;
    border: 0.5px solid #CFD2D5;
    background: #F7F8FD;
    color: #898E9A;
    box-sizing: border-box;

    &::placeholder {
        font-size: 1rem;
        font-family: Inter, sans-serif;
        color: #898E9A; 
    }
`

export const SelectLogoDiv = styled.div`
    width: 1.5rem;
    height: 100%;
    right: 0.5rem;
    position: absolute;
    color: currentcolor;
    font-size: 1.25rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    pointer-events: none;
    top: 72%;
    transform: translateY(-50%);
`

export const TextAreaContainer = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    margin-bottom: 1rem;

    ${
        props => props.halfWidth && css`
            width: 48%;
        `
    }
    ${
        props => props.noMargin && css`
            margin: 0px;
        `
    }
`
export const TextAreaLabelDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0px;
`

export const TextAreaLabel = styled.label`
    font-style: normal;
    margin: 0;
    line-height: ${props => props.theme.sizes.xl};
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.textColor.darkCyanBlue};
`
export const TextArea = styled.textarea`
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-size: 1rem;
    font-family: Inter, sans-serif;
    padding: 1rem;
    // height: 3.5rem;
    min-height: 3.5rem;
    border-radius: 4px;
    border: 0.5px solid #CFD2D5;
    background: #F7F8FD;
    color: #898E9A;
    box-sizing: border-box;

    &::placeholder {
        font-size: 1rem;
        font-family: Inter, sans-serif;
        color: #898E9A; 
    }
`


export const CheckBoxContainer = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1rem;
    height: 1.75rem;
    font-weight: 600;
    color: ${props => props.theme.textColor.darkCyanBlue};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   
    &:hover input ~ span {
        background-color:#f7f7f7;
    }

    & input:checked ~ span {
        background-color: #FD9941;
    }

    & input:checked ~ span:after {
        display: block;
    }

    ${
        props => props.mediumWeight && css`
            font-weight: 400;
        `
    }
`
export const CheckBoxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

export const CheckBoxSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 1px solid #FD9941;
    box-sizing: border-box;
    border-radius: 4px;

    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

/////

export const RadioContainer = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 3rem;
    cursor: pointer;
    font-size: 1rem;
    height: 28px;
    font-weight: 600;
    color: ${props => props.theme.textColor.darkCyanBlue};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   
    &:hover input ~ span {
        background-color:#f7f7f7;
    }

    & input:checked ~ span {
        background-color: #FD9941;
    }

    & input:checked ~ span:after {
        display: block;
    }
`
export const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`

export const RadioSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 1px solid #FD9941;
    box-sizing: border-box;
    border-radius: 50%;

    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 7px;
        top: 7px;
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
    }
`

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: ${props => props.rows};
    grid-template-columns: ${props => props.columns};
    grid-gap: ${props => props.gap};
`