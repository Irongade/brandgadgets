import styled from "styled-components";
import {breakpoints} from './utilStyles'

export const ClientsSection = styled.div`
    margin: 6rem auto;
    box-sizing: border-box;

`

export const ClientsTitle = styled.h2`
    margin: 3rem auto;
    width: 100%;
    height: 5vh;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 40px;
    text-align: center;
    color: ${props => props.theme.textColor.mediumCyanBlue};
`

export const ClientsCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    ${breakpoints("flex-direction", "", [
        { 500: 'column' },
    ])};

    
`

export const ClientsCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 13%;
    height: 6.375rem;
    background-color: ${props => props.theme.colors.lightGrayishBlue};
    // border-radius: ${props => props.theme.sizes.tiny};
    padding: ${props => props.theme.sizes.medium};
    box-sizing: border-box;

    ${breakpoints("width", "", [
        { 500: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 500: '1rem' },
    ])};
`