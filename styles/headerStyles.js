import styled, { css } from 'styled-components'
import { Button } from './globalStyles'
import {breakpoints} from './utilStyles'

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    // overflow: hidden;
    z-index: 10;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);

    ${
        props => props.noBoxShadow && css`
            box-shadow: none;
        `
    }
`

export const HeaderSection = styled.div`
    height: 12vh;
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    align-items: center;
    padding: 0 3rem;
    background: ${props => props.theme.colors.white};

    ${breakpoints("flex-direction", "", [
        { 500: 'column' },
    ])};

    ${breakpoints("height", "", [
        { 500: '20vh' },
    ])};

    ${breakpoints("flex", "", [
        { 500: '.5' },
    ])};

    ${breakpoints("padding", "", [
        { 900: '0 2rem' },
        { 700: '0 1.5rem' },
        { 500: '0 1rem' },

    ])};
    
`

export const HeaderLogoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`
export const HeaderLogoIconDiv = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 20%;

    ${breakpoints("display", "", [
        { 500: 'flex' },
    ])};
`

export const HeaderSearchContainer = styled.div`
    display: flex;
    flex: 2;
    justify-content: space-between;
    width: 100%;
    
    ${breakpoints("flex", "", [
        { 500: '1' },
    ])};

    ${breakpoints("margin-top", "", [
        { 500: '.5rem' },
    ])};    
`

export const HeaderSearchInputDiv = styled.div`
    width: 85%;
    height: 2.6rem;
    position: relative;
    border-radius: .25rem;
    border: 0.5px solid #CFD2D5;
    background: inherit;
    padding-inline-start: 2rem;
    padding-inline-end: 1rem;
    background: #F7F8FD;
    padding-top: 3px;
    padding-bottom: 3px;

`

export const HeaderSearchInput = styled.input`
    width: 100%;
    min-width: 0px;
    outline: transparent;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-size: 1rem;
    font-family: Inter, sans-serif;
    height: 2.5rem;
    border-radius: 0;
    border-width: 0;
    background: inherit;
    color: #898E9A;

    &::placeholder {
        font-size: 1rem;
        font-family: Inter, sans-serif;
        color: #898E9A; 
    }
`
export const HeaderSearchInputSpan = styled.span`
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    width: 1.25rem;
    height: 1.5rem;
    display: inherit;
    position: absolute;
    top: 10%;
    left: -5px;
    z-index: 2;
    padding: 0.5rem;
`

export const HeaderSearchButton = styled(Button)`
    margin-left: 10px;
    max-height: 3rem;
`

export const HeaderIconContainer = styled.div`
    display: flex;
    flex: 1.1;
    justify-content: space-evenly;
    align-items: center;

    ${breakpoints("display", "", [
        { 500: 'none' },
    ])};
   
`

export const HeaderIconDiv = styled.div`
    display: flex;
    align-items: center;

    ${
        props => props.relative && css`
            position: relative;
        `
    }
`

export const HeaderIconText = styled.p`
    margin-left: .5rem;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.theme.fontSizes.md};
    line-height: ${props => props.theme.fontSizes.xl};
    cursor: pointer;
`