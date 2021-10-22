import styled from "styled-components";
import { Text, Flex } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: auto;

    ${breakpoints("flex-direction", "", [
        { 900: 'column' },
    ])};
`
export const ProductImageContainer = styled.div`
    width: 45%;
    margin-top: 2rem;
    margin-bottom: 10rem;
    border-radius: .5rem;

    ${breakpoints("width", "", [
        { 900: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 900: '3rem' },
    ])};
`

export const ProductImageDiv = styled.div`
    overflow: hidden;
    border-radius: .5rem;
    background: #99ABC1;
    margin-bottom: 3rem;
`

export const ProductCarouselDiv = styled.div`
    width: 100%;
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`

export const ProductCarouselImageDiv = styled.div`
    width: 95px !important;
    height: 95px;
    background: #99ABC1;
    border-radius: 4.13043px;
    display: flex;
    justify-content: center;
    margin-right: 1rem;
`

export const YourOrdersContainer = styled.div`
    width: 30%;
    margin: 2rem 0;
`

export const ProductItemContainer = styled.div`
    width: 50%;
    margin-top: 2rem;
    margin-bottom: 4rem;


    ${breakpoints("width", "", [
        { 900: '100%' },
    ])};

`

export const ProductItemTitle = styled.h2`
    margin: 0;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.h2};
    line-height: 4.5rem;
    color: ${props => props.theme.textColor.mediumCyanBlue}
`

export const ProductInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin-bottom: 2rem;

    ${breakpoints("width", "", [
        { 1350: '90%' },
        { 1100: '100%' },

    ])};
`

export const SizeBarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: max-content;
    margin-bottom: 1rem;

    ${breakpoints("grid-template-columns", "", [
        { 1200: 'repeat(1, 1fr)' },
        { 900: 'repeat(2, 1fr)' },
        { 650: 'repeat(1, 1fr)' },
    ])};
`


export const ProductInfoText = styled(Text)`
    display: inline-block;
    margin: 0;
    margin-right: 1rem;
    font-family: Gilroy;
    font-style: normal;
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 1.5rem;
    color: ${props => props.theme.textColor.mediumCyanBlue}
`

export const ProductSectionTitle = styled(Text)`
    display: inline-block;
    margin-bottom: 1rem;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 2rem;
    color: ${props => props.theme.textColor.mediumCyanBlue}
`

export const ProductDescriptionText = styled(Text)`
    display: inline-block;
    margin-bottom: 2rem;
    font-family: Gilroy;
    font-style: normal;
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 1.5rem;
    color: ${props => props.theme.textColor.mediumCyanBlue}
`
export const ProductSizeText = styled(Text)`
    display: inline-block;
    margin: 0;
    font-family: Gilroy;
    font-style: normal;
    font-weight: ${props => props.bold ? '700' : '400'};
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: 1.5rem;
    color: ${props => props.theme.textColor.mediumCyanBlue}
`


export const ProductPositionDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;

// background: #FFFFFF;

border: 1px solid #E2E7EE;
box-sizing: border-box;
border-radius: 4px;
`

export const ProductButtonDiv = styled(Flex)`
    width: 40%;

    ${breakpoints("width", "", [
        { 1300: '50%' },
        { 1040: '60%' },
        { 900: '50%' },
        { 700: '60%' },
        { 550: '100%' },
    ])};
`

export const ProductListContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-bottom: 8rem;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox *

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`