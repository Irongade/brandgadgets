import styled, { css } from "styled-components";
import { Text } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const RequestFormContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${breakpoints("flex-direction", "", [
        { 1100: 'column' },
    ])};
`

export const RequestQuoteContainer = styled.div`
    width: 65%;

    ${breakpoints("width", "", [
        { 1100: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 1100: '2rem' },
    ])};
`

export const RequestUploadContainer = styled.div`
    width: 30%;

    ${breakpoints("width", "", [
        { 1100: '40%' },
        { 900: '60%' },
        { 700: '100%' },
    ])};
`

export const RequestUploadItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem;
    margin: 1rem 0;
    background: #FFFFFF;
    border: 1px dashed #26CAC1;
    box-sizing: border-box;
    border-radius: 8px;

    ${
        props => props.padding && css`
            padding: ${props => props.padding};
        `
    }
`

export const RequestUploadItemText = styled(Text)`
    margin: .5rem 0px;

    ${
        props => props.green && css`
            color: ${props => props.theme.colors.darkGreen};
            font-weight: 600;
        `
    }
`

export const RequestQuoteDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${breakpoints("flex-direction", "", [
        { 600: 'column' },
    ])};
`

export const RequestButtonContainer = styled.div`
    margin: 1rem 0px;
    width: 30%;

    ${breakpoints("width", "", [
        { 700: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 1100: '2rem' },
    ])};
`

