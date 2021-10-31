import styled, {css} from "styled-components";
import { Text, GridContainer, Flex } from "./globalStyles";
import { breakpoints } from "./utilStyles";

export const ShoppingListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8rem;
    width: 100%;
`

export const ListContainer = styled.div`
    display: block;
    width: 70%;

    ${breakpoints("width", "", [
        { 700: '100%' },
    ])};

`

export const ShoppingItemContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #E3E5E8;
    border-radius: .5rem;
`

export const ShoppingItemImageDiv = styled.div`
    width: 72px;
    background: #E3E5E8;
`

export const ShoppingItemDiv = styled.div`
    padding: 1rem;
`

export const ShoppingItemText = styled(Text)`

    ${
        props => props.bold && css`
            font-weight: 600;
            font-size: 1rem;
        `
    }
`

export const ShoppingTotalDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;

    ${breakpoints("align-items", "", [
        { 700: 'flex-start' },
    ])};
`
export const ShoppingItemGridContainer = styled(GridContainer)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    ${breakpoints("grid-template-columns", "", [
        { 700: '1fr' },
    ])};
`

export const ShoppingItemTextDiv = styled(Flex)`
    width: 25%;

    ${breakpoints("width", "", [
        { 1270: '40%' },
        { 880: '60%' },
        { 700: '100%' },
    ])};
`