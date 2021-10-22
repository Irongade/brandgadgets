import styled, {css} from "styled-components";
import { Text } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${breakpoints("flex-direction", "", [
        { 1200: 'column' },
    ])};
`

export const YourItemsContainer = styled.div`
    width: 65%;
    margin-top: 2rem;
    margin-bottom: 10rem;

    ${breakpoints("width", "", [
        { 1270: '80%' },
        { 1033: '90%' },
        { 930: '50%' },
        { 750: '340px' },


    ])};

    ${breakpoints("margin-bottom", "", [
        { 1200: '1rem' },
    ])};
`

export const YourOrdersContainer = styled.div`
    width: 30%;
    margin: 2rem 0;

    ${breakpoints("width", "", [
        { 1200: '50%' },
        { 940: '80%' },
        { 500: '100%' },

    ])};

    ${breakpoints("margin-bottom", "", [
        { 1200: '3rem' },
    ])};
`

export const ButtonContainer = styled.div`
    margin-top: ${props => props.mt};
    display: flex;
    justify-content: space-between;
`

export const OrderDetailsContainer = styled.div`
    display: flex;    
    flex-direction: column;
    flex: 2;
`

export const OrderVatContainer = styled.div`
    margin-top: 3rem;
    display: flex;  
    flex: 1;
`

export const OrderDetailsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    ${
        props => props.noMarginBottom && css`
            margin-bottom: 0;
        `
    }
`

export const OrderPriceText = styled(Text)`
    display: inline-block;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.textColor.darkCyanBlue};

`
export const OrderName = styled(Text)`
    width: 80%;
    margin-bottom: .3rem;
    display: inline-block;
    color: ${props => props.theme.textColor.darkCyanBlue};

`

// cart item

export const CartItemContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;

    ${breakpoints("width", "", [
        { 930: '300px' },
    ])};
`

export const CartInfoContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    border: 1px solid #E3E5E8;
    border-radius: .5rem;
    overflow: hidden;
    box-sizing: border-box;

    ${breakpoints("flex-direction", "", [
        { 930: 'column' },
    ])};
`

export const CartImageContainer = styled.div`
    display: flex;
    position: relative;
    height:  10.5rem;
    // flex: 1;
    min-width: 10.5rem;
    background: #99ABC1;
`

export const CartDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: auto;
    flex: 1;
    padding: 1rem;
`

export const CartNameText = styled(Text)`
    margin-bottom: 1rem;

`

export const CartPriceDiv = styled.div`
    display: flex;
`


export const CartPriceText = styled(Text)`
    display: inline-block;
    margin-bottom: 1rem;
`

export const CartDiscountText = styled(Text)`
    display: inline-block;
    text-decoration: line-through;
    font-size: ${props => props.theme.fontSizes.xs};
    color: #99ABC1;
    margin-left: .5rem;
`

export const CartProductDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakpoints("flex-direction", "", [
        { 930: 'column' },
    ])};

    ${breakpoints("align-items", "", [
        { 930: 'flex-start' },
    ])};
`

export const CartColorDiv = styled.div`
    display: flex;
    align-items: center;
    width: 15%;

    ${breakpoints("width", "", [
        { 930: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 930: '1rem' },
    ])};
`

export const CartProductText = styled(CartNameText)`
    font-size: ${props => props.theme.fontSizes.xs};
    margin: 0;
    display: inline-block;
`

export const ItemColor = styled.div`
    width: 2rem;
    height: 2rem;
    background: #484C55;
    border-radius: .5rem;
    margin-left: .5rem;
`

export const CartQuantityDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0 1rem;
    width: 40%;

    ${breakpoints("width", "", [
        { 930: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 930: '1rem' },
    ])};

`

export const CartQuantityItem = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    width: 3rem;
    height: 2rem;
    border: 1px solid #E2E7EE;
    box-sizing: border-box;
    border-radius: 4px;
    margin-left: .5rem;
`

export const CartButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right: 0 1rem;
    width: 40%;
    ${breakpoints("width", "", [
        { 930: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 930: '1rem' },
    ])};
`
