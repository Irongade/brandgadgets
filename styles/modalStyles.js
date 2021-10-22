import styled, {css} from 'styled-components';
import { Text } from './globalStyles';

export const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
    opacity: 0;
    transition: opacity 250ms 700ms ease;
    ${
        props => props.visible && css`
            pointer-events: auto;
            opacity: 1;
            transition: all 300ms ease-in-out;
        `
    }
`

export const ModalWrapper = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    display: block;
    width: 40vw;
    height: auto;
    min-width: 260px;
    margin: 0 auto;
    padding: 3rem;
    background-color: #fff;
    align-self: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: .5rem;
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
    transform: scale(0);
    ${
        props => props.visible && css`
            opacity: 1;
            transform: scale(1);
            transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
        `
    }
`

export const DropDownModal = styled.div`
    position: absolute;
    top: 3rem;
    left: -1rem;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    width: 232px;
    border-radius: .5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background: #FFFFFF;

    opacity: 0;
    transform: scale(0.6);
    transition: opacity 50ms 250ms ease, transform 100ms 250ms ease;
    transform: scale(0);

    ${
        props => props.visible && css`
            opacity: 1;
            transform: scale(1);
            transition: opacity 50ms 300ms ease, transform 100ms 300ms ease;
        `
    }

`

export const DropDownModalText = styled(Text)`
    padding: 0 .5rem;
    margin-bottom: 1rem;
    cursor: pointer;
`


