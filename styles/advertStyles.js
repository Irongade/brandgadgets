import styled, { css } from 'styled-components'
import { Text } from './globalStyles'
import {breakpoints} from './utilStyles'

export const AdvertContainer = styled.div`
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40vh;

    ${breakpoints("flex-direction", "", [
        { 700: 'column' },
    ])};
`

export const AdvertDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E2E7EE;
    border-radius: 8px;
    width: 100%;
    height: 100%;

    ${
        props => props.halfWidth && css`
            width: 49%;

            ${breakpoints("width", "", [
                { 700: '100%' },
            ])};
        `
    }

    ${
        props => props.fullWidth && css`
            width: 100%;
            background: ${props => props.theme.colors.orange}
        `
    }
`
export const AdvertText = styled(Text)`

`