import styled, {css} from "styled-components";
import { Text } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const AuthHeaderContainer = styled.header`
    height: 10vh;
    background: ${props => props.theme.colors.white};
    padding: 1rem 4rem;
    position: fixed;
    width: 100%;
    top: 0;
    overflow: hidden;
    z-index: 10;
    display: flex;

    & svg {
        ${breakpoints("margin", "", [
            { 1000: '0 auto' },
        ])};

    }

    ${breakpoints("padding", "", [
        { 1000: '1rem' },
    ])};
`

export const AuthMainContainer = styled.main`
    margin-top: 10vh;
    height: 120vh;
    background: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;

    ${
        props => props.smallerHeight && css`
            ${breakpoints("height", "", [
                { 1000: '90vh' },
            ])};
        `
    }
`

export const AuthBannerContainer = styled.div`
    position: relative;
    background-size: cover;
    background-image: url('/images/AuthOverlay.png');
    display: flex;
    width: 50%;
    height: 100%;
`

export const AuthContentContainer = styled.div`
    // position: relative;
    display: flex;
    // align-items: center;
    // background: ${props => props.theme.colors.background};
    width: 50%;
    height: 100%;
`

export const AuthContentDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 10rem 8rem;
    background: white;
    padding: 1rem;
    border-radius: .5rem;

    ${breakpoints("position", "", [
        { 1100: 'absolute' },
    ])};

    ${breakpoints("margin", "", [
        { 1100: '0' },
    ])};

    ${breakpoints("top", "", [
        { 1100: '20%' },
    ])};

    ${breakpoints("left", "", [
        { 1100: '14%' },
        { 1080: '22%' },
        { 600: '10%' },
        { 450: '5%' },
    ])};

    ${breakpoints("width", "", [
        { 1100: '50%' },
        { 600: '70%' },
        { 450: '80%' },

    ])};

    
`

export const AuthContentTitle = styled.h1`
    margin: 1rem auto;
    width: 100%;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 3rem;
    color: ${props => props.theme.textColor.darkCyanBlue};
`

export const AuthContentText = styled(Text)`
    margin-bottom: 2rem;
    font-weight: 400;
    color: ${props => props.theme.textColor.darkCyanBlue};
`

export const AuthInputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    // width: 80%;
    height: auto;
`

export const AuthButtonContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
`

export const AuthFooterText = styled(Text)`
    margin-bottom: 2rem;
    font-weight: 400;
    color: ${props => props.theme.textColor.darkCyanBlue};
`