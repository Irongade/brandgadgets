import styled, {css} from "styled-components";
import { Text } from "./globalStyles";
import { breakpoints } from "./utilStyles";

export const OrderTrackingContainer = styled.div`
    display: flex;
    // justify-content: space-between;
    margin-bottom: 8rem;
    width: 70%;

    ${breakpoints("width", "", [
        { 1010: '80%' },
        { 900: '100%' },

      ])};
`

export const ShoppingItemContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #E3E5E8;
    border-radius: .5rem;
    
`
