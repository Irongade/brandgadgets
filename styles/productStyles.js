import styled from 'styled-components';
import { Text } from './globalStyles';
import {breakpoints} from './utilStyles'

export const ProductListContainer = styled.div`
    margin-bottom: 5rem;
`

export const ProductItemContainer = styled.div`
    width: 304px;
    // height: 512px;
    border: 1px solid #E2E7EE;
    border-radius: 8px;
    overflow: hidden;
`

export const ProductItemImageContainer = styled.div`
    width: 304px;
    height: 304px;
    background: #E2E7EE;
`

export const ProductItemDetailsContainer = styled.div`
    width: 304px;
    max-width: 304px;
    background: ${props => props.theme.colors.white};
    padding: 1rem;
    padding-bottom: 0px;
    box-sizing: border-box;

`

export const ProductItemButtonContainer = styled.div`
    width: 304px;
    max-width: 304px;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`

export const ProductItemName = styled(Text)`
    margin-bottom: .875rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`

export const ProductItemPrice = styled(Text)`
    font-weight: 600;
    margin: 1rem 0;
`

export const ProductItemQuantity = styled(Text)`
    font-size: ${props => props.theme.fontSizes.sm};
    color: #99ABC1;
`

export const ProductItemButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
`

export const ProductItemCount = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 59px;
    height: 48px;
    background: #FFFFFF;
    margin: 0px .3rem;

    border: 0.5px solid #CFD2D5;
    box-sizing: border-box;
    border-radius: 4px;
`

export const ProductItemCountText = styled(Text)`
   
`