import styled from "styled-components";
import { Text, GridContainer } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8rem;
    width: 100%;

    ${breakpoints("flex-direction", "", [
        { 1100: 'column' },
    ])};
`

export const CustomerDetailsContainer = styled.div`
    display: block;
    width: 60%;

    ${breakpoints("width", "", [
        { 1100: '100%' },
    ])};
`

export const CustomerDetailsDiv = styled.div`
    
`
export const CustomerDetailsText = styled(Text)`
    font-size: ${props => props.theme.fontSizes.sm};
    margin-top: 1rem;
    margin-left: 3rem;

`

export const OrderDetailsContainer = styled.div`
    display: block;
    width: 35%;

    ${breakpoints("width", "", [
        { 1100: '100%' },
    ])};
`


export const ButtonContainer = styled.div`
    margin-top: ${props => props.mt};
`

export const PaymentModalTitle = styled.h2`
    margin: 1rem auto;
    width: 100%;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 3rem;
    color: ${props => props.theme.textColor.darkCyanBlue};
` 

export const PaymentModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakpoints("flex-direction", "", [
        { 700: 'column' },
    ])};

    & div {
        ${breakpoints("width", "", [
            { 700: '100%' },
        ])};
    }
`

export const CheckoutGridContainer = styled(GridContainer)`
    ${breakpoints("grid-template-columns", "", [
        { 700: '1fr' },
    ])};
`
