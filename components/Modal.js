import React from 'react'
import { ModalContainer, ModalContent, ModalTitle, ModalWrapper } from '../styles/modalStyles'

const Modal = ({children}) => {
    return (
        <ModalContainer visible={true} >
            <ModalWrapper visible={true}>
                    {children}
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal
