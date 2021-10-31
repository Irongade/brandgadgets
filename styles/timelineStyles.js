import styled, {css} from "styled-components";
import { Text } from "./globalStyles";
import { breakpoints } from "./utilStyles";

export const TimelineContainer = styled.div`
    position: relative;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;

    &::after {
        content: '';
        position: absolute;
        width: 1px;
        background-color: #26CAC1;
        top: 0;
        bottom: 0;
        left: 2rem;
        margin-left: -3px;

        ${breakpoints("left", "", [
            { 700: '1.95rem' },
            { 400: '1.8rem' },
          ])};

        ${
            props => props.noHeight && css`
                height: 0px;
            `
        }
    }
`
export const TimelineContentContainer = styled.div`
    padding: 1px 50px;
    position: relative;
    background-color: inherit;
    width: 100%; 
    box-sizing: border-box;

`

export const TimelineLogoContainer = styled.div`
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    right: 54px;
    background-color: white;
    border: .5px solid #26CAC1;
    top: 0;
    left: 0.6%;
    border-radius: 50%;
    z-index: 1;
`

export const TimelineContentDiv = styled.div`
    padding-left: 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    box-sizing: border-box;
`

export const TimelineContentText = styled(Text)`
    margin: 10px;

    ${
        props => props.bold && css`
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 5px;
        `
    }
`