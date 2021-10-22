import styled, { css } from 'styled-components'
import {breakpoints} from './utilStyles'

export const NavContainer = styled.div`
    height: 5vh;
    background: ${props => props.theme.colors.orange};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;

    ${breakpoints("padding", "", [
        { 500: '0 1rem' },
    ])};
`

export const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${
        props => props.menu && css`
            ${breakpoints("display", "", [
                { 500: 'none' },
            ])};
        `
    }
`

export const NavText = styled.p`
    margin: 0;
    font-style: normal;
    font-weight: ${props => props.weight ? props.weight : '400'};
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: ${props => props.theme.fontSizes.xl};
    margin-right: 1.5rem;
    cursor: pointer;

    ${ props => props.noMargin && css`
        margin: 0;        
    `}
`


export const Menu = styled.div`
    display: none;
    button {
        transform-origin: center;
        border: none;
        padding: 0px;
        background: none;
        outline: none;
        span {
            width: 20px;
            height: 2px;
            display: block;
            background: white;
            margin: 4px;
        }
    }

    ${breakpoints("display", "", [
        { 500: 'flex' },
    ])};
`
