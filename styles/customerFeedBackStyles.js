import styled from "styled-components";
import { Text } from "./globalStyles";
import {breakpoints} from './utilStyles'


export const CustomerFeedbackSection = styled.section`
    height: auto;
    padding: 6rem 3rem;
    background-color: ${props => props.theme.colors.lightOrange};

    ${breakpoints("padding", "", [
        { 500: '6rem 2rem' },
    ])};
`

export const CustomerFeedbackTitle = styled.h2`
    margin: 3rem auto;
    width: 100%;
    height: 5vh;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 40px;
    text-align: center;
    color: ${props => props.theme.textColor.darkCyanBlue};

    ${breakpoints("margin-bottom", "", [
        { 500: '7rem' },
    ])};
`

export const CustomerFeedbackCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    ${breakpoints("flex-direction", "", [
        { 500: 'column' },
    ])};
`

export const CustomerFeedbackCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    ${breakpoints("width", "", [
        { 500: '100%' },
    ])};
    ${breakpoints("margin-bottom", "", [
        { 500: '1rem' },
    ])};
`

export const CustomerFeedbackText = styled(Text)`
    color: ${props => props.theme.textColor.darkCyanBlue};

`

export const CustomerDiv = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    margin: 1rem 0;
`

export const CustomerImageDiv = styled.div`
    display: flex;
    flex: 1;
`
export const CustomerImageContainer = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 999px;
    overflow: hidden;
`

export const CustomerTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
`

export const CustomerName = styled(Text)`
    color: ${props => props.theme.textColor.darkCyanBlue};
`
export const CustomerWork = styled(Text)`
    color: ${props => props.theme.textColor.darkCyanBlue};
    font-size: ${props => props.theme.fontSizes.xs};
`