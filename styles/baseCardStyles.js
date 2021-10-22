import styled, {css} from "styled-components";
import { Text } from "./globalStyles";

export const BaseCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #E3E5E8;
    border-radius: .5rem;
    overflow: hidden;
    box-sizing: border-box;

    ${
        props => props.marginBottom && css`
            margin-bottom: ${props.marginBottom};
        `
    }
`

export const BaseCardTitleContainer = styled.div`
    width: 100%;
    padding: 1rem;
    height: auto;
    border-bottom: 1px solid #E3E5E8;
    box-sizing: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
` 

export const BaseCardTitle = styled(Text)`
    text-transform: uppercase;
    font-weight: 600;

    ${
        props => props.helpPage && css`
            color: #FA7E0A;
        `
    }
` 

export const BaseCardLogoDiv = styled.div`
    box-sizing: inherit;
` 
export const BaseContentContainer = styled.div`
    display: none;
    width: 100%;
    padding: 1rem;
    height: auto;
    box-sizing: inherit;
    transition: max-height 0.2s ease-out;

    ${
        props => props.halfPadding && css`
            padding: .5rem;
        `
    }

    ${
        props => props.dropdown && !props.active && css`
            max-height: 0;
            overflow: hidden;
        `
    }

    ${
        props => props.active && css`
            display: block;
            max-height: 'auto';
        `
    }
` 

export const BaseCardFooterContainer = styled.div`
    width: 100%;
    padding: 1rem;
    height: auto;
    border-top: 1px solid #E3E5E8;
    box-sizing: inherit;
    background: #F7F8FD;
` 

export const BaseCardFooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BaseCardFooterText= styled(Text)`
    display: inline-block;
    color: ${props => props.theme.textColor.darkCyanBlue};
    font-weight: 600;
`