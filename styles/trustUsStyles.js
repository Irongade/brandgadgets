import styled from "styled-components";
import { Text } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const TrustUsSection = styled.div`
    margin: 3rem auto;
`

export const TrustUsTitle = styled.h2`
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

export const TrustUsCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    ${breakpoints("flex-direction", "", [
        { 500: 'column' },
    ])};
`

export const TrustUsCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    min-height: 100%;
    background-color: ${props => props.theme.colors.darkGreen};
    border-radius: ${props => props.theme.sizes.tiny};
    padding: ${props => props.theme.sizes.medium};
    box-sizing: border-box;


    ${breakpoints("width", "", [
        { 500: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 500: '2rem' },
    ])};
`

export const TrustUsCardTitle = styled.h3`
    margin: 1rem 0px;
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.sizes.xhuge};
    color: #F7F8FD;

`

export const TrustUsCardText = styled(Text)`
    font-size: ${props => props.theme.fontSizes.lg};
    color: #F7F8FD;
    // margin: .5rem 0px;
`