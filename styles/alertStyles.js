import styled from "styled-components";
import { Text } from "./globalStyles";

export const AlertModalTitle = styled.h2`
    margin: .5rem auto;
    width: 100%;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 3rem;
    color: ${props => props.theme.colors.lightGreen};
    text-align: center;
` 

export const AlertModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const AlertLogoDiv = styled.div`
    // width: 100%;
    margin: 0 auto;
`

export const AlertModalText = styled(Text)`
` 