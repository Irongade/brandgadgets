import styled, {css} from "styled-components";
import {breakpoints} from './utilStyles'

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 100%;
`

export const ListTitle = styled.h3`
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: ${props => props.theme.sizes.huge};
    color: ${props => props.theme.colors.mediumCyanBlue};
    margin: 1rem 0;
`

export const ListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    grid-auto-rows: max-content;

    ${breakpoints("grid-gap", "", [
        { 1214: '1.5rem' },
    ])};

    ${breakpoints("grid-template-columns", "", [
        { 1320: 'repeat(3, 1fr)' },
        { 1034: 'repeat(2, 1fr)' },
        { 700: 'repeat(1, 1fr)' },

    ])};

    ${
        props => props.trendingList && breakpoints("grid-template-columns", "", [
            { 1400: 'repeat(4, 1fr)' },
        ])
    }
    
`