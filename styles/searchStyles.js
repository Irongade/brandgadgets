import styled, { css } from "styled-components";
import { Text, Flex } from "./globalStyles";
import { ListGrid } from "./listStyles";
import {breakpoints} from './utilStyles'

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${breakpoints("flex-direction", "", [
        { 750: 'column' },
    ])};
`

export const SearchCriteriaContainer = styled.div`
    width: 20%;
    margin-top: 2rem;
    margin-bottom: 4rem;

    ${breakpoints("width", "", [
        { 965: '35%' },
        { 750: '100%' },

    ])};

    ${breakpoints("margin-bottom", "", [
        { 1100: '2rem' },
    ])};


    ${breakpoints("display", "", [
        { 750: 'none' },
    ])};
`

export const SearchCriteriaTitle = styled(Text)`
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
`

export const SearchItemsContainer = styled.div`
    display: flex;
    width: 76%;
    margin-top: 2rem;
    margin-bottom: 4rem;

    ${breakpoints("width", "", [
        { 965: '60%' },
        { 750: '100%' },
    ])};

    ${breakpoints("justify-content", "", [
        { 750: 'center' },
    ])};
`

export const SearchList = styled(ListGrid)`
    grid-template-columns: repeat(3, 1fr);  

    ${breakpoints("grid-template-columns", "", [
        { 1350: 'repeat(2, 1fr)' },
        { 965: 'repeat(1, 1fr)' },

    ])};
`
export const SearchCriteriaMobileContainer = styled(Flex)`
    display: none;
    width: 80%;
    margin: 2rem auto;
    ${breakpoints("display", "", [
        { 750: 'flex' },
    ])};
`

export const SearchCriteriaMobileTitle = styled(Text)`
    font-weight: 600;
    color: #12625A;
`