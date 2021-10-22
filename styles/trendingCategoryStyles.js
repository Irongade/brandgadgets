import styled from "styled-components";
import { Text } from "./globalStyles";

export const TrendingListContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox *

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`

export const TrendingItemContainer = styled.div`
    width: 304px;
    height: 360px;
    border: 1px solid #E2E7EE;
    border-radius: 8px;
    overflow: hidden;
    
`

export const TrendingItemImageContainer = styled.div`
    width: 304px;
    height: 304px;
    background: #E2E7EE;
`

export const TrendingItemTextContainer = styled.div`
    width: 304px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.white};
`

export const TrendingItemText = styled(Text)`
    text-transform: uppercase
`

