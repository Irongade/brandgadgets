import styled, { css } from 'styled-components'
import { Text } from './globalStyles'
import {breakpoints} from './utilStyles'

export const DropDownContainer = styled.div`
    display: flex;
    // align-items: center;
    justify-content: space-between;
    margin: 3rem auto;

    ${breakpoints("flex-direction", "", [
        { 700: 'column' },
    ])};

    ${breakpoints("width", "", [
        { 700: '100%' },
    ])};
`

export const DropDownButtonDiv = styled.div`
    width: 28%;
    background: ${props => props.theme.colors.lightGrey};
    border-radius: ${props => props.theme.sizes.tiny};
    padding: ${props => props.theme.sizes.xl};
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakpoints("width", "", [
        { 500: '100%' },
    ])};

    ${breakpoints("margin-bottom", "", [
        { 500: '1rem' },
    ])};
`

export const DropDownButtonText = styled(Text)`
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: 600;
    line-height: ${props => props.theme.sizes.huge};
    color: ${props => props.theme.colors.darkCyanBlue};
`

