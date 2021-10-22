import styled from "styled-components";
import { Text } from "./globalStyles";
import {breakpoints} from './utilStyles'

export const FooterSection = styled.footer`
    height: auto;
`

export const FooterTopSection = styled.div`
    height: auto;
    padding: 6rem;
    background-color: ${props => props.theme.textColor.mediumCyanBlue};
    display: flex;

    ${breakpoints("flex-direction", "", [
        { 1000: 'column' },
    ])};

    ${breakpoints("padding", "", [
        { 1000: '3rem' },
    ])};
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${props => props.flex ? props.flex : '1'};
`

export const FooterTitle = styled.h4`
    margin: 1.5rem 0px;
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: ${props => props.theme.sizes.huge};
    color: #F7F8FD;
`

export const FooterText = styled(Text)`
    width: 80%;
    margin: .5rem 0px;
    font-size: ${props => props.theme.fontSizes.md};
    line-height: ${props => props.theme.sizes.xl};
    color: #F7F8FD;

    ${breakpoints("width", "", [
        { 500: '100%' },
    ])};
`

export const FooterLogoDiv = styled.div`
   margin-bottom: 2rem;
   height: auto;
   width: auto;
`

export const FooterContactUsDiv = styled.div`
   margin-top: 6rem;
`

export const FooterContactUsText = styled(Text)`
    margin: 1rem 0px;
    font-weight: 700;
    color: #F7F8FD;
`

export const FooterContactUsLogoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 14rem;
`

export const FooterBottomSection = styled.div`
    height: auto;
    padding: 1rem 6rem;
    background-color: ${props => props.theme.textColor.darkCyanBlue};
    display: flex;
    align-items: center;

    ${breakpoints("padding", "", [
        { 500: '1rem 3rem' },
    ])};
`

export const FooterBottomSectionText = styled(Text)`
    margin: 1rem 0px;
    color: #F7F8FD;
    // vertical-align: center;
`
